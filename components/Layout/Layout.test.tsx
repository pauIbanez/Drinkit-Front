import { screen } from "@testing-library/react";
import { renderInBocata } from "../../jest.setup";
import Layout from "./Layout";

const mockPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockPush,
    pathname: "",
  }),
}));

describe("Given Layout component", () => {
  describe("When it's instanciated passing children", () => {
    test("Then it should render the children", () => {
      const buttonText = "Test Button";
      const Children = <button>{buttonText}</button>;

      renderInBocata(<Layout>{Children}</Layout>);

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

      renderInBocata(<Layout header={header}>{Children}</Layout>);

      const foundButton = screen.getByRole("button", { name: buttonText });
      const foundTitle = screen.getByRole("heading", {
        name: header.title.toUpperCase(),
      });

      expect(foundButton).toBeInTheDocument();
      expect(foundTitle).toBeInTheDocument();
    });
  });

  describe("When it's instanciated and the user is not logged in", () => {
    test("Then it should call router.push with route '/accounts/login'", () => {
      const expectedPath = "/accounts/login";

      window.localStorage.getItem = jest.fn().mockReturnValue(null);

      const buttonText = "Test Button";
      const Children = <button>{buttonText}</button>;
      renderInBocata(<Layout>{Children}</Layout>);

      expect(mockPush).toHaveBeenCalledWith(expectedPath);
    });
  });
});
