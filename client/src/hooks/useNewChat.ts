import { useMutation } from '@tanstack/react-query';
import { createChat } from 'src/api/services/chat/ChatService';
import { setChat } from 'src/store/chat/chatSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/index';


interface Props {
    userId: number; 
}

const useNewChat = ({ userId }: Props) => {
    const dispatch: AppDispatch = useDispatch();
    
    return useMutation({
        mutationFn: ({ userId}: Props) => createChat(userId),
        onSuccess: (chat) => {
            console.log('Chat creation success', chat);
            dispatch(setChat(chat))
        },
        onError: (error: any) => {
            console.error('Chat creation failed:', error);
        }
    });
};

export default useNewChat;