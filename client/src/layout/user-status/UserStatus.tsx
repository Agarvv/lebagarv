import React, { useEffect } from 'react';
import styles from './UserStatus.module.css';

interface Props {
  userId: number;
}

const UserStatus: React.FC<Props> = ({ userId }) => {
  const [connected, setConnected] = React.useState(false);

  useEffect(() => {
    const ws = new WebSocket('wss://chatssy.onrender.com/users');

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'status_update' && data.user_id === userId) {
        setConnected(data.connected);
      }
    };

    return () => {
      ws.close();
    };
  }, [userId]);

  return (
    <div className={styles.status}>
    
    </div>
  );
};

export default UserStatus;
