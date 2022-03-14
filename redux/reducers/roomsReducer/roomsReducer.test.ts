import { APIRooms } from "../../../SharedTestObjects";
import { APIRoom } from "../../../types/Room";
import roomActionTypes from "../../actions/rooms/roomActionTypes";
import {
  AddRoomAction,
  DeleteRoomAction,
  LoadRoomsAction,
} from "../../actions/rooms/types/RoomActions";
import roomsReducer from "./roomsReducer";

describe("Given roomsReducer", () => {
  describe("When it's passed nothing", () => {
    test("Then it should return an empty array", () => {
      const expectedNewRooms: APIRoom[] = [];

      const newRooms = roomsReducer();

      expect(newRooms).toEqual(expectedNewRooms);
    });
  });

  describe("When it's passed an action with type loadRooms with 2 rooms and 0 rooms as currentRooms", () => {
    test("Then it should return the 2 rooms from the action", () => {
      const expectedNewRooms = [...APIRooms];

      const action: LoadRoomsAction = {
        type: roomActionTypes.loadRooms,
        rooms: APIRooms,
      };

      const newRooms = roomsReducer([], action);

      expect(newRooms).toEqual(expectedNewRooms);
    });
  });

  describe("When it's passed an action with type addRooms with a new Room and 2 currentRooms", () => {
    test("Then it should return the 3 rooms", () => {
      const expectedNewRooms = [...APIRooms, APIRooms[0]];

      const action: AddRoomAction = {
        type: roomActionTypes.addRoom,
        room: APIRooms[0],
      };

      const newRooms = roomsReducer(APIRooms, action);

      expect(newRooms).toEqual(expectedNewRooms);
    });
  });

  describe("When it's passed an action with type deleteRoom with a room id ans 2 currentRooms", () => {
    test("Then it should return 1 room without the deleted one", () => {
      const expectedNewRooms = [APIRooms[0]];

      const action: DeleteRoomAction = {
        type: roomActionTypes.deleteRoom,
        roomid: APIRooms[1].id,
      };

      const newRooms = roomsReducer(APIRooms, action);

      expect(newRooms).toEqual(expectedNewRooms);
    });
  });
});
