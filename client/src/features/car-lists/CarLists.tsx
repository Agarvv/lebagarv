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

  const carsByBrand = cars.reduce((groups, car) => {
    const brand = car.brand; 
    groups[brand] = groups[brand] || [];
    groups[brand].push(car);
    return groups;
  }, {} as Record<string, CarShowcase[]>);

  return (
    <div>
      {Object.entries(carsByBrand).map(([brand, cars]) => (
        <div key={brand} className={styles.brandSection}>
          <h2>{brand}</h2>
          {cars.map((car) => (
            <div key={car.title} className={styles.carItem}>
              <span>{car.title}</span>
              <CarList />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CarLists;