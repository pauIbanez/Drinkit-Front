import { mockUrls } from "../../../mocks/mockUrls";
import { APIRooms } from "../../../SharedTestObjects";
import roomActionTypes from "../../actions/rooms/roomActionTypes";
import {
  AddRoomAction,
  DeleteRoomAction,
} from "../../actions/rooms/types/RoomActions";
import { getAddRoomThunk, getDeleteRoomThunk } from "./roomThunks";
import NewRoom from "./types/NewRoom";

describe("Given addRoomThunk", () => {
  describe("When it's instanciated with a new Room and dispatch and everything ok", () => {
    test("Then it should call dispatch with the new room and onLoad callback", async () => {
      const expectedAction: AddRoomAction = {
        type: roomActionTypes.addRoom,
        room: APIRooms[0],
      };

      const newRoom: NewRoom = {
        game: "gameid",
        leader: "leaderid",
      };
      const dispatch = jest.fn();
      const onLoad = jest.fn();

      const addRoomThunk = getAddRoomThunk(newRoom, onLoad);
      await addRoomThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it's instanciated with a new Room and dispatch and everything bad", () => {
    test("Then it should not call dispatch", async () => {
      const originalEnv = { ...process.env };
      process.env.NEXT_PUBLIC_API_URL = mockUrls.failUrl;

      const newRoom: NewRoom = {
        game: "gameid",
        leader: "leaderid",
      };
      const dispatch = jest.fn();
      const onLoad = jest.fn();

      const addRoomThunk = getAddRoomThunk(newRoom, onLoad);
      await addRoomThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();

      process.env = originalEnv;
    });
  });
});

describe("Given deleteRoomThunk", () => {
  describe("When it's instanciated with a roomId and dispatch and everything ok", () => {
    test("Then it should call dispatch with the roomId", async () => {
      const expectedAction: DeleteRoomAction = {
        type: roomActionTypes.deleteRoom,
        roomid: APIRooms[0].id,
      };

      const dispatch = jest.fn();

      const deleteRoomThunk = getDeleteRoomThunk(APIRooms[0].id);
      await deleteRoomThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("When it's instanciated with a roomid and dispatch and everything bad", () => {
    test("Then it should not call dispatch", async () => {
      const originalEnv = { ...process.env };
      process.env.NEXT_PUBLIC_API_URL = mockUrls.failUrl;

      const dispatch = jest.fn();

      const deleteRoomThunk = getDeleteRoomThunk(APIRooms[0].id);
      await deleteRoomThunk(dispatch);

      expect(dispatch).not.toHaveBeenCalled();

      process.env = originalEnv;
    });
  });
});
