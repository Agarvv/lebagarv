import React, { useState } from 'react';
import sharedCarFormStyles from '../../CarForm.module.css';
import styles from './CarFormImages.module.css';
import useImageUpload from 'src/hooks/useImageUpload';

const CarFormImages = () => {
    const { uploadImage } = useImageUpload();
    const [images, setImages] = useState<string[]>([]); 

    const handleImageClick = () => {
        const fileInput = document.querySelector<HTMLInputElement>('#fileInput');
        if (images.length < 4 && fileInput) {
            fileInput.click(); 
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 1) {
            Array.from(files).forEach(async (file) => {
                if (file.type.startsWith('image/')) {
                    const imageUrl = await uploadImage(file, 'image'); 
                    setImages(prevImages => [...prevImages, imageUrl]);
                }
            });
        } else if (files && files.length === 1) {
            const imageUrl = await uploadImage(files[0], 'image');
            setImages(prevImages => [...prevImages, imageUrl]);
        }
    };

    return (
        <div className={sharedCarFormStyles.field}>
            <label htmlFor="fileInput">Car Pictures</label>
            <input 
                type="file" 
                multiple 
                id="fileInput" 
                onChange={handleFileChange} 
                style={{ display: 'none' }} 
            />
            <div className={styles.carPictures}>
                {[0, 1, 2, 3].map(index => (
                    <div key={index} onClick={handleImageClick}>
                        {images[index] && <img src={images[index]} alt={`Car pic ${index + 1}`} />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarFormImages;