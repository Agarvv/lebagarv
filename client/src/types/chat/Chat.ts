import { ChatUser } from './ChatUser';
import  { Message } from './Message'

export type Chat = {
    id: number,
    sender_id: number,
    receiver_id: number,
    user_to_display_info: ChatUser,
    messages: Message[] 
} 