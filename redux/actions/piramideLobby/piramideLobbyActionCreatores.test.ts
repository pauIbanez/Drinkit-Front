import PiramideLobby from "../../../types/PiramideLobby";
import { getUpdateStateAction } from "./piramideLobbyActionCreators";
import piramideLobbyTypes from "./piramideLobbyTypes";
import { UpdateStateAction } from "./types/piramideLobbyActionTypes";

describe("Given getUpdateStateAction", () => {
  describe("When it's instanciated passing a lobbyState", () => {
    test("Then it should return an action with type update state and the lobby state", () => {
      const lobby: PiramideLobby = {
        id: "lobbyid",
        connectedPlayers: [],
        jokers: false,
        leader: {
          id: "leaderId",
          profile: {
            avatar: {
              backup: "backup",
              staticUrl: "static",
            },
            friends: [],
            incomingRequests: [],
            stats: {
              games: 0,
              sips: 0,
            },
            username: "username",
          },
        },
        leftovers: false,
        maxPlayers: 7,
        minPlayers: 4,
        modifiers: [],
        twoDecks: false,
      };

      const expectedAction: UpdateStateAction = {
        type: piramideLobbyTypes.updateState,
        lobby,
      };

      const action = getUpdateStateAction(lobby);

      expect(action).toEqual(expectedAction);
    });
  });
});
