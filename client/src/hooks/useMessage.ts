import { useState, useEffect } from 'react';

export const useMessage = () => {
  const [socket, setSocket] = useState<null | WebSocket>(null);

  useEffect(() => {
    const ws = new WebSocket('wss://chatssy.onrender.com/');

    ws.onopen = () => {
      console.log('WebSocket is open now.');
    };

    ws.onclose = () => {
      console.log('WebSocket is closed now.');
    };

    setSocket((prev) => ws);

    return () => {
      ws.close();
    };
  }, []);

  const emitMessage = (message: any) => {
      console.log('Sending message', message)
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    } else {
      console.warn('WebSocket not ready.');
    }
  };

  return { emitMessage };
};