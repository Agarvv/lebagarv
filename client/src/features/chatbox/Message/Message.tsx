import React from 'react';
import styles from './Message.module.css';
import logo from 'src/logo.svg';
import { Message as MessageType } from 'src/types/chat/Message';

interface Props {
  message: MessageType;
}

const Message: React.FC<Props> = ({ message }) => {
    
  const checkMessageTypeAndRenderMessage = () => {
    switch (message?.type) {
      case 'text':
        return (
          <div className={styles.messageText}>
            <p>{message?.value}</p>
          </div>
        );
      case 'image':
        return (
          <div className={styles.messageImage}>
            <img src={message?.value ?? logo} alt="Message" />
          </div>
        );
      case 'video':
        return (
          <div className={styles.messageVideo}>
            <video controls src={message?.value}>
              <track kind="captions" />
            </video>
          </div>
        );
      case 'audio':
        return (
          <div className={styles.messageAudio}>
            <audio controls src={message?.value} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.message}>
      <div className={styles.messageContent}>
        <div className={styles.messageDate}>
          <p>17 November 14:31</p>
        </div>
        {checkMessageTypeAndRenderMessage()}
      </div>
    </div>
  );
};

export default Message;