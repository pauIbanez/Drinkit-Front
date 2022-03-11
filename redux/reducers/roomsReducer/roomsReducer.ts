import Action from "../../../types/Action";
import { APIRoom } from "../../../types/Room";

const roomsReducer = (currentRooms: APIRoom[] = [], action: Action = {}) => {
  let newRooms: APIRoom[] = [];

  switch (action.type) {
    case value:
      break;

    default:
      newRooms = [...currentRooms];
      break;
  }

  return newRooms;
};

export default roomsReducer;
