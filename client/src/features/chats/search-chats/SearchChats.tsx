import React, { useState } from 'react'
import styles from './SearchChats.module.css' 
import logo from 'src/logo.svg';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

const SearchChats = () => {
    const contacts = useSelector((state: RootState) => state.chat.contacts);
    const [filteredContacts, setFilteredContacts] = useState(contacts);

    const applyFilters = (title: string) => {
        const newContacts = contacts.filter(c => c.car.title.toLowerCase().includes(title.toLowerCase()));
        setFilteredContacts(newContacts);
        console.log("filtered contacts", filteredContacts)
    }

    return (
        <>
        <div className={styles['user-img']}>
            <img src={logo} alt="Screenshot_20240928-011835.png"/>
        </div>
        <div className={styles['chats-search']}>
            <input 
                onChange={(e) => applyFilters(e.target.value)} 
                type="text" 
                placeholder="Search Contacts"
            />
            <div className={styles.searchIcon}>
                <i className="fa fa-search"></i>
            </div>
        </div>
        </>
    );
}

export default SearchChats;
