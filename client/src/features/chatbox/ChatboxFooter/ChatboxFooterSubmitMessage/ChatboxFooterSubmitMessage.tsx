import React from 'react';

import styles from './ChatboxFooterSubmitMessage.module.css';
import { useMessage } from 'src/hooks/useMessage';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

interface Props {
    message: string;
    clearMessage: () => void; 
}

const ChatboxFooterSubmitMessage: React.FC<Props> = ({ message, clearMessage }) => {
  const chat = useSelector((state: RootState) => state.chat.activeChat);
  const { emitMessage } = useMessage();
   
  const sendMessage = () => {
    if (!message.trim()) return; 

    const finalMessage = {
      type: 'text',
      value: message,
      chatId: chat?.id,
      receiverId: chat?.userToDisplayInfo.id,
    };
    
    emitMessage(finalMessage);
    clearMessage(); 
  };
  
  return (
    <>
      <div onClick={sendMessage} className={styles.submitButton}>
        <i className="fa fa-paper-plane"></i>
      </div>
    </>
  );
};

export default ChatboxFooterSubmitMessage;