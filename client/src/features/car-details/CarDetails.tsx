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
  const { setCar } = useContext(CarDetailsContext);

  const { data: car } = useGet<CarDetailsType>({
    serviceFunc: () => getCarById(Number(id)),
    successFunc: () => console.log('Car fetched successfully!'),
    withError: true,
  });

  useEffect(() => {
    if (car) {
      setCar(car);
    }
  }, [car, setCar]); 

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

export default CarDetails; 