import { render, screen, waitFor } from "@testing-library/react";
import Layout from "./Layout";

describe("Given Layout component", () => {
  describe("When it's instanciated passing children", () => {
    test("Then it should render the children", () => {
      const buttonText = "Test Button";
      const Children = <button>{buttonText}</button>;

      render(<Layout>{Children}</Layout>);

      const foundButton = screen.getByRole("button", { name: buttonText });

      expect(foundButton).toBeInTheDocument();
    });
  });

  describe("When it's instanciated passing children and a header", () => {
    test("Then it should render the children and the header with the passed header texts", () => {
      const header = {
        title: "Title",
        subtitle: "subtitle",
      };

      const buttonText = "Test Button";
      const Children = <button>{buttonText}</button>;

      render(<Layout header={header}>{Children}</Layout>);

      const foundButton = screen.getByRole("button", { name: buttonText });
      const foundTitle = screen.getByRole("heading", {
        name: header.title.toUpperCase(),
      });

      expect(foundButton).toBeInTheDocument();
      expect(foundTitle).toBeInTheDocument();
    });
  });

  // describe("When it's instanciated passing children and a custom title", () => {
  //   test("Then it should render the children and change the title", () => {
  //     const title = "something";
  //     const expectedTitle = "something | Drink it!";

  //     const buttonText = "Test Button";
  //     const Children = <button>{buttonText}</button>;

  //     render(<Layout pageTitle={title}>{Children}</Layout>);

  //     expect(document.title).toBe(expectedTitle);
  //   });
  // });
});
