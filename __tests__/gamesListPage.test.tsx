import { screen } from "@testing-library/react";
import { renderInBocata } from "../jest.setup";
import { mockUrls } from "../mocks/mockUrls";
import GamesList, { getStaticProps } from "../pages/games";
import { APIGames } from "../SharedTestObjects";
import { APIGame } from "../types/Game";

describe("Given getStaticProps", () => {
  describe("When it's instanciated and response ok", () => {
    test("Then it should return an object with a property props that contains the recieved games", async () => {
      const expectedResult = {
        props: {
          games: APIGames,
        },
      };

      const result = await getStaticProps();

      expect(result).toEqual(expectedResult);
    });
  });

  describe("When it's instanciated and response is an error", () => {
    test("Then it should return an object with a property props that contains an empty array", async () => {
      const original = { ...process.env };
      process.env.NEXT_PUBLIC_API_URL = mockUrls.failUrl;
      interface Result {
        props: {
          games: APIGame[];
        };
      }

      const expectedResult: Result = {
        props: {
          games: [],
        },
      };

      const result = await getStaticProps();

      expect(result).toEqual(expectedResult);

      process.env = original;
    });
  });
});

describe("Given GamesList page", () => {
  describe("When it's instanciated", () => {
    test("Then it should render a Link with the text 'Back'", () => {
      const expectedLink = "Back";

      renderInBocata(<GamesList games={APIGames} />);

      const foundLink = screen.getByRole("link", { name: expectedLink });

      expect(foundLink).toBeInTheDocument();
    });
  });
});
