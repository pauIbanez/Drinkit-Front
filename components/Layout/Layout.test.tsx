import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given Layout component", () => {
  describe("When it's instanciated passing children", () => {
    test("Then it should render them", () => {
      const buttonText = "Test Button";
      const Children = <button>{buttonText}</button>;

      render(<Layout>{Children}</Layout>);

      const foundButton = screen.getByRole("button", { name: buttonText });

      expect(foundButton).toBeInTheDocument();
    });
  });
});
