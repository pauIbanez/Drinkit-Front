import { render, screen } from "@testing-library/react";
import RegisterPage from "../pages/accounts/register";

describe("Given Register page", () => {
  describe("When it's instanciated", () => {
    test("Then it should render a heading with the text 'DRINK IT' and a link with the text 'Log in'", () => {
      const expectedHeading = "DRINK IT";
      const expectedLink = "Log in";

      render(<RegisterPage />);

      const foundHeading = screen.getByRole("heading", {
        name: expectedHeading,
      });
      const foundLink = screen.getByRole("link", { name: expectedLink });

      expect(foundHeading).toBeInTheDocument();
      expect(foundLink).toBeInTheDocument();
    });
  });
});
