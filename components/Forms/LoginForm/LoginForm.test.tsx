import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

const mockPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe("Given LoginForm", () => {
  describe("When it's instanciated", () => {
    test("Then it should render 2 input fields", () => {
      const labels = {
        username: "Username",
        password: "Password",
      };

      render(<LoginForm />);

      const foundUsername = screen.getByLabelText(labels.username);
      const foundPassword = screen.getByLabelText(labels.password);

      expect(foundUsername).toBeInTheDocument();
      expect(foundPassword).toBeInTheDocument();
    });
  });

  describe("When it's instanciated and the user completes the form with everything ok", () => {
    test("Then it should call reouter.push with '/'", async () => {
      const labels = {
        username: "Username",
        password: "Password",
      };
      const expectedButton = "Log in";
      const expectedRoute = "/";

      render(<LoginForm />);

      const foundUsername = screen.getByLabelText(labels.username);
      const foundPassword = screen.getByLabelText(labels.password);
      const foundButton = screen.getByRole("button", { name: expectedButton });

      userEvent.type(foundUsername, "username");
      userEvent.type(foundPassword, "password");
      userEvent.click(foundButton);

      await waitFor(() => expect(mockPush).toHaveBeenCalledWith(expectedRoute));
      expect(mockPush).toHaveBeenCalledWith(expectedRoute);
    });
  });
});
