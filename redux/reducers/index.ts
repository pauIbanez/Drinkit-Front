import { combineReducers } from "redux";
import piramideLobbyReducer from "./piramideLobbyReducer/piramideLobbyReducer";
import roomsReducer from "./roomsReducer/roomsReducer";
import userReducer from "./userReducer/userReducer";

export const rootReducer = combineReducers({
  rooms: roomsReducer,
  user: userReducer,
  piramideLobby: piramideLobbyReducer,
});
