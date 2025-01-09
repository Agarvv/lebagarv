import React, { useEffect } from 'react'

import Chat from './chat/Chat'
import { Chat as ChatType } from 'src/types/chat/Chat'
import SearchChats from './search-chats/SearchChats'
import styles from './Chats.module.css'
import { useGet } from 'src/hooks/useGet'
import { getUserContacts } from 'src/api/services/chat/ChatService'


const Chats = () => {
    // const { data } = useContacts();
    useEffect(() => {
        const { data: chats } = useGet<ChatType[]>({
        serviceFunc: getUserContacts,
        successFunc: () => console.log("Chats success"),
        withError: true 
       })
    }, [])
    
    return (
      <div className={styles.chatsContainer}> 
        <main className={styles.chats}>
            <div className={styles['chat-h']}>
                <SearchChats />
            </div>
            <div className={styles.asideContent}>
                    <div className={styles['aside-chats']}>
                    {
                        chats?.map((chat) => (
                          <Chat chat={chat}/>
                        ))
                    }
               </div>
            </div>
        </main>
      </div> 
    );
}

export default Chats;
