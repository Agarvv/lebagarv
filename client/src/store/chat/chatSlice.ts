import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from 'src/types/chat/Chat';
import { Message } from 'src/types/chat/Message';
import { Contacts } from 'src/types/chat/contacts/Contacts'


export interface ChatState {
    activeChat: Chat | null;
    contacts: Chat[] | null; 
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
                state.activeChat.messages = [...state.activeChat.messages, action.payload];
            }
        },         
        setContacts: (state, action: PayloadAction<Chat[]>) => {
            return { ...state, contacts: action.payload }; 
        }
    },
});

export const { setChat, addMessageToChat, setContacts } = chatSlice.actions;
export default chatSlice.reducer;