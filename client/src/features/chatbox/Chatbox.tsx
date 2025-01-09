import React, { useEffect, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from 'src/store/index';
import { setChat } from 'src/store/chat/chatSlice';
import ChatboxHeader from './ChatboxHeader/ChatboxHeader';
import Message from './Message/Message';
import ChatboxFooter from './ChatboxFooter/ChatboxFooter';
import styles from './Chatbox.module.css';
import { useGet } from 'src/hooks/useGet';
import { getChatById } from 'src/api/services/chat/ChatService';
import { SignalRContext } from 'src/context/chat/SignalRContext';
import { Message as MessageType } from 'src/types/chat/Message';
import { Chat } from 'src/types/chat/Chat';

const Chatbox = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { connection } = useContext(SignalRContext);
    const chat = useSelector((state: RootState) => state.chat.activeChat);

    // Local state for messages
    const [messages, setMessages] = useState<MessageType[]>([]);

    // Fetch chat data
    const { data: chatData } = useGet<Chat>({
        serviceFunc: () => getChatById(Number(id)),
        successFunc: (chat) => {
            dispatch(setChat(chat)); 
            setMessages(chat.messages); // Initialize messages locally
        },
        withError: true,
    });

    useEffect(() => {
        if (chatData?.messages) {
            console.log('Syncing messages from chatData:', chatData.messages);
            setMessages(chatData.messages);
        }
    }, [chatData]);

    useEffect(() => {
        if (!connection) {
            console.warn('No SignalR connection available');
            return;
        }

        connection.on('ReceiveMessage', (message: MessageType) => {
            console.log('New message received:', message);

            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages, message];
                console.log('Updated messages:', updatedMessages);
                return updatedMessages;
            });
        });

        return () => {
            connection.off('ReceiveMessage');
        };
    }, [connection]);

    return (
        <main className={styles.chatbox}>
            <ChatboxHeader />

            <div className={styles.messageList}>
                {messages.map((message) => (
                    <Message key={message?.id} message={message} />
                ))}
            </div>

            <ChatboxFooter />
        </main>
    );
};

export default Chatbox;