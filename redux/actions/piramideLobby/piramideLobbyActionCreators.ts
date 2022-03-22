import PiramideLobby from "../../../types/PiramideLobby";
import piramideLobbyTypes from "./piramideLobbyTypes";
import { UpdateStateAction } from "./types/piramideLobbyActionTypes";

export const getUpdateStateAction = (
  lobby: PiramideLobby
): UpdateStateAction => ({
  type: piramideLobbyTypes.updateState,
  lobby,
});
