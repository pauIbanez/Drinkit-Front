import { render, screen } from "@testing-library/react";
import { APIGame } from "../../types/Game";
import Game from "./Game";

describe("Given Game component", () => {
  describe("When it's instanciated passing a game", () => {
    test("Then it should render the game's name in uppercase", () => {
      const game: APIGame = {
        name: "Piramide",
        drunkness: "asda",
        duration: 30,
        description: "asdasd",
        maxPlayers: 5,
        minPlayers: 3,
        rules: "sdafsde",
      };

      render(<Game game={game} />);

      const foundGameName = screen.getByRole("heading", {
        name: game.name.toUpperCase(),
      });

      expect(foundGameName).toBeInTheDocument();
    });
  });
});
