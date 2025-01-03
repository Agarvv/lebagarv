import React from 'react';
import { useParams } from 'react-router-dom';
import CarData from './car-data/CarData';
import CarUser from './car-user/CarUser';
import styles from './CarDetails.module.css';
import { useGet } from 'src/hooks/useGet';
import { CarDetails as CarDetailsType } from 'src/types/cars/CarDetails';
import { getCarById } from 'src/api/services/cars/CarService';

const CarDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data: car } = useGet<CarDetailsType>({
    serviceFunc: () => getCarById(Number(id)),
    successFunc: () => console.log('car fetched successfully!'),
    withError: true,
  });

  return (
    <main>
      <div className={styles.car}>
        <div className={styles.carDetails}>
          {car && <CarData car={car} />}
          <CarUser />
        </div>
      </div>
    </main>
  );
};

export default CarDetails;