import React from 'react';
import CarList from './car-list/CarList';
import styles from './CarLists.module.css';
import { useGet } from 'src/hooks/useGet';
import { getCars } from 'src/api/services/cars/CarService';
import { CarShowcase } from 'src/types/cars/CarShowcase';

const CarLists = () => {
  const { data: cars = [] } = useGet<CarShowcase[]>({
    serviceFunc: getCars,
    successFunc: () => console.log('Cars fetched successfully!'),
    withError: true
  });

  return (
    <div>
      {cars.length > 0 ? (
        cars.map((car) => (
          <div key={car.title} className={styles.carItem}>
            <span>{car.brand}</span>
          </div>
        ))
      ) : (
        <p>No cars available</p>
      )}
    </div>
  );
};

export default CarLists;