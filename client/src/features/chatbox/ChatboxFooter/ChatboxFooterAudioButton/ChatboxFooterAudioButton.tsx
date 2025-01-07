import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useMessage } from 'src/hooks/useMessage';

import styles from './ChatboxFooterAudioButton.module.css';
import sharedMediaButtonStyles from '../ChatboxFooter.module.css';
import useImageUpload from 'src/hooks/useImageUpload';

const ChatboxFooterAudioButton: React.FC = () => {
  const { emitMessage } = useMessage();
  const chat = useSelector((state: RootState) => state.chat.activeChat);
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const { imageUrl, uploadImage } = useImageUpload();

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null); 

  const startRecording = async () => {
    setIsRecording(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream; // Guardamos el stream
      const mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunksRef.current.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const file = new File([audioBlob], 'audio_recording.wav', { type: 'audio/wav' });
        setAudioFile(file);

        if (file) {
          try {
            const audio = await uploadImage(file, 'raw'); // raw because of cloudinary audios endpoint
            console.log('audio uploaded successfully!', audio);
            const message = {
              type: 'audio',
              value: audio,
              chatId: chat?.id,
              receiver_id: chat?.userToDisplayInfo.id,
            };
            console.log('Final message object', message);
            emitMessage(message);
          } catch (error) {
            console.error('Error uploading Aud:', error);
          }
        }

        audioChunksRef.current = [];
      };

      mediaRecorderRef.current = mediaRecorder;
      mediaRecorder.start();
    } catch (err) {
      console.error(err);
    }
  };

  const stopRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;
    const stream = streamRef.current;

    if (mediaRecorder) {
      console.log(`MediaRecorder state: ${mediaRecorder.state}`);
      if (mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        setIsRecording(false);
      } else {
        alert('could not stop audio');
      }
    } else {
      alert('no audio recorder.');
    }

    // Detener el stream de audio
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  return (
    <>
      <div className={`${sharedMediaButtonStyles.fMediaButton} ${styles.fmbAudio}`}>
        {isRecording ? (
          <>
            <i className="fa fa-square" onClick={stopRecording}></i>
          </>
        ) : (
          <i className="fa fa-microphone" onClick={startRecording}></i>
        )}
      </div>
      {audioFile && <audio controls src={URL.createObjectURL(audioFile)} />}
    </>
  );
};

export default ChatboxFooterAudioButton;
