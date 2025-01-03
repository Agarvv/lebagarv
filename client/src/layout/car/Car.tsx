import React from 'react';
import styles from './Car.module.css';
import logo from 'src/logo.svg';
import { CarShowcase } from 'src/types/cars/CarShowcase';

interface Props {
  car: CarShowcase;
}

const Car: React.FC<Props> = ({ car }) => {
  return (
    <div className={styles.car}>
      <div className={styles.carImage}>
        <img src={logo} alt="Car Image" />
      </div>
      <div className={styles.carDetails}>
        <div className={styles.carTitle}>
          <p>{car?.title ?? 'Not Provided'}</p>
        </div>
        <div className={styles.carPrice}>
          <strong>$ {car?.price ?? 0}</strong>
        </div>
      </div>
    </div>
  );
};

export default Car;