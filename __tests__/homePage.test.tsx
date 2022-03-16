import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../pages";

const mockPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe("Given HomePage", () => {
  describe("When it's instanciated", () => {
    test("Then it should render 2 headings with 'DRINK IT' and 'Let's just get drunk', 4 buttons and the user data", () => {
      const expectedTitle = "DRINK IT";
      const expectedSubitle = "Let's just get drunk";

      const expectedHostButtonAlt = "Host Game icon";
      const expectedJoinButtonAlt = "Join Game icon";
      const expectedSettingsAlt = "user settings icon";
      const expectedFriendsAlt = "friends icon";

      render(<Home />);

      const foundTitle = screen.getByRole("heading", { name: expectedTitle });
      const foundSubtitle = screen.getByRole("heading", {
        name: expectedSubitle,
      });

      const foundHostButton = screen.getByAltText(expectedHostButtonAlt);
      const foundJoinButton = screen.getByAltText(expectedJoinButtonAlt);
      const foundSettingsButton = screen.getByAltText(expectedSettingsAlt);
      const foundFriendsButton = screen.getByAltText(expectedFriendsAlt);

      expect(foundTitle).toBeInTheDocument();
      expect(foundSubtitle).toBeInTheDocument();

      expect(foundHostButton).toBeInTheDocument();
      expect(foundJoinButton).toBeInTheDocument();
      expect(foundSettingsButton).toBeInTheDocument();
      expect(foundFriendsButton).toBeInTheDocument();
    });
  });

  describe("When it's and the join button is pressed", () => {
    test("Then it should call router.push with the path '/rooms'", () => {
      const expectedJoinButtonAlt = "Join Game icon";
      const expectedPath = "/rooms";

      render(<Home />);

      const foundJoinButton = screen.getByAltText(expectedJoinButtonAlt);
      userEvent.click(foundJoinButton);

      expect(mockPush).toHaveBeenCalledWith(expectedPath);
    });
  });

  describe("When it's and the host button is pressed", () => {
    test("Then it should call router.push with the path '/games'", () => {
      const expectedHostButtonAlt = "Host Game icon";
      const expectedPath = "/games";

      render(<Home />);

      const foundHostButton = screen.getByAltText(expectedHostButtonAlt);
      userEvent.click(foundHostButton);

      expect(mockPush).toHaveBeenCalledWith(expectedPath);
    });
  });
});