import { render, screen } from "@testing-library/react";
import GamesList, { getStaticProps } from "../pages/games";
import { APIGames } from "../SharedTestObjects";

describe("Given getStaticProps", () => {
  describe("When it's instanciated", () => {
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
});

describe("Given GamesList page", () => {
  describe("When it's instanciated", () => {
    test("Then it should render a Link with the text 'Back'", () => {
      const expectedLink = "Back";

      render(<GamesList games={APIGames} />);

      const foundLink = screen.getByRole("link", { name: expectedLink });

      expect(foundLink).toBeInTheDocument();
    });
  });
});
