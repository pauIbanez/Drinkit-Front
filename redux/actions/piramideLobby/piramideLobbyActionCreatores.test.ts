import { lobby } from "../../../SharedTestObjects";
import { getUpdateStateAction } from "./piramideLobbyActionCreators";
import piramideLobbyTypes from "./piramideLobbyTypes";
import { UpdateStateAction } from "./types/piramideLobbyActionTypes";

describe("Given getUpdateStateAction", () => {
  describe("When it's instanciated passing a lobbyState", () => {
    test("Then it should return an action with type update state and the lobby state", () => {
      const expectedAction: UpdateStateAction = {
        type: piramideLobbyTypes.updateState,
        lobby,
      };

      const action = getUpdateStateAction(lobby);

      expect(action).toEqual(expectedAction);
    });
  });
});
