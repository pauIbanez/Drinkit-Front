import Action from "../../../../types/Action";
import Player, { PlayerChange } from "../../../../types/Player";

export interface LoadUserAction extends Action {
  user: Player;
}

export interface UpdateUserAction extends Action {
  change: PlayerChange;
}
