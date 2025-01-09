import axiosInstance from 'src/config/axiosConfig';
import { Chat } from 'src/types/chat/Chat'


export const createChat = async (data: any) => {
  const response = await axiosInstance.post('/chats/new', data, { withCredentials: true });

  return response.data 
};

export const getUserContacts = async (): Promise<Chat[]> => {
  const response = await axiosInstance.get('/chats/', { withCredentials: true });
  return response.data;
};

export const getChatById = async (id: number) => {
  const response = await axiosInstance.get(`/chats/${id}`, { withCredentials: true });
  return response.data;
};