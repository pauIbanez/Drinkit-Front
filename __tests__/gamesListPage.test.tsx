import { render, screen } from "@testing-library/react";
import GamesList, { getStaticProps } from "../pages/games";

describe("Given getStaticProps", () => {
  describe("When it's instanciated", () => {
    test("Then it should return an object with a property props that contains the recieved games", () => {
      const APIGames = [
        {
          name: "Piramide",
          description: "ASdasdadsa",
          drunkness: "high",
          rules: "asdasdasda",
          duration: 30,
          minPlayers: 4,
          maxPlayers: 12,
        },
      ];
      const expectedResult = {
        props: {
          games: APIGames,
        },
      };

      const result = getStaticProps();

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given Register page", () => {
  describe("When it's instanciated", () => {
    test("Then it should render a Link with the text 'Back'", () => {
      const expectedLink = "Back";

      render(<GamesList games={[]} />);

      const foundLink = screen.getByRole("link", { name: expectedLink });

      expect(foundLink).toBeInTheDocument();
    });
  });
});
