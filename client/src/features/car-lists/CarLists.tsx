import React from 'react'
import CarList from './car-list/CarList'
import styles from './CarLists.module.css'


const CarLists = () => {
    const carList = [
      'BMW',
      'Porsche',
      'Mercedes'
    ]
    return(
      <>
        {carList.map(carList => (
          <span>{ carList }</span> 
          <CarList
          brand={carList}
          /> 
        ))}
      </> 
    )
}

export default CarLists; 