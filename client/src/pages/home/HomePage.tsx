import React from 'react'

import Header from 'src/layout/header/Header'
import CarLists from 'src/features/car-lists/CarLists'
import styles from './HomePage.module.css'
import AppLayout  from 'src/layout/AppLayout/AppLayout'


const HomePage = () => {
    return(
        <>
        <AppLayout footer={true}>
            <CarLists /> 
        </AppLayout> 
        </>
    )
}

export default HomePage