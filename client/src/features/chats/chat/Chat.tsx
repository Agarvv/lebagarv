import React from 'react';
import styles from './Chat.module.css';
import logo from 'src/logo.svg';


/*interface Props {
  contact: Chat;
}*/ 

const Chat: React.FC = () => {
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
