import React from 'react'

import Header from 'src/layout/header/Header'
import ContactsAside from 'src/layout/contacts-aside/ContactsAside'
import Chatbox from 'src/features/chatbox/Chatbox'
import styles from './HomePage.module.css'
import AppLayout  from 'src/layout/AppLayout/AppLayout'

const HomePage = () => {
    return(
        <>
        <AppLayout>
            <Chatbox /> 
        </AppLayout> 
        </>
    )
}

export default HomePage