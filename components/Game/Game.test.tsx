import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { APIGames } from "../../SharedTestObjects";
import Game from "./Game";

const mockPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

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

  describe("When it's instanciated passing a game and the user clicks on it", () => {
    test("Then it should call method push of the router", () => {
      render(<Game game={APIGames[0]} />);

      const foundGameItem = screen.getByRole("listitem");
      userEvent.click(foundGameItem);

      expect(mockPush).toHaveBeenCalled();
    });
  });
});
