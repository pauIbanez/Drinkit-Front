import { APIRooms } from "../../../SharedTestObjects";
import {
  getAddRoomAction,
  getDeleteRoomAction,
  getLoadRoomsAction,
} from "./roomActionCreators";
import roomActionTypes from "./roomActionTypes";
import {
  AddRoomAction,
  DeleteRoomAction,
  LoadRoomsAction,
} from "./types/RoomActions";

describe("Givcen getLoadRoomsAction", () => {
  describe("when it's instanciated passing an array of Rooms", () => {
    test("Then it should return an action with type as loadRooms and the array of rooms", () => {
      const expectedAction: LoadRoomsAction = {
        type: roomActionTypes.loadRooms,
        rooms: APIRooms,
      };

      const recievedAction = getLoadRoomsAction(APIRooms);

      expect(recievedAction).toEqual(expectedAction);
    });
  });
});

describe("Givcen getAddRoomAction", () => {
  describe("when it's instanciated passing a Room", () => {
    test("Then it should return an action with type as addRoom and the room", () => {
      const expectedAction: AddRoomAction = {
        type: roomActionTypes.addRoom,
        room: APIRooms[0],
      };

      const recievedAction = getAddRoomAction(APIRooms[0]);

      expect(recievedAction).toEqual(expectedAction);
    });
  });
});

describe("Givcen getDeleteRoomAction", () => {
  describe("when it's instanciated passing a roomid", () => {
    test("Then it should return an action with type as deleteRoom and the roomid", () => {
      const expectedAction: DeleteRoomAction = {
        type: roomActionTypes.deleteRoom,
        roomid: APIRooms[0].id,
      };

      const recievedAction = getDeleteRoomAction(APIRooms[0].id);

      expect(recievedAction).toEqual(expectedAction);
    });
  });
});
