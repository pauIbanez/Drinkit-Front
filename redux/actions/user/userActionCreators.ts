import Player, { PlayerChange } from "../../../types/Player";
import { LoadUserAction, UpdateUserAction } from "./types/UserActions";
import userActionTypes from "./userActionTypes.ts";

export const getLoadUserAction = (user: Player): LoadUserAction => ({
  type: userActionTypes.loadUser,
  user,
});

export const getAddRoomAction = (change: PlayerChange): UpdateUserAction => ({
  type: userActionTypes.updateUser,
  change,
});
