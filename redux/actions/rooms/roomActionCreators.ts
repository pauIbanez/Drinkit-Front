import { APIRoom } from "../../../types/Room";
import roomActionTypes from "./roomActionTypes";
import { AddRoomAction, LoadRoomsAction } from "./types/RoomActions";

export const getLoadRoomsAction = (rooms: APIRoom[]): LoadRoomsAction => ({
  type: roomActionTypes.loadRooms,
  rooms,
});

export const getAddRoomAction = (room: APIRoom): AddRoomAction => ({
  type: roomActionTypes.addRoom,
  room,
});
