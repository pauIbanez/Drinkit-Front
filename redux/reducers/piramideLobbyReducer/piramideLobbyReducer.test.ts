import piramideLobbyReducer from "./piramideLobbyReducer";

describe("Given piramideLobbyReducer", () => {
  describe("When it's instanciated passing nothing", () => {
    test("Then it should return an empty object", () => {
      const expectedLobby = {};

      const lobby = piramideLobbyReducer();

      expect(lobby).toEqual(expectedLobby);
    });
  });
});
