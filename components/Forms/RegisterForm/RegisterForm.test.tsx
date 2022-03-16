import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockUrls } from "../../../mocks/mockUrls";
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

  describe("When it's instanciated and the user completes the form with everything bad with error 'email' ", () => {
    test("Then it should display the error message 'This email is already registered'", async () => {
      const originalEnv = { ...process.env };
      process.env.NEXT_PUBLIC_API_URL = mockUrls.failEmail;

      const labels = {
        name: "Name",
        lname: "Last name",
        email: "Email",
        username: "Username",
        password: "Password",
      };

      const expectedError = "This email is already registered";

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
      userEvent.type(foundEmail, "someimail@gimail.com");
      userEvent.type(foundUsername, "usernaim");
      userEvent.type(foundPassword, "passguord");
      userEvent.click(foundButton);

      const foundError = await screen.findByText(expectedError);

      expect(foundError).toBeInTheDocument();
      process.env = originalEnv;
    });
  });

  describe("When it's instanciated and the user completes the form with everything bad with error 'username' ", () => {
    test("Then it should display the error message 'This username is already in use'", async () => {
      const originalEnv = { ...process.env };
      process.env.NEXT_PUBLIC_API_URL = mockUrls.failUsername;

      const labels = {
        name: "Name",
        lname: "Last name",
        email: "Email",
        username: "Username",
        password: "Password",
      };

      const expectedError = "This username is already in use";

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
      userEvent.type(foundEmail, "someimail@gimail.com");
      userEvent.type(foundUsername, "usernaim");
      userEvent.type(foundPassword, "passguord");
      userEvent.click(foundButton);

      const foundError = await screen.findByText(expectedError);

      expect(foundError).toBeInTheDocument();
      process.env = originalEnv;
    });
  });

  describe("When it's instanciated and the user completes the form with everything bad with error 'The password must be at lease 8 characters long' ", () => {
    test("Then it should display the error message 'The password must be at lease 8 characters long'", async () => {
      const originalEnv = { ...process.env };
      process.env.NEXT_PUBLIC_API_URL = mockUrls.failPassword;

      const labels = {
        name: "Name",
        lname: "Last name",
        email: "Email",
        username: "Username",
        password: "Password",
      };

      const expectedError = "The password must be at lease 8 characters long";

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
      userEvent.type(foundEmail, "someimail@gimail.com");
      userEvent.type(foundUsername, "usernaim");
      userEvent.type(foundPassword, "passguord");
      userEvent.click(foundButton);

      const foundError = await screen.findByText(expectedError);

      expect(foundError).toBeInTheDocument();
      process.env = originalEnv;
    });
  });
});
