import {  MessageUser } from './MessageUser'

export type Message = {
    type: string, // audio, image, text, video.
    value: string, // audio image video url or text content 
    user: MessageUser 
}