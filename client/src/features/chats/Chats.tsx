import React from 'react'

import Chat from './chat/Chat'
import SearchChats from './search-chats/SearchChats'

const Chats = () => {
   // const { data } = useContacts();
    //console.log('contacts aside', data);
    
    return (
        <aside className={styles.chats}>
            <div className={styles['chat-h']}>
                <SearchChats />
            </div>
            <div className={styles.asideContent}>
                    <div className={styles['aside-chats']}>
                        <span>Your Chats</span>
                            <Chat />
                            <Chat /> 
                            <Chat /> 
                    </div>
            </div>
        </aside>
    );
}

export default Chats;
