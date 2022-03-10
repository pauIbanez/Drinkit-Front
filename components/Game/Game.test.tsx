import { render, screen } from "@testing-library/react";
import { APIGames } from "../../SharedTestObjects";
import Game from "./Game";

describe("Given Game component", () => {
  describe("When it's instanciated passing a game", () => {
    test("Then it should render the game's name in uppercase", () => {
      render(<Game game={APIGames[0]} />);

      const foundGameName = screen.getByRole("heading", {
        name: APIGames[0].name.toUpperCase(),
      });

      expect(foundGameName).toBeInTheDocument();
    });
  });
});
