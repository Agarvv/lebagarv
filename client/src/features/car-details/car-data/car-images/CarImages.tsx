import React from 'react';
import styles from './CarImages.module.css';

import logo from 'src/logo.svg'

interface Props {
    images: string[] 
}

const CarImages: React.FC<Props> = ({ images }: Props) => {
    return (
        <div className={styles.carImages}>
            <img src={images[0] ?? logo} alt="Car Image" />
            <div className={styles.imageIndex}>
                <p>1/3</p>
            </div>
        </div>
    );
};

export default CarImages;