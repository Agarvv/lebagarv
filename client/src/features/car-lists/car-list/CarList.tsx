import React from 'react';
import styles from './CarList.module.css';
import Car from 'src/layout/car/Car';
import { CarShowcase } from 'src/types/cars/CarShowcase';

interface Props {
  cars: CarShowcase[];
}

const CarList: React.FC<Props> = ({ cars }) => {
  return (
    <div className={styles.carList}>
      {cars?.map((car) => (
        <Car key={car.title} car={car} />
      ))}
    </div>
  );
};

export default CarList;