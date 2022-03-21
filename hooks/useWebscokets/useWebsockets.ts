import { useCallback } from "react";

const useWebsockets = () => {
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
  }, []);

  return { startConnection };
};

export default useWebsockets;
