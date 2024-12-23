import React from 'react'
import styles from './CarList.module.css'
import Car from 'src/layout/car/Car'

interface Props {
    brand: string 
}

const CarList = () => {
    return(
      <>
        <div className={styles.carList}>
           <Car /> 
           <Car /> 
           <Car /> 
           <Car /> 
           <Car /> 
           <Car /> 
           <Car /> 
           <Car /> 
           <Car /> 
        </div> 
      </> 
    )
}

export default CarList; 
