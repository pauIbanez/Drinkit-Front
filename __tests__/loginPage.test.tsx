import { screen } from "@testing-library/react";
import { renderInBocata } from "../jest.setup";
import LoginPage from "../pages/accounts/login";

describe("Given Login page", () => {
  describe("When it's instanciated", () => {
    test("Then it should render a heading with the text 'DRINK IT' and a link with the text 'Sign up'", () => {
      const expectedHeading = "DRINK IT";
      const expectedLink = "Sign up";

      renderInBocata(<LoginPage />);

      const foundHeading = screen.getByRole("heading", {
        name: expectedHeading,
      });
      const foundLink = screen.getByRole("link", { name: expectedLink });

      expect(foundHeading).toBeInTheDocument();
      expect(foundLink).toBeInTheDocument();
    });
  });
});
