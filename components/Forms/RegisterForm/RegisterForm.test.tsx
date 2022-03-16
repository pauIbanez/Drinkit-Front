import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

describe("Given Registerform", () => {
  describe("When it's instanciated", () => {
    test("Then it should render 5 input fields", () => {
      const labels = {
        name: "Name",
        lname: "Last name",
        email: "Email",
        username: "Username",
        password: "Password",
      };

      const onFinished = jest.fn();

      render(<RegisterForm onFinished={onFinished} />);

      const foundName = screen.getByLabelText(labels.name);
      const foundLName = screen.getByLabelText(labels.lname);
      const foundEmail = screen.getByLabelText(labels.email);
      const foundUsername = screen.getByLabelText(labels.username);
      const foundPassword = screen.getByLabelText(labels.password);

      expect(foundName).toBeInTheDocument();
      expect(foundLName).toBeInTheDocument();
      expect(foundEmail).toBeInTheDocument();
      expect(foundUsername).toBeInTheDocument();
      expect(foundPassword).toBeInTheDocument();
    });
  });

  describe("When it's instanciated and the user uses the form", () => {
    test("Then it should update the values", () => {
      const labels = {
        name: "Name",
        lname: "Last name",
        email: "Email",
        username: "Username",
        password: "Password",
      };
      const onFinished = jest.fn();

      render(<RegisterForm onFinished={onFinished} />);

      const foundName: HTMLInputElement = screen.getByLabelText(labels.name);
      const foundLName: HTMLInputElement = screen.getByLabelText(labels.lname);

      userEvent.type(foundName, "name");
      userEvent.type(foundLName, "last name");

      expect(foundName.value).toBe("name");
      expect(foundLName.value).toBe("last name");
    });
  });

  describe("When it's instanciated and the user completes the form with everything ok", () => {
    test("Then it should called the passed onFinished function with the email", async () => {
      const labels = {
        name: "Name",
        lname: "Last name",
        email: "Email",
        username: "Username",
        password: "Password",
      };

      const email = "someimail@gimail.com";

      const onFinished = jest.fn();

      render(<RegisterForm onFinished={onFinished} />);

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

      await waitFor(() => expect(onFinished).toHaveBeenCalledWith(email));

      expect(onFinished).toHaveBeenCalledWith(email);
    });
  });
});
