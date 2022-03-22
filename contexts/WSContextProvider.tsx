import { useState } from "react";
import Children from "../types/Children";
import WSContext from "./wsContext";

interface Props {
  children: Children;
}

const WSContextProvider = ({ children }: Props) => {
  const [ready, setReady] = useState(false);

  const socketConnection = new WebSocket(process.env.NEXT_PUBLIC_WS_URL);

  socketConnection.onopen = () => {
    socketConnection.send(
      JSON.stringify({
        type: "conn-open",
        userId: "6234bafc6ef9f9168034f489",
      })
    );
    console.log("connection opened");
    setReady(true);
    socketConnection.onmessage = (message: object) => {
      console.log(JSON.stringify(message));
    };
  };

  const contextValue = {
    ready,
    connection: socketConnection,
  };

  return (
    <WSContext.Provider value={contextValue}>{children}</WSContext.Provider>
  );
};

export default WSContextProvider;
