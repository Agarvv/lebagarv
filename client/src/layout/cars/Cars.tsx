import React from 'react'
import styles from './Cars.module.css'
import Car from 'src/layout/car/Car'
import { CarShowcase } from 'src/types/cars/CarShowcase'

interface Props {
    cars: CarShowcase[]
}
// cars list (for search page and profile cars page)
const Cars: React.FC<Props> = ({ cars }: Props) => {
  return (
    <>
      <div className={styles.cars}>
          {
            cars?.map((car) => (
                <Car key={car.id} car={car} />
            ))
          }
      </div> 
    </>
  )
}

export default Cars