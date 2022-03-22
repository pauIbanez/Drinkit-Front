import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Children from "../types/Children";
import State from "../types/State";
import WSContext from "./wsContext";

interface Props {
  children: Children;
}

const WSContextProvider = ({ children }: Props) => {
  const isBrowser = typeof window !== "undefined";

  const [wsInstance, setWSInstance] = useState(null);
  const [ready, setReady] = useState(false);

  const { user } = useSelector((state: State) => state);

  useEffect(() => {
    if (user.id) {
      setWSInstance(
        isBrowser ? new WebSocket(process.env.NEXT_PUBLIC_WS_URL) : null
      );
    }
  }, [isBrowser, user.id]);

  useEffect(() => {
    if (wsInstance) {
      wsInstance.onopen = () => {
        wsInstance.send(
          JSON.stringify({
            type: "conn-open",
            userId: user.id,
          })
        );
        setReady(true);
      };
    }
  }, [user.id, wsInstance]);

  return (
    <WSContext.Provider value={{ wsInstance, ready }}>
      {children}
    </WSContext.Provider>
  );
};

export default WSContextProvider;
