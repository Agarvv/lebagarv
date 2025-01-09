import React, { useEffect } from 'react'

import Chat from './chat/Chat'
import { Chat as ChatType } from 'src/types/chat/Chat'
import SearchChats from './search-chats/SearchChats'
import styles from './Chats.module.css'
import { useGet } from 'src/hooks/useGet'
import { getUserContacts } from 'src/api/services/chat/ChatService'
import { useDispatch } from 'react-redux';
import { setContacts } from 'src/store/chat/chatSlice'

const Chats = () => {
    // const { data } = useContacts();
    const dispatch = useDispatch(); 
    const setContactsInRedux = (chats: ChatType[])=> {
        dispatch(setContacts(chats)); 
    }
    const { data: chats } = useGet<ChatType[]>({
        serviceFunc: getUserContacts,
        successFunc: (chats) => ,
        withError: true 
     })
       
    useEffect(() => {
        
    }, [chats])
    
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
