import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from 'src/types/chat/Chat';
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
        setContacts: (state, action: PayloadAction<Contacts>) => {
            return { ...state, contacts: action.payload }; 
        }
    },
});


export const { setChat, setContacts } = chatSlice.actions;
export default chatSlice.reducer;