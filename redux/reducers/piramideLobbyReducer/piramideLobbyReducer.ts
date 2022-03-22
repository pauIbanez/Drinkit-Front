import Action from "../../../types/Action";
import defaultAction from "../../actions/defaultAction";
import piramideLobbyTypes from "../../actions/piramideLobby/piramideLobbyTypes";
import { UpdateStateAction } from "../../actions/piramideLobby/types/piramideLobbyActionTypes";

const piramideLobbyReducer = (
  currentLobby = {},
  action: Action = defaultAction
) => {
  let newLobby;

  if (action.type === piramideLobbyTypes.updateState) {
    newLobby = { ...(action as UpdateStateAction).lobby };
  } else {
    newLobby = { ...currentLobby };
  }

  return newLobby;
};

export default piramideLobbyReducer;
