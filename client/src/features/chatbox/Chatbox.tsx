import React, { useEffect, useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setChat } from 'src/store/chat/chatSlice';
import ChatboxHeader from './ChatboxHeader/ChatboxHeader';
import Message from './Message/Message';
import ChatboxFooter from './ChatboxFooter/ChatboxFooter';
import styles from './Chatbox.module.css';
import { useGet } from 'src/hooks/useGet';
import { getChatById } from 'src/api/services/chat/ChatService';
import { SignalRContext } from "src/context/chat/SignalRContext";
import { Message as MessageType } from 'src/types/chat/Message';
import { Chat } from 'src/types/chat/Chat';

const Chatbox = () => {
    const dispatch = useDispatch(); 
    const { id } = useParams();
    const { connection } = useContext(SignalRContext);

    const { data: chatData } = useGet<Chat>({
        serviceFunc: () => getChatById(Number(id)),
        successFunc: (chat) => {
            dispatch(setChat(chat)); 
        },
        withError: true
    });

    const [messages, setMessages] = useState<MessageType[]>(chatData?.messages || []);

    useEffect(() => {
        if (chatData?.messages) {
            setMessages(chatData.messages); 
        }
    }, [chatData]);

    useEffect(() => {
        if (!connection) return;

        connection.on("ReceiveMessage", (message: MessageType) => {
            setMessages((prevMessages) => [...prevMessages, message]); 
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
                    messages.map((message) => (
                        <Message key={message?.id} message={message} /> 
                    ))
                }
            </div>
            
            <ChatboxFooter />
        </main>
    );
};

export default Chatbox;