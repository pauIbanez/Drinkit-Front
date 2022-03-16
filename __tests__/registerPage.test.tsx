import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When it's instanciated and the user completes the from sucessfully", () => {
    test("Then it should render a heading with the text 'Verification' and the provided email", async () => {
      const expectedHeading = "Verification";
      const email = "someimail@gimail.com";
      const expectedText =
        "We've sent you a verification email to someimail@gimail.com please check your inbox and start geting fucked up as soon as posible.";

      render(<RegisterPage />);

      const labels = {
        name: "Name",
        lname: "Last name",
        email: "Email",
        username: "Username",
        password: "Password",
      };

      const foundName = screen.getByLabelText(labels.name);
      const foundLName = screen.getByLabelText(labels.lname);
      const foundEmail = screen.getByLabelText(labels.email);
      const foundUsername = screen.getByLabelText(labels.username);
      const foundPassword = screen.getByLabelText(labels.password);
      const foundButton = screen.getByRole("button", { name: "Register" });

      userEvent.type(foundName, "naim");
      userEvent.type(foundLName, "lat name");
      userEvent.type(foundEmail, email);
      userEvent.type(foundUsername, "usernaim");
      userEvent.type(foundPassword, "passguord");
      userEvent.click(foundButton);

      const foundHeading = await screen.findByRole("heading", {
        name: expectedHeading,
      });
      const foundTextEmail = screen.getByText(expectedText);

      expect(foundHeading).toBeInTheDocument();
      expect(foundTextEmail).toBeInTheDocument();
    });
  });
});
