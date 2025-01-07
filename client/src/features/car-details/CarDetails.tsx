import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CarData from './car-data/CarData';
import CarUser from './car-user/CarUser';
import styles from './CarDetails.module.css';
import { useGet } from 'src/hooks/useGet';
import { CarDetails as CarDetailsType } from 'src/types/cars/CarDetails';
import { getCarById } from 'src/api/services/cars/CarService';
import { CarDetailsProvider } from 'src/context/cars/CarDetailsContextProvider';
import { CarDetailsContext } from 'src/context/cars/CarDetailsContext';

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();
  const context = useContext(CarDetailsContext);

  if (!context) {
    throw new Error("car detaik context not ok debug");
  }

  const { setCar } = context; 
  
  const { data: car } = useGet<CarDetailsType>({
    serviceFunc: () => getCarById(Number(id)),
    successFunc: () => console.log('car fetched successfully!'),
    withError: true,
  });

  setCar(car);

  return (
    <main>
      <div className={styles.car}>
        <div className={styles.carDetails}>
          <CarDetailsProvider>
            {car && <CarData />}
            {car && <CarUser />}
          </CarDetailsProvider>
        </div>
      </div>
    </main>
  );
};