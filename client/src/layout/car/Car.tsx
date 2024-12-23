import React from 'react';
import styles from './Car.module.css';
import logo from 'src/logo';  

const Car = () => {
  return (
    <div className={styles.car}>
      <div className={styles.carImage}>
        <img src={logo} alt="Car Image" />
      </div>
      <div className={styles.carDetails}>
        <div className={styles.carTitle}>
          <p>Lamborghini Huracan Performante</p>
        </div>
        <div className={styles.carPrice}>
          <strong>$ 234,488</strong>
        </div>
      </div>
    </div>
  );
};

export default Car;