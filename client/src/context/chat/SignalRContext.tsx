import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { HubConnectionBuilder, HubConnection } from "@microsoft/signalr";

interface SignalRContextType {
  connection: HubConnection | null;
}

export const SignalRContext = createContext<SignalRContextType>({
  connection: null, 
});

export const SignalRProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [connection, setConnection] = useState<HubConnection | null>(null);

  useEffect(() => {
    const connect = new HubConnectionBuilder()
      .withUrl("https://lebagarv.onrender.com/chatHub") 
      .withAutomaticReconnect()
      .build();

      connect.start()
        .then(() => console.log("SignalR connected"))
        .catch(err => console.error("Error connecting to SignalR:", err));

    setConnection(connect);

    return () => {
      connection?.stop();
    };
  }, []);

  return (
    <SignalRContext.Provider value={{ connection }}>
      {children}
    </SignalRContext.Provider>
  );
};

export const useSignalR = () => {
  const context = useContext(SignalRContext);
  if (!context) {
    throw new Error("useSignalR must be used inside SignalRProvider");
  }
  return context;
};
