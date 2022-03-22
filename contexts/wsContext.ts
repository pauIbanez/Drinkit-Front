import { createContext } from "react";

const wsContext = createContext(null);
wsContext.displayName = "Websocket context";

export default wsContext;
