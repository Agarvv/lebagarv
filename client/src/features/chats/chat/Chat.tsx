import React from 'react';
import styles from './Chat.module.css';
import logo from 'src/logo.svg';
import { Chat as ChatType } from 'src/types/chat/Chat'

interface Props {
  chat: ChatType;
} 

const Chat: React.FC<Props> = ({ chat }) => {
  return (
    <>
  <a href={`/chatbox/${chat?.id}`}>
    <div  className={styles['chat']}>
      <div className={styles['ac-user']}>
        <img src={chat?.car.images[0] ?? logo} alt="Car" />
        <div className={styles['ac-content']}>
          <h4>{chat?.car.title}</h4>
          <p>
            {chat?.messages[chat?.messages.length - 1].value}
          </p>
        </div>
      </div>
      <div className={styles['ac-date']}>
        <p>15:13</p>
      </div>
    </div>
  </a>
    </>
  );
};

export default Chat;
