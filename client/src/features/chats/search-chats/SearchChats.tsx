import React, { useState } from 'react';
import styles from './SearchChats.module.css'; 
import logo from 'src/logo.svg';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { Chat } from 'src/types/chat/Chat'
import { setContacts } from 'src/store/chat/chatSlice'

const SearchChats = () => {
    const contacts = useSelector((state: RootState) => state.chat.contacts);
    const [filteredContacts, setFilteredContacts] = useState<Chat[] | null>(null); 
    
    const applyFilters = (title: string) => {
        if (contacts) { 
            const newContacts = contacts.filter(c => c?.car.title.toLowerCase().includes(title.toLowerCase()));
            setFilteredContacts(newContacts); 
            console.log("new contags", filteredContacts)
            dispatch(setContacts(filteredContacts))
        } else {
            console.warn("Debug SearchChats.tsx line 16, no contacts.")
        }
        console.log("filtered contacts", filteredContacts)
    }

    return (
        <>
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