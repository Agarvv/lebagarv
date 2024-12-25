import React from 'react';
import styles from './CarImages.module.css';

import logo from 'src/logo.svg'

const CarImages = () => {
    return (
        <div className={styles.carImages}>
            <img src={logo} alt="Car Image" />
            <div className={styles.imageIndex}>
                <p>1/3</p>
            </div>
        </div>
    );
};

export default CarImages;