import { UserToDisplayInfo } from './UserToDisplayInfo';
import  { Message } from './Message'


export type Chat = {
    id: number,
    senderId: number,
    receiverId: number,
    userToDisplayInfo: UserToDisplayInfo,
    messages: Message[] 
} 