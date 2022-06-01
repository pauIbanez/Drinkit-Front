import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RoomIdForm from "./RoomIdForm";

const mockPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

describe("Given RoomIdForm", () => {
  describe("When it's instanciated", () => {
    test("Then it should render 1 input field and a disabled button", () => {
      const label = "Room Id";
      const expectedButton = "Join";

      render(<RoomIdForm />);

      const foundRoomInput = screen.getByLabelText(label);
      const foundButton = screen.getByRole("button", { name: expectedButton });

      expect(foundRoomInput).toBeInTheDocument();
      expect(foundButton).toBeInTheDocument();
      expect(foundButton).toBeDisabled();
    });
  });

  describe("When the user types a partial room code", () => {
    test("Then the button should remain disabled", () => {
      const label = "Room Id";
      const expectedButton = "Join";
      const userTypedCode = "AS4";

      render(<RoomIdForm />);

      const foundRoomInput = screen.getByLabelText(label);
      const foundButton = screen.getByRole("button", { name: expectedButton });

      expect(foundButton).toBeDisabled();

      userEvent.type(foundRoomInput, userTypedCode);

      expect(foundButton).toBeDisabled();
    });
  });

  describe("When the user types a valid room code", () => {
    test("Then the button should be enabled", () => {
      const label = "Room Id";
      const expectedButton = "Join";
      const userTypedCode = "AS44";

      render(<RoomIdForm />);

      const foundRoomInput = screen.getByLabelText(label);
      const foundButton = screen.getByRole("button", { name: expectedButton });

      expect(foundButton).toBeDisabled();

      userEvent.type(foundRoomInput, userTypedCode);

      expect(foundButton).not.toBeDisabled();
    });
  });

  describe("When the user types a valid room code and then clicks on join", () => {
    test("Then it should call Router.push with the typed roomId as param", () => {
      const label = "Room Id";
      const expectedButton = "Join";
      const userTypedCode = "AS44";
      const expectedPath = `/rooms/${userTypedCode}`;

      render(<RoomIdForm />);

      const foundRoomInput = screen.getByLabelText(label);
      const foundButton = screen.getByRole("button", {
        name: expectedButton,
      });

      expect(foundButton).toBeDisabled();

      userEvent.type(foundRoomInput, userTypedCode);
      userEvent.click(foundButton);

      expect(mockPush).toHaveBeenCalledWith(expectedPath);
    });
  });
});
