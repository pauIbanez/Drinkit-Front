import Action from "../../../types/Action";
import { APIRoom } from "../../../types/Room";
import defaultAction from "../../actions/defaultAction";

const roomsReducer = (
  currentRooms: APIRoom[] = [],
  action: Action = defaultAction
): APIRoom[] => {
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
