import { combineReducers } from "redux";
import roomsReducer from "./roomsReducer/roomsReducer";

export const rootReducer = combineReducers({
  rooms: roomsReducer,
});
