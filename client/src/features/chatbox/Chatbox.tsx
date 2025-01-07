import React from 'react';
import { useDispatch } from 'react-redux';
import { setChat } from 'src/store/chat/chatSlice';
import ChatboxHeader from './ChatboxHeader/ChatboxHeader';
import Message from './Message/Message';
import ChatboxFooter from './ChatboxFooter/ChatboxFooter';
import styles from './Chatbox.module.css';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/index';
import { Chat } from 'src/types/chat/Chat';
import { useGet } from 'src/hooks/useGet';
import { getChatById } from 'src/api/services/chat/ChatService';
import { useParams } from 'react-router-dom';

const Chatbox = () => {
    const dispatch = useDispatch(); 
    const { id } = useParams();

    const { data: chat } = useGet<Chat>({
        serviceFunc: () => getChatById(Number(id)),
        successFunc: (chat) => setChatInRedux(chat), 
        withError: true 
    });

    const setChatInRedux = (chat: Chat) => {
        console.log("Success func trigger");
        dispatch(setChat(chat)); 
    }

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