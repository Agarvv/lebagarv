import React from 'react'

import Header from 'src/layout/header/Header'
import ContactsAside from 'src/layout/contacts-aside/ContactsAside'
import CarLists from 'src/features/car-lists/CarLists'
import styles from './HomePage.module.css'
import AppLayout  from 'src/layout/AppLayout/AppLayout'


const HomePage = () => {
    return(
        <>
        <AppLayout>
            <CarLists /> 
        </AppLayout> 
        </>
    )
}

export default HomePage