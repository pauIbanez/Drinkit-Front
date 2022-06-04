import { screen } from "@testing-library/react";
import WSContext from "../contexts/wsContext";
import { renderInBocata } from "../jest.setup";
import LobbyPage from "../pages/rooms/[roomId]";
import { lobby } from "../SharedTestObjects";
import * as redux from "react-redux";
import PiramideLobby from "../types/PiramideLobby";

jest.mock("next/router", () => ({
  useRouter: () => ({
    query: {
      roomId: "roomId",
    },
  }),
}));

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...(jest.requireActual("react-redux") as object),
  useDispatch: () => mockDispatch,
}));

const contextValue = {
  wsInstance: {
    send: jest.fn(),
    onopen: jest.fn(),
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

  describe("When its instanciated as ready and it recieves a message with the lobby data", () => {
    test("Then it should call dispatch with the roomData", () => {
      const thisLobby: PiramideLobby = {
        id: "lobbyid",
        sharedId: "AAAA",
        connectedPlayers: [
          {
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
        ],
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
        leftovers: true,
        maxPlayers: 7,
        minPlayers: 4,
        modifiers: [],
        twoDecks: false,
      };
      contextValue.ready = true;

      const user = {
        id: "userId",
      };
      const piramideLobby = thisLobby;

      const spySelector = jest.spyOn(redux, "useSelector");
      spySelector.mockReturnValue({ user, piramideLobby });

      renderInBocata(
        <WSContext.Provider value={contextValue}>
          <LobbyPage />
        </WSContext.Provider>
      );

      const data: PiramideLobby = {
        sharedId: "AAAA",
        jokers: false,
        modifiers: ["double"],
        twoDecks: false,
        leftovers: false,
        id: "someid",
        connectedPlayers: [],
        leader: {
          profile: {
            username: "usernaim",
            avatar: {
              backup: "/sd",
              staticUrl: "/dscs",
            },
            friends: [],
            incomingRequests: [],
            stats: {
              games: 0,
              sips: 0,
            },
          },
          id: "leaderid",
        },
        maxPlayers: 7,
        minPlayers: 4,
      };

      const message = {
        data: JSON.stringify(data),
      };
      contextValue.wsInstance.onmessage(message);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
