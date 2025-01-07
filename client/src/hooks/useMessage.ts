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
      throw new Error("SignalR Connection Is Not Ready.")
    }

    try {
      await connection.send("SendMessage", message); 
      console.log("Mensaje sucessfully send:", message);
    } catch (error) {
      console.error("Error while sending message", error);
    }
  };

  return { emitMessage };
};

export default useMessage;
