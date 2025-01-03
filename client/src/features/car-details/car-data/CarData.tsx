import React from 'react';

import CarImages from './car-images/CarImages';
import CarDetail from './car-detail/CarDetail';
import styles from './CarData.module.css';
import { CarDetails } from 'src/types/cars/CarDetails';

interface Props {
    car: CarDetails 
}

const CarData: React.FC<Props> = ({ car }: Props) => {
    return (
       <div className={styles.carData}>
          <CarImages /> 
                    <h4 className={styles.carTitle}>{ car?.title }</h4>
          <strong className={styles.carPrice}>$ {car?.price}</strong>
          <p className={styles.carDate}>{car?.date}</p> 
         
          <div className={styles.carDetails}>
              <h4 className="cd-p">Car Details</h4>
              <div className={styles.carDetailsData}>
                  <CarDetail 
                      icon={<i className="fa fa-car"></i>}
                      detail="Brand"
                      detailValue={car?.brand}
                  /> 
                  
                  <CarDetail 
                      icon={<i className="fa fa-bars"></i>}
                      detail="Model"
                      detailValue="car model"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-calendar"></i>}
                      detail="Year"
                      detailValue={car?.carYear}
                  />

                  <CarDetail 
                      icon={<i className="fa fa-cog"></i>}
                      detail="Gearbox"
                      detailValue={car?.gearbox}
                  />

                  <CarDetail 
                      icon={<i className="fa fa-gas-pump"></i>}
                      detail="Car Fuel"
                      detailValue={car?.fuelType}
                  />

                  <CarDetail 
                      icon={<i className="fa fa-car"></i>}
                      detail="Bodywork"
                      detailValue="bodywork"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-brush"></i>}
                      detail="Car Color"
                      detailValue={car?.color}
                  />

                  <CarDetail 
                      icon={<i className="fa fa-bars"></i>}
                      detail="Car Doors"
                      detailValue="5 doors"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-chair"></i>}
                      detail="Car Seats"
                      detailValue="5 Seats"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-bolt"></i>}
                      detail="Horsepower"
                      detailValue="0 HP"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-tachometer"></i>}
                      detail="Kilometers"
                      detailValue="000.000"
                  />
              </div>

              <h4 className="cd-p">Car Description</h4>
              <div className={styles.carDescription}>
                  <p>Du bist wie ein kostbarer Edelstein, der in der Dunkelheit funkelt, doch manchmal verstehst du die Tiefe deiner eigenen Strahlkraft nicht. Dein Herz ist wie ein unbeschriebenes Buch, voller unentdeckter Geschichten, die nur darauf warten, erzählt zu werden. Weißt du, dass du eine unendliche Quelle von Möglichkeiten bist, die nur darauf wartet, freigesetzt zu werden.</p>
              </div>
          </div>
      </div>
    );
}

export default CarData;