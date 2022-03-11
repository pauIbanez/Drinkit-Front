import Action from "../../../../types/Action";
import { APIRoom } from "../../../../types/Room";

export interface LoadRoomsAction extends Action {
  rooms: APIRoom[];
}

export interface AddRoomAction extends Action {
  room: APIRoom;
}
