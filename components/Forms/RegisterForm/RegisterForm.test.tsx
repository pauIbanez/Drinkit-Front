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

  // describe("When it's instanciated and the user submits the form", () => {
  //   test("Then it should call dispatch", () => {
  //     const labels = {
  //       name: "Name",
  //       lname: "Last name",
  //       email: "Email",
  //       username: "Username",
  //       password: "Password",
  //     };
  //     const expectedButton = "Register";

  //     render(<RegisterForm />);

  //     const foundName = screen.getByLabelText(labels.name);
  //     const foundLName = screen.getByLabelText(labels.lname);
  //     const foundEmail = screen.getByLabelText(labels.email);
  //     const foundUsername = screen.getByLabelText(labels.username);
  //     const foundPassword = screen.getByLabelText(labels.password);
  //     const foundButton = screen.getByRole("button", { name: expectedButton });

  //     userEvent.type(foundName, "a");
  //     userEvent.type(foundLName, "a");
  //     userEvent.type(foundEmail, "a");
  //     userEvent.type(foundUsername, "a");
  //     userEvent.type(foundPassword, "a");
  //     userEvent.click(foundButton);
  //   });
  // });
});
