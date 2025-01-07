import { UserToDisplayInfo } from './UserToDisplayInfo';
import  { Message } from './Message'
import { CarShowcase } from 'src/types/cars/CarShowcase';

export type Chat = {
    id: number,
    senderId: number,
    receiverId: number,
    userToDisplayInfo: UserToDisplayInfo,
    car: CarShowcase,
    messages: Message[] 
} 