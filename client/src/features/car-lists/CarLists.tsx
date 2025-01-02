import React from 'react';
import CarList from './car-list/CarList';
import styles from './CarLists.module.css';
import { useGet } from 'src/hooks/useGet';
import { getCars } from 'src/api/services/cars/CarService';
import { CarShowcase } from 'src/types/cars/CarShowcase';

const CarLists = () => {
  const { data } = useGet<CarShowcase[]>({
    serviceFunc: getCars,
    successFunc: () => console.log('Contacts fetched successfully!', data),
    withError: true
  })

  const carList = [
    'BMW',
    'Porsche',
    'Mercedes'
  ];

  return (
    <>
      {carList.map(car => (
        <div key={car} className={styles.carItem}>
          <span>{car}</span> 
          <CarList
            
          /> 
        </div>
      ))}
    </>
  );
};

export default CarLists;