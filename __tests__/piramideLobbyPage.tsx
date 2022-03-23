import { screen } from "@testing-library/react";
import WSContext from "../contexts/wsContext";
import { renderInBocata } from "../jest.setup";
import LobbyPage from "../pages/rooms/[roomId]";
import { lobby } from "../SharedTestObjects";
import * as redux from "react-redux";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: "lobbyId",
  }),
}));

const contextValue = {
  wsInstance: {
    send: jest.fn(),
    onopen: jest.fn(),
    onmessage: jest.fn(),
  },
  ready: false,
};

describe("Given PiramideLobbyPage", () => {
  let originalEnv: NodeJS.ProcessEnv;
  beforeAll(() => {
    originalEnv = { ...process.env };
    process.env.NEXT_PUBLIC_API_URL = "/";
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  describe("When its instanciated", () => {
    test("Then it should render a header with the text 'PIRAMIDE' and 'LOBBY'", () => {
      const expectedTitle = "PIRAMIDE";
      const expectedSubtitle = "LOBBY";

      renderInBocata(
        <WSContext.Provider value={contextValue}>
          <LobbyPage />
        </WSContext.Provider>
      );

      const foundTitle = screen.getByRole("heading", { name: expectedTitle });
      const foundSubtitle = screen.getByRole("heading", {
        name: expectedSubtitle,
      });

      expect(foundTitle).toBeInTheDocument();
      expect(foundSubtitle).toBeInTheDocument();
    });
  });

  describe("When its instanciated as ready", () => {
    test("Then it should render the connected players", () => {
      const expectedUsername = lobby.leader.profile.username;
      contextValue.ready = true;

      const user = {
        id: "userId",
      };
      const piramideLobby = lobby;

      const spySelector = jest.spyOn(redux, "useSelector");
      spySelector.mockReturnValue({ user, piramideLobby });

      renderInBocata(
        <WSContext.Provider value={contextValue}>
          <LobbyPage />
        </WSContext.Provider>
      );

      const foundUsername = screen.getByText(expectedUsername);

      expect(foundUsername).toBeInTheDocument();
    });
  });
});
