import { createContext } from "react";

const WSContext = createContext(null);
WSContext.displayName = "Websocket context";

export default WSContext;
