import { useCallback, useState } from "react";

const useWebsockets = () => {
  const [connection, setConnection] = useState(null);

  const startConnection = useCallback((id) => {
    const socketConnection = new WebSocket(process.env.NEXT_PUBLIC_WS_URL);

    socketConnection.onopen = () => {
      socketConnection.send(
        JSON.stringify({
          type: "conn-open",
          id,
        })
      );
    };
    setConnection(socketConnection);
  }, []);

  const sendMessage = useCallback(
    (message: object) => {
      connection.send(JSON.stringify(message));
    },
    [connection]
  );

  return { startConnection, sendMessage, connection };
};

export default useWebsockets;
