import React from 'react';
import styles from './Message.module.css';
import logo from 'src/logo.svg';
import { Message as MessageType } from 'src/types/chat/Message'

interface Props {
    message: Message 
}

const Message: React.FC<Props> = ({ message }) => {
  return (
    <div className={styles.message}>
      <div className={styles.messageUser}>
        <img src={logo} alt="User" />
      </div>
      <div className={styles.messageContent}>
        <div className={styles.messageDate}>
          <p>17 November 14:31</p>
        </div>
        <div className={styles.messageText}>
          <p>{message?.value}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
