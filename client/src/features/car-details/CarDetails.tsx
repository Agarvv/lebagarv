import React from 'react'

import CarData from './car-data/CarData'; 
import CarUser from './car-user/CarUser'; 
import styles from './CarDetails.module.css'

const CarDetails = () => {
    return(
      <main>
          <div className={styles.car}>
            <div className={styles.carDetails}>
              <CarData /> 
              <CarUser /> 
            </div> 
          </div> 
      </main>
   )
}

export default CarDetails; 