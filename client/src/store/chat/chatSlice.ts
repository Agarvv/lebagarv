import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from 'src/types/chat/Chat';
import { Message } from 'src/types/chat/Message';
import { Contacts } from 'src/types/chat/contacts/Contacts'

export interface ChatState {
    activeChat: Chat | null;
    contacts: Contacts | null; 
}

const initialState: ChatState = {
    activeChat: null, 
    contacts: null 
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChat: (state, action: PayloadAction<Chat>) => {
            return { ...state, activeChat: action.payload }; 
        },
        addMessageToChat: (state, action: PayloadAction<Message>) => {
            if (state.activeChat) {
                console.log("Adding message to chat state:", action.payload);
                console.log("old chat state:", state.activeChat.messages);
                state.activeChat.messages.push({
                   type: "text",
                   value: "debug",
                   senderId: 1,
                   receiverId: 1,
                });
                console.log("new chat state:", state.activeChat.messages);
            }
        },
        setContacts: (state, action: PayloadAction<Contacts>) => {
            return { ...state, contacts: action.payload }; 
        }
    },
});

export const { setChat, addMessageToChat, setContacts } = chatSlice.actions;
export default chatSlice.reducer;