import PiramideLobby from "../../../types/PiramideLobby";
import roomsReducer from "../../reducers/roomsReducer/roomsReducer";
import piramideLobbyTypes from "./piramideLobbyTypes";
import { UpdateStateAction } from "./types/piramideLobbyActionTypes";

export const getUpdateStateAction = (
  lobby: PiramideLobby,
  roomId: string
): UpdateStateAction => ({
  type: piramideLobbyTypes.updateState,
  lobby,
  roomId,
});
