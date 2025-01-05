import React, { useState } from 'react';
import styles from './CarImages.module.css';

import logo from 'src/logo.svg';

interface Props {
    images: string[];
}

const CarImages: React.FC<Props> = ({ images }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className={styles.carImages}>
         <div
           className={styles.controlPrev}
          onClick={prevImage}>
            <i className="fa fa-arrow-left"></i>
         </div>
            <div className={styles.slider}>
              <img src={images[currentIndex]}/>
            </div>
            <div className={styles.imageIndex}>
                <p>{currentIndex + 1}/{images.length}</p>
            </div>


          <div className={styles.controlNext}
          onClick={nextImage}>
            <i className="fa fa-arrow-right"></i>
            </div>
        </div>
    );
};

export default CarImages;