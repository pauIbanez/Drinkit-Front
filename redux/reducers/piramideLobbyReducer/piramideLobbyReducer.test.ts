import { lobby } from "../../../SharedTestObjects";
import piramideLobbyTypes from "../../actions/piramideLobby/piramideLobbyTypes";
import { UpdateStateAction } from "../../actions/piramideLobby/types/piramideLobbyActionTypes";
import piramideLobbyReducer from "./piramideLobbyReducer";

describe("Given piramideLobbyReducer", () => {
  describe("When it's instanciated passing nothing", () => {
    test("Then it should return an empty object", () => {
      const expectedLobby = {};

      const newLobby = piramideLobbyReducer();

      expect(newLobby).toEqual(expectedLobby);
    });
  });

  describe("When it's instanciated passing an action with type updateState and a state", () => {
    test("Then it should return the passed state", () => {
      const expectedLobby = lobby;
      const action: UpdateStateAction = {
        lobby,
        type: piramideLobbyTypes.updateState,
      };

      const recievedLobby = piramideLobbyReducer({}, action);

      expect(recievedLobby).toEqual(expectedLobby);
    });
  });
});
