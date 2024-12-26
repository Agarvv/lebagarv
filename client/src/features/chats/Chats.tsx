import React from 'react'

import Chat from './chat/Chat'
import SearchChats from './search-chats/SearchChats'
import styles from './Chats.module.css'


const Chats = () => {
   // const { data } = useContacts();
    //console.log('contacts aside', data);
    
    return (
      <div className={styles.chatsContainer}> 
        <main className={styles.chats}>
            <div className={styles['chat-h']}>
                <SearchChats />
            </div>
            <div className={styles.asideContent}>
                    <div className={styles['aside-chats']}>
                            <Chat />
                            <Chat /> 
                            <Chat /> 
                    </div>
            </div>
        </main>
      </div> 
    );
}

export default Chats;
