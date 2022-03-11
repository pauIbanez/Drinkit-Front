import { APIRooms } from "../../../SharedTestObjects";
import roomActionTypes from "../../actions/rooms/roomActionTypes";
import { AddRoomAction } from "../../actions/rooms/types/RoomActions";
import { getAddRoomThunk } from "./roomThunks";
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
});
