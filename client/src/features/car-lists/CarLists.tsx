import React from 'react';
import CarList from './car-list/CarList';
import styles from './CarLists.module.css';

const CarLists = () => {
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
            brand={car}
          /> 
        </div>
      ))}
    </>
  );
};

export default CarLists;