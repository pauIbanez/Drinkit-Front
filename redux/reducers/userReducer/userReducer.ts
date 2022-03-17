import Action from "../../../types/Action";
import Player from "../../../types/Player";
import defaultAction from "../../actions/defaultAction";
import {
  LoadUserAction,
  UpdateUserAction,
} from "../../actions/user/types/UserActions";
import userActionTypes from "../../actions/user/userActionTypes.ts";
import defaultUser from "./defaultUser";

const userReducer = (
  currentUser: Player = defaultUser,
  action: Action = defaultAction
): Player => {
  let newUser: Player;

  switch (action.type) {
    case userActionTypes.loadUser:
      newUser = { ...(action as LoadUserAction).user };
      break;

    case userActionTypes.updateUser:
      let tempNewUser = Object.assign(
        (action as UpdateUserAction).change,
        currentUser
      );
      newUser = JSON.parse(JSON.stringify(tempNewUser));
      break;

    default:
      newUser = { ...currentUser };
      break;
  }

  return newUser;
};

export default userReducer;
