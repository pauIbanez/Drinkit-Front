import { screen } from "@testing-library/react";

import GameDetails, {
  getStaticPaths,
  getStaticProps,
} from "../pages/games/[name]";
import { APIGames } from "../SharedTestObjects";
import { renderInBocata } from "../jest.setup";

describe("Given gameDetails page", () => {
  describe("When it's instanciated passing a game", () => {
    test("Then it should display the game's name, a heading with the text 'Setup' and a heading with the text 'How to play' plus the setup and howToPlay texts of the game object", () => {
      const expectedSetup = "Setup";
      const expectedHowToPlay = "How to play";

      renderInBocata(<GameDetails game={APIGames[0]} />);

      const foundGameName = screen.getByRole("heading", {
        name: APIGames[0].name,
      });
      const foundSetupHeading = screen.getByRole("heading", {
        name: expectedSetup,
      });
      const foundHowToPlayHeading = screen.getByRole("heading", {
        name: expectedHowToPlay,
      });

      const foundSetuptext = screen.getByText(APIGames[0].gameInfo.setup);
      const foundHowToPlayText = screen.getByText(
        APIGames[0].gameInfo.howToPlay
      );

      expect(foundGameName).toBeInTheDocument();
      expect(foundSetupHeading).toBeInTheDocument();
      expect(foundHowToPlayHeading).toBeInTheDocument();
      expect(foundSetuptext).toBeInTheDocument();
      expect(foundHowToPlayText).toBeInTheDocument();
    });
  });
});

describe("Given getStaticPaths", () => {
  describe("When it's instanciated", () => {
    test("Then it should return an object with an paths that contains an object with propperty params with the games names", async () => {
      const expectedResult = {
        paths: [
          {
            params: {
              name: "piramide",
            },
          },
          {
            params: {
              name: "remar",
            },
          },
        ],
        fallback: false,
      };
      const result = await getStaticPaths();

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given getStaticProps", () => {
  describe("When it's instanciated passing an objects with params and a game name", () => {
    test("Then it should return an object with the propperty props contining the correct game", async () => {
      const expectedResult = {
        props: {
          game: APIGames[0],
        },
      };
      const result = await getStaticProps({
        params: { name: APIGames[0].name.toLowerCase() },
      });

      expect(result).toEqual(expectedResult);
    });
  });
});
