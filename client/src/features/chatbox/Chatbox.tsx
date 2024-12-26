import React from 'react';

import ChatboxHeader from './ChatboxHeader/ChatboxHeader';
import Message from './Message/Message';
import ChatboxFooter from './ChatboxFooter/ChatboxFooter';
import styles from './Chatbox.module.css'
import { useSelector } from 'react-redux';
import  { RootState } from 'src/store/index'

const Chatbox = () => {
   // const chat = useSelector((state: RootState) => state.chat.activeChat)
   // console.log('chat from store', chat)

  return (
    <main className={styles.chatbox}>
     <ChatboxHeader />
      
      <div className={styles.messageList}>
           <Message />
           <Message />
           <Message />
      </div>
      
      <ChatboxFooter />
    </main>
  );
};

export default Chatbox;