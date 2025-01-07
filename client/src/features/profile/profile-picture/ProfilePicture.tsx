import React from 'react';
import { isSelfProps } from '../types';
import styles from './ProfilePicture.module.css';
import logo from 'src/logo.svg';
import useImageUpload from 'src/hooks/useImageUpload';
import { usePost } from 'src/hooks/usePost';
import { setUserProfilePicture } from 'src/api/services/profile/ProfileService';

const ProfilePicture: React.FC<isSelfProps> = ({ isSelf, valueToDisplay }) => {
    const { imageUrl, uploadImage } = useImageUpload();

    const { mutate } = usePost<string>({
        serviceFunc: setUserProfilePicture,
        successMessage: "Your Profile Picture Is Set!",
        withError: true,
        withLoading: true
    });

    const fileInputRef = React.useRef<HTMLInputElement>(null); 

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const image = await uploadImage(file, 'image');
                console.log('Image uploaded successfully!', image);
                mutate(image); 
                //window.location.reload()
            } catch (error) {
                console.error('Error uploading image:', error);
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
                onChange={handleImageChange}
            />
            <img
             src={valueToDisplay ?? logo}
             alt="Profile picture"
             className={styles.profilePicture}
             onClick={isSelf ? triggerInput : undefined}
            />

        </>
    );
};

export default ProfilePicture;