import { useEffect, useState } from "react";
import Children from "../types/Children";
import WSContext from "./wsContext";

interface Props {
  children: Children;
}

const WSContextProvider = ({ children }: Props) => {
  const isBrowser = typeof window !== "undefined";

  const [wsInstance, setWSInstance] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setWSInstance(
      isBrowser ? new WebSocket(process.env.NEXT_PUBLIC_WS_URL) : null
    );
  }, [isBrowser]);

  useEffect(() => {
    if (wsInstance) {
      wsInstance.onopen = () => {
        wsInstance.send(
          JSON.stringify({
            type: "conn-open",
            userId: "6234bafc6ef9f9168034f489",
          })
        );
        setReady(true);
      };
    }
  }, [wsInstance]);

  return (
    <WSContext.Provider value={{ wsInstance, ready }}>
      {children}
    </WSContext.Provider>
  );
};

export default WSContextProvider;
