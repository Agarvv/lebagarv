
import CallButton from './CallButton/CallButton';
import VideoCallButton from './VideoCallButton/VideoCallButton';
import styles from './ChatboxHeader.module.css';
import logo from 'src/logo.svg';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

const ChatboxHeader = () => {
  const chat = useSelector((state: RootState) => state.chat.activeChat);

  return (
    
    <header className={styles.header}>
      <div className={styles.hUser}>
        <div className={styles.hUserImg}>
          <img src={chat?.car.images[0] ?? logo} alt="Profile" />
        </div>
        <div className={styles.hUserData}>
          <p>{chat?.car.title}</p>
        </div>
      </div>
    </header>
  );
};

export default ChatboxHeader;
