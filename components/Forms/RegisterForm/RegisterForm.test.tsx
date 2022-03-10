import { render, screen } from "@testing-library/react";
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

      render(<RegisterForm />);

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

      render(<RegisterForm />);

      const foundName: HTMLInputElement = screen.getByLabelText(labels.name);
      const foundLName: HTMLInputElement = screen.getByLabelText(labels.lname);

      userEvent.type(foundName, "name");
      userEvent.type(foundLName, "last name");

      expect(foundName.value).toBe("name");
      expect(foundLName.value).toBe("last name");
    });
  });
});
