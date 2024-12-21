import React from 'react'

import styles from './ChatboxFooterVideoButton.module.css'
import sharedMediaButtonStyles from '../ChatboxFooter.module.css'

import useImageUpload from 'src/hooks/useImageUpload';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useMessage } from 'src/hooks/useMessage';

const ChatboxFooterVideoButton = () => {
    const { emitMessage } = useMessage() 
    const chat = useSelector((state: RootState) => state.chat.activeChat);
    const { imageUrl, uploadImage } = useImageUpload();
    const fileInputRef = React.useRef<HTMLInputElement>(null); 

    const handleVideoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const url = await uploadImage(file, 'video');
                console.log('Video uploaded successfully!', url);
                const message = {
                  'type': 'video',
                  'value': url,
                  'identifier': chat?.id,
                  'receiver_id': chat?.user_to_display_info.id 
                }
                emitMessage(message)
            } catch (error) {
                console.error('Error uploading video:', error);
            }
        }
    };

    const triggerInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); 
        }
    };

    return (
        <>
            <input
                type="file"
                ref={fileInputRef} 
                style={{ display: 'none' }}
                onChange={handleVideoChange} 
            />
            <div onClick={triggerInput} className={`${sharedMediaButtonStyles.fMediaButton} ${styles.fmbVideo}`}>
                <i className="fa fa-video"></i>
            </div>
        </>
    )
}

export default ChatboxFooterVideoButton;