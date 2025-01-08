import React, { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'src/store/index';
import { setChat, addMessageToChat } from 'src/store/chat/chatSlice';
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
    const chat = useSelector((state: RootState) => state.chat.activeChat);

    


    const setChatInRedux = (chat: Chat) => {
        dispatch(setChat(chat)); 
    };

    const { data: chatData } = useGet<Chat>({
        serviceFunc: () => getChatById(Number(id)),
        successFunc: (chat) => setChatInRedux(chat),
        withError: true
    });

    useEffect(() => {
        console.log("chatData:", chat);
        if (!connection) return;

        connection.on("ReceiveMessage", (message: MessageType) => {
            if (chat) {
                console.log("chat before new message:", chat);
                console.log("new message received:", message);
        
                dispatch(
                    setChat({
                        ...chat,
                        messages: [...chat.messages, message], 
                    })
                );
        
                console.log("chat after new message:", {
                    ...chat,
                    messages: [...chat.messages, message],
                });
            }
        });
        

        return () => {
            connection.off("ReceiveMessage");
        };
    }, [connection, dispatch, chat]);

    return (
        <main className={styles.chatbox}>
            <ChatboxHeader />
    
            <div className={styles.messageList}>
                {
                    chat?.messages.map((message) => (
                        <Message key={message?.id} message={message} /> 
                    ))
                }
            </div>
            
            <ChatboxFooter />
        </main>
    );
};

export default Chatbox;