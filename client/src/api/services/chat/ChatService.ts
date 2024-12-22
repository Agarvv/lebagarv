import axiosInstance from 'src/config/axiosConfig';

export const createChat = async (userId: number) => {
  const response = await axiosInstance.post('/chats/', {
    receiver_id: userId
  }, { withCredentials: true });

  return response.data.chat
};

export const getUserContacts = async () => {
  const response = await axiosInstance.get('/chats/', { withCredentials: true });
  return response.data.contacts
};