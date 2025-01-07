import React, { useState } from 'react';
import styles from './CarImages.module.css';
import { CarDetails } from 'src/types/cars/CarDetails';
import AddOrRemoveFavorite from '../add-or-remove-favorite/AddOrRemoveFavorite'

interface Props {
    car: CarDetails
}

const CarImages: React.FC<Props> = ({ car }: Props) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
  if (car?.images?.length && currentIndex < car.images.length - 1) {
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
      <div className={styles.controlPrev} onClick={prevImage}>
        <i className="fa fa-arrow-left"></i>
      </div>
      <div className={styles.slider}>
       <AddOrRemoveFavorite 
        carId={car?.id}
        isFavorite={car?.isFavorite}
       /> 
        <img src={car?.images[currentIndex]} alt="Car" />
      </div>
      <div className={styles.imageIndex}>
        <p>
          {currentIndex + 1}/{car?.images.length}
        </p>
      </div>
      <div className={styles.controlNext} onClick={nextImage}>
        <i className="fa fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default CarImages;