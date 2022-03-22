import Action from "../../../../types/Action";
import PiramideLobby from "../../../../types/PiramideLobby";

export interface UpdateStateAction extends Action {
  lobby: PiramideLobby;
}
