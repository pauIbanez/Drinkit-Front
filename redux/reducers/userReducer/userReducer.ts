import Action from "../../../types/Action";
import Player from "../../../types/Player";
import defaultAction from "../../actions/defaultAction";
import defaultUser from "./defaultUser";

const userReducer = (
  currentUser: Player = defaultUser,
  action: Action = defaultAction
): Player => {
  let newUser: Player;

  switch (action.type) {
    default:
      newUser = { ...currentUser };
      break;
  }

  return newUser;
};

export default userReducer;
