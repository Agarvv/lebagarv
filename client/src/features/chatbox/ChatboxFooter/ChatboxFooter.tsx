import React, { useState } from 'react';
import styles from './ChatboxFooter.module.css';

import ChatboxFooterImageButton from './ChatboxFooterImageButton/ChatboxFooterImageButton';
import ChatboxFooterAudioButton from './ChatboxFooterAudioButton/ChatboxFooterAudioButton';
import ChatboxFooterVideoButton from './ChatboxFooterVideoButton/ChatboxFooterVideoButton';
import ChatboxFooterSubmitMessage from './ChatboxFooterSubmitMessage/ChatboxFooterSubmitMessage';

const ChatboxFooter = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event: any) => {
    setMessage(event.target.value);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.fMediaButtons}>
        <ChatboxFooterAudioButton />
        <ChatboxFooterVideoButton />
        <ChatboxFooterImageButton />
      </div>
      <div className={styles.fInp}>
        <input 
          type="text"
          placeholder="Send A Message"
          value={message}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.fSubmit}>
        <ChatboxFooterSubmitMessage
        message={message} 
        />
      </div>
    </footer>
  );
};

export default ChatboxFooter;