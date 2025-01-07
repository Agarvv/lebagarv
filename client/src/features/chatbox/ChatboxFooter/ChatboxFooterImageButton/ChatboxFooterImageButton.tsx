import React from 'react'
import styles from './ChatboxFooterImageButton.module.css'
import sharedMediaButtonStyles from '../ChatboxFooter.module.css'
import useImageUpload from 'src/hooks/useImageUpload';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useMessage } from 'src/hooks/useMessage';

const ChatboxFooterImageButton = () => {
    const { emitMessage } = useMessage() 
    const chat = useSelector((state: RootState) => state.chat.activeChat);
    const { imageUrl, uploadImage } = useImageUpload();
    const fileInputRef = React.useRef<HTMLInputElement>(null); 

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                await uploadImage(file, 'image');
                console.log('Image uploaded successfully!', imageUrl);
                const message = {
                  'type': 'image',
                  'value': imageUrl,
                  'identifier': chat?.id,
                  'receiver_id': chat?.userToDisplayInfo.id 
                }
                emitMessage(message)
            } catch (error) {
                console.error('Error uploading image:', error);
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
                onChange={handleImageChange}
            />
            <div onClick={triggerInput} className={`${sharedMediaButtonStyles.fMediaButton} ${styles.fmbImage}`}>
                <i className="fa fa-image"></i>
            </div>
        </>
    )
}

export default ChatboxFooterImageButton;