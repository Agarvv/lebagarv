import axiosInstance from 'src/config/axiosConfig';
import { Chat } from 'src/types/chat/Chat'

export const createChat = async (userId: number) => {
  const response = await axiosInstance.post('/chats/', {
    receiver_id: userId
  }, { withCredentials: true });

  return response.data.chat
};

export const getUserContacts: Promise<Chat[]> = async () => {
  const response = await axiosInstance.get('/chats/', { withCredentials: true });
  return response.data; 
};
