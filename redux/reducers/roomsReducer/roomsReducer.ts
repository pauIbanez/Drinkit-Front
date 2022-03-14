import Action from "../../../types/Action";
import { APIRoom } from "../../../types/Room";
import defaultAction from "../../actions/defaultAction";
import roomActionTypes from "../../actions/rooms/roomActionTypes";
import {
  AddRoomAction,
  DeleteRoomAction,
  LoadRoomsAction,
} from "../../actions/rooms/types/RoomActions";

const roomsReducer = (
  currentRooms: APIRoom[] = [],
  action: Action = defaultAction
): APIRoom[] => {
  let newRooms: APIRoom[] = [];

  switch (action.type) {
    case roomActionTypes.loadRooms:
      newRooms = [...(action as LoadRoomsAction).rooms];
      break;

    case roomActionTypes.addRoom:
      newRooms = [...currentRooms, (action as AddRoomAction).room];
      break;

    case roomActionTypes.deleteRoom:
      newRooms = currentRooms.filter(
        ({ id }) => id !== (action as DeleteRoomAction).roomid
      );
      break;

    default:
      newRooms = [...currentRooms];
      break;
  }

  return newRooms;
};

export default roomsReducer;
