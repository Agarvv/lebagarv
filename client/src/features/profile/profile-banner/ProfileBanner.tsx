import React from 'react';
import { isSelfProps } from '../types';
import styles from './ProfileBanner.module.css';
import logo from 'src/logo.svg';
import useImageUpload from 'src/hooks/useImageUpload';
import useSetProfileBanner from 'src/hooks/useSetProfileBanner';

const ProfileBanner: React.FC<isSelfProps> = ({ isSelf, valueToDisplay }) => {
    const { imageUrl, uploadImage } = useImageUpload();
    const { mutate } = useSetProfileBanner();  
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleBannerChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const image = await uploadImage(file, 'image');
                console.log('Banner uploaded successfully!', image);
                mutate(image); 
                window.location.reload()
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
                src={valueToDisplay || logo}
                alt="banner"
                onClick={isSelf && triggerInput}
            />
        </>
    );
};

export default ProfileBanner;