import React from 'react';

import CarImages from './car-images/CarImages';
import CarDetail from './car-detail/CarDetail';
import styles from './CarData.module.css';

const CarData = () => {
    return (
       <div className={styles.carData}>
          <CarImages /> 
         
          <div className={styles.carDetails}>
              <h4 className="cd-p">Car Details</h4>
              <div className="car-details-data">
                  <CarDetail 
                      icon={<i className="fa fa-car"></i>}
                      detail="Brand"
                      detailValue="BMW"
                  /> 
                  
                  <CarDetail 
                      icon={<i className="fa fa-bars"></i>}
                      detail="Model"
                      detailValue="S20"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-calendar"></i>}
                      detail="Year"
                      detailValue="2019"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-cog"></i>}
                      detail="Gearbox"
                      detailValue="Auto"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-gas-pump"></i>}
                      detail="Car Fuel"
                      detailValue="Diesel"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-car"></i>}
                      detail="Bodywork"
                      detailValue="Sedan"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-brush"></i>}
                      detail="Car Color"
                      detailValue="Red"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-bars"></i>}
                      detail="Car Doors"
                      detailValue="5 Doors"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-chair"></i>}
                      detail="Car Seats"
                      detailValue="5 Seats"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-bolt"></i>}
                      detail="Horsepower"
                      detailValue="190 HP"
                  />

                  <CarDetail 
                      icon={<i className="fa fa-tachometer"></i>}
                      detail="Kilometers"
                      detailValue="193,492"
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