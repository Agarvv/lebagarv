
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ConversationState {
    imageMessage: string,
    audioMessage: string,
    videoMessage: string
}

const initialState: ConversationState = {
    imageMessage: '',
    audioMessage: '',
    videoMessage: ''
};

const conversationSlice = createSlice({
    name: 'conversation',
    initialState,
    reducers: {
        setImageMessage: (state, action: PayloadAction<string>) => {
            return { ...state, imageMessage: action.payload }; 
        },
        setAudioMessage: (state, action: PayloadAction<string>) => {
            return { ...state, audioMessage: action.payload }; 
        },
        setVideoMessage: (state, action: PayloadAction<string>) => {
            return { ...state, videoMessage: action.payload }; 
        }
    },
});


export const { setAudioMessage, setImageMessage, setVideoMessage } = conversationSlice.actions;
export default conversationSlice.reducer;