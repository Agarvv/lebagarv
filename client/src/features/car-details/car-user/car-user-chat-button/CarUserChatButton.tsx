import React from 'react'

import styles from './CarUserChatButton.module.css'
import { usePost } from 'src/hooks/usePost'
import { createChat } from 'src/api/services/chat/ChatService'

interface Props {
    userId?: number,
    carId: number 
}

interface CreateChatRequest {
    receiverId?: number,
    carId: number 
}

const CarUserChatButton: React.FC<Props> = ({ userId, carId }) => {
    const { mutate } = usePost<CreateChatRequest>({
        serviceFunc: createChat,
        withError: true,
        withLoading: true,
    });

    const handleCreateChatClick = () => {
        mutate(
            { receiverId: userId, carId: carId },
            {
                onSuccess: (response) => {
                    console.log("server res:", response);
                },
            }
        );
    };

    return (
        <>
            <div onClick={handleCreateChatClick} className={styles.pChat}>
                <button>Chat</button>
            </div>
        </>
    );
};

export default CarUserChatButton; 