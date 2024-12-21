import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './chat/chatSlice';
import apiStatusReducer from './apiStatus/apiStatusSlice';

const store = configureStore({
  reducer: {
    chat: chatReducer, 
    apiStatus: apiStatusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
