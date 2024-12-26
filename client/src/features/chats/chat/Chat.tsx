import React from 'react';
import styles from './AsideContact.module.css';
import { Chat } from 'src/types/chat/Chat';
import logo from 'src/logo.svg';
import { useChat } from 'src/hooks/useChat';

/*interface Props {
  contact: Chat;
}*/ 

const Chat: React.FC<Props> = () => {
 // const { setChatInState } = useChat();

  return (
    <div  className={styles['chat']}>
      <div className={styles['ac-user']}>
        <img src={logo} alt="User" />
        <div className={styles['ac-content']}>
          <h4>Pepe</h4>
          <p>Last message</p>
        </div>
      </div>
      <div className={styles['ac-date']}>
        <p>15:13</p>
      </div>
    </div>
  );
};

export default Chat;
