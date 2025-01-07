import React, { useContext } from 'react';
import CarImages from './car-images/CarImages';
import CarDetail from './car-detail/CarDetail';
import styles from './CarData.module.css';
import { CarDetailsContext } from 'src/context/cars/CarDetailsContext';

const CarData: React.FC = () => {
  const { car } = useContext(CarDetailsContext);

  return (
    <div className={styles.carData}>
      <CarImages images={car?.images} />
      <h4 className={styles.carTitle}>{car?.title}</h4>
      <strong className={styles.carPrice}>$ {car?.price}</strong>
      <p className={styles.carDate}>{car?.date}</p>

      <div className={styles.carDetails}>
        <h4 className="cd-p">Car Details</h4>
        <div className={styles.carDetailsData}>
          <CarDetail icon={<i className="fa fa-car"></i>} detail="Brand" detailValue={car?.brand} />
          <CarDetail icon={<i className="fa fa-bars"></i>} detail="Model" detailValue={car?.carModel} />
          <CarDetail icon={<i className="fa fa-calendar"></i>} detail="Year" detailValue={car?.carYear} />
          <CarDetail icon={<i className="fa fa-cog"></i>} detail="Gearbox" detailValue={car?.gearbox} />
          <CarDetail icon={<i className="fa fa-gas-pump"></i>} detail="Car Fuel" detailValue={car?.fuelType} />
          <CarDetail icon={<i className="fa fa-car"></i>} detail="Bodywork" detailValue={car?.bodywork} />
          <CarDetail icon={<i className="fa fa-brush"></i>} detail="Car Color" detailValue={car?.color} />
          <CarDetail icon={<i className="fa fa-bars"></i>} detail="Car Doors" detailValue={car?.doors} />
          <CarDetail icon={<i className="fa fa-chair"></i>} detail="Car Seats" detailValue={car?.seats} />
          <CarDetail icon={<i className="fa fa-bolt"></i>} detail="Horsepower" detailValue={car?.horsepower} />
          <CarDetail icon={<i className="fa fa-tachometer"></i>} detail="Kilometers" detailValue={car?.kilometers} />
        </div>

        <h4 className="cd-p">Car Description</h4>
        <div className={styles.carDescription}>
          <p>{car?.description ?? 'No description provided'}</p>
        </div>
      </div>
    </div>
  );
};

export default CarData;