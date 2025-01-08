import React, { useEffect, useContext } from 'react';
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
import { SignalRContext } from "src/context/chat/SignalRContext";
import { addMessageToChat } from 'src/store/chat/chatSlice';
import { Message as MessageType } from 'src/types/chat/Message';

const Chatbox = () => {
    const dispatch = useDispatch(); 
    const { id } = useParams();
    const { connection } = useContext(SignalRContext);

    const setChatInRedux = (chat: Chat) => {
        console.log("Success func trigger");
        dispatch(setChat(chat)); 
    };

    const { data: chat } = useGet<Chat>({
        serviceFunc: () => getChatById(Number(id)),
        successFunc: (chat) => setChatInRedux(chat),
        withError: true
    });

    useEffect(() => {
        if (!connection) return;

        connection.on("ReceiveMessage", (message: MessageType) => {
            console.log("new message!:", message);
            //alert(`New message of ${message.senderId}: ${message.value}`);
            dispatch(addMessageToChat(message));
        });

        return () => {
            connection.off("ReceiveMessage");
        };
    }, [connection]);

    return (
        <main className={styles.chatbox}>
            <ChatboxHeader />
            
            <div className={styles.messageList}>
              {
                  chat?.messages.map((message) =>(
                    <Message message={message}/> 
                  ))
              }
            </div>
            
            <ChatboxFooter />
        </main>
    );
};

export default Chatbox;