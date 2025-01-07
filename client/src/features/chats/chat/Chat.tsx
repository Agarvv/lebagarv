import React from 'react';
import styles from './Chat.module.css';
import logo from 'src/logo.svg';


interface Props {
  chat: Chat;
} 

const Chat: React.FC<Props> = ({ chat }) => {
  return (
    <div  className={styles['chat']}>
      <div className={styles['ac-user']}>
        <img src={chat?.userToDisplayInfo.profilePicture ?? logo} alt="User" />
        <div className={styles['ac-content']}>
          <h4>{chat?.userToDisplayInfo.username}</h4>
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
