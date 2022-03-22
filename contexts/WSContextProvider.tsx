import Children from "../types/Children";
import WSContext from "./wsContext";

interface Props {
  children: Children;
}

const WSContextProvider = ({ children }: Props) => {
  const contextValue = {};

  return (
    <WSContext.Provider value={contextValue}>{children}</WSContext.Provider>
  );
};

export default WSContextProvider;
