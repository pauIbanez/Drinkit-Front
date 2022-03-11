import { render, screen } from "@testing-library/react";
import Home from "../pages";

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
});
