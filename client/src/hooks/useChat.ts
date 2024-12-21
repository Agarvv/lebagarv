import { setChat } from 'src/store/chat/chatSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/index';
import { Chat } from 'src/types/chat/Chat';

export const useChat = () => {
  const dispatch: AppDispatch = useDispatch();

  const setChatInState = (chat: Chat) => {
    console.log('setting chat...', chat) // debug
    dispatch(setChat(chat));
  };

  return { setChatInState };
};
