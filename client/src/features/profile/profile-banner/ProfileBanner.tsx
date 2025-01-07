import React from 'react';
import { isSelfProps } from '../types';
import styles from './ProfileBanner.module.css';
import logo from 'src/logo.svg';
import useImageUpload from 'src/hooks/useImageUpload';
import { usePost } from 'src/hooks/usePost';
import { setUserProfileBanner } from 'src/api/services/profile/ProfileService';

const ProfileBanner: React.FC<isSelfProps> = ({ isSelf, valueToDisplay }) => {
    const { imageUrl, uploadImage } = useImageUpload();
    
    const { mutate } = usePost<string>({
        serviceFunc: setUserProfileBanner,
        successMessage: "Your banner is all set!",
        withError: true,
        withLoading: true 
    });  
    
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleBannerChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const image = await uploadImage(file, 'image');
                console.log('Banner uploaded successfully!', image);
                mutate(image); 
                //window.location.reload()
            } catch (error) {
                console.error('Error uploading banner:', error);
            }
        }
    };

    const triggerInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); 
        }
    };

    return (
        <>
            <input
                type="file"
                ref={fileInputRef} 
                style={{ display: 'none' }}
                onChange={handleBannerChange} 
            />
            <img
                className={styles.banner}
                src={valueToDisplay ?? logo}
                alt="banner"
                onClick={isSelf ? triggerInput : undefined}
            />
        </>
    );
};

export default ProfileBanner;