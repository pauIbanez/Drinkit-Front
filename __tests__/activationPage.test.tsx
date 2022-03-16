import { render, screen } from "@testing-library/react";
import ActivationPage, {
  getServerSideProps,
} from "../pages/accounts/activate/[token]";

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

describe("Given getServerSideProps", () => {
  describe("When it's passed a valid token", () => {
    test("Then it should return an object with the prop activated as true", async () => {
      const expectedResult = {
        props: {
          activated: true,
        },
      };

      const passedParams = {
        params: {
          token: "token",
        },
      };

      const result = await getServerSideProps(passedParams);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("When it's passed an invalid valid token", () => {
    test("Then it should return an object with the prop activated as false and the error: 'error message'", async () => {
      const expectedResult = {
        props: {
          activated: false,
          error: "error message",
        },
      };

      const passedParams = {
        params: {
          token: "invalidToken",
        },
      };

      const result = await getServerSideProps(passedParams);

      expect(result).toEqual(expectedResult);
    });
  });
});
