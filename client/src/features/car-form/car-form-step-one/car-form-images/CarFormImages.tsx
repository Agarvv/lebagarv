import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import sharedCarFormStyles from '../../CarForm.module.css';
import styles from './CarFormImages.module.css';
import useImageUpload from 'src/hooks/useImageUpload';

const CarFormImages = () => {
    const { setValue, watch } = useFormContext();
    const { uploadImage } = useImageUpload();
    const images = watch('images') || [];

    const handleImageClick = () => {
        const fileInput = document.querySelector<HTMLInputElement>('#fileInput');
        if (images.length < 4 && fileInput) {
            fileInput.click();
        }
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const uploadedImages: string[] = [];
            for (const file of Array.from(files)) {
                if (file.type.startsWith('image/')) {
                    const imageUrl = await uploadImage(file, 'image');
                    uploadedImages.push(imageUrl);
                }
            }
            setValue('images', [...images, ...uploadedImages]);
        }
    };

    const removeImage = (index: number) => {
        const updatedImages = images.filter((_: any, i: any) => i !== index);
        setValue('images', updatedImages);
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
                {[0, 1, 2, 3].map((index) => (
                    <div
                        key={index}
                        className={styles.pictureSlot}
                        onClick={handleImageClick}
                    >
                        {images[index] ? (
                            <div className={styles.imageContainer}>
                                <img
                                    src={images[index]}
                                    alt={`Car pic ${index + 1}`}
                                />
                                <div className={styles.removeBtn}>
                                    <i
                                        onClick={() => removeImage(index)}
                                        className="fa fa-close"
                                    ></i>
                                </div>
                            </div>
                        ) : (
                            <span className={styles.placeholder}>+</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarFormImages;