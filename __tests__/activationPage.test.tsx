import { render, screen } from "@testing-library/react";
import ActivationPage from "../pages/accounts/activate/[token]";

describe("Given activationPage", () => {
  describe("When it's instanciated passing activated as true", () => {
    test("Then it should display a heading with the text 'Activation' and a link with name 'Log in'", () => {
      const activated = true;
      const expectedHeading = "Activation";
      const excpectedLink = "Log in";

      render(<ActivationPage activated={activated} />);

      const foundHeading = screen.getByRole("heading", {
        name: expectedHeading,
      });
      const foundLink = screen.getByRole("link", { name: excpectedLink });

      expect(foundHeading).toBeInTheDocument();
      expect(foundLink).toBeInTheDocument();
    });
  });

  describe("When it's instanciated passing activated as false and an error", () => {
    test("Then it should display a heading with the text 'Activation failed' and the error", () => {
      const activated = false;
      const expectedHeading = "Activation failed";
      const expectedError = "Some error";

      render(<ActivationPage activated={activated} error={expectedError} />);

      const foundHeading = screen.getByRole("heading", {
        name: expectedHeading,
      });
      const foundError = screen.getByText(expectedError);

      expect(foundHeading).toBeInTheDocument();
      expect(foundError).toBeInTheDocument();
    });
  });
});
