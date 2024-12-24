import React, { useState, useRef } from 'react';
import sharedCarFormStyles from '../../CarForm.module.css';
import styles from './CarFormImages.module.css';

const CarFormImages = () => {
    const [images, setImages] = useState([]); 
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
      if (images.length < 4) {
        fileInputRef.current.click(); 
      }
    };

    const handleFileChange = (e) => {
      console.log(e.target)
    };

    return (
      <>
        <div className={sharedCarFormStyles.field}>
          <label htmlFor="Car Pictures">Car Pictures</label>
          <input 
            type="file" 
            multiple 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            style={{ display: 'none' }} 
          />
          <div className={styles.carPictures}>
            <div onClick={handleImageClick}>
              {images[0] && <img src={images[0]} alt="Car pic 1" />}
            </div>
            <div onClick={handleImageClick}>
              {images[1] && <img src={images[1]} alt="Car pic 2" />}
            </div>
            <div onClick={handleImageClick}>
              {images[2] && <img src={images[2]} alt="Car pic 3" />}
            </div>
            <div onClick={handleImageClick}>
              {images[3] && <img src={images[3]} alt="Car pic 4" />}
            </div>
          </div>
        </div>
      </>
    );
}

export default CarFormImages;