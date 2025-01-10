import React, { useEffect } from 'react'

import Chat from './chat/Chat'
import { Chat as ChatType } from 'src/types/chat/Chat'
import SearchChats from './search-chats/SearchChats'
import styles from './Chats.module.css'
import { useGet } from 'src/hooks/useGet'
import { getUserContacts } from 'src/api/services/chat/ChatService'
import { useDispatch } from 'react-redux';
import { setContacts } from 'src/store/chat/chatSlice'
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import AppLayout  from 'src/layout/AppLayout/AppLayout'

const Chats = () => {
    const dispatch = useDispatch(); 
    const contacts = useSelector((state: RootState) => state.chat.contacts);
    
    const setContactsInRedux = (chats: ChatType[])=> {
        dispatch(setContacts(chats)); 
    }
    
    const { data: chats } = useGet<ChatType[]>({
        serviceFunc: getUserContacts,
        successFunc: (chats) => setContactsInRedux(chats),
        withError: true 
     })
       
    return (
     <>
     <AppLayout footer={true}>
      <div className={styles.chatsContainer}> 
        <main className={styles.chats}>
            <div className={styles.asideContent}>
                    <div className={styles['aside-chats']}>
                    {
                        contacts?.map((chat) => (
                          <Chat chat={chat}/>
                        ))
                    }
               </div>
            </div>
        </main>
      </div> 
     </AppLayout> 
     </>
    );
}

export default Chats;
