

export type Message = {
    id: number,
    type: string, // audio, image, text, video.
    value: string, // audio image video url or text content 
    senderId: number,
    receiverId: number 
}