import { useContext } from "react";
import { SignalRContext } from "src/context/chat/SignalRContext";

interface Message {
  type?: string; // 'audio', 'video', 'text'
  value: string;
  chatId?: number;
  receiverId?: number;
}

export const useMessage = () => {
  const { connection } = useContext(SignalRContext);

  const emitMessage = async (message: Message) => {
    if (!connection) {
      console.error("no signal r connection at send message");
      return;
    }

    try {
      await connection.send("SendMessage", message); 
      console.log("Mensaje send:", message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return { emitMessage };
};

export default useMessage;
