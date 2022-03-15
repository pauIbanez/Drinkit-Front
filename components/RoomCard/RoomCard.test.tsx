import RoomCard from "./RoomCard";
import { render, screen } from "@testing-library/react";
import { APIRooms } from "../../SharedTestObjects";
import userEvent from "@testing-library/user-event";

describe("Given RoomCard", () => {
  describe("When it's passed a room", () => {
    test("Then it should render the car's game and creator", () => {
      const expectedGame = "Piramide";
      const expectedCreator = APIRooms[0].leader.profile.username;

      render(<RoomCard room={APIRooms[0]} />);

      const foundGame = screen.getByRole("heading", { name: expectedGame });
      const foundCreator = screen.getByText(expectedCreator);

      expect(foundGame).toBeInTheDocument();
      expect(foundCreator).toBeInTheDocument();
    });
  });

  describe("When it's passed a room and an onclick function and a user clicks on it", () => {
    test("Then it should call the passed onclick function with an event and a position", () => {
      const expectedPosition = {
        x: expect.any(Number),
        y: expect.any(Number),
      };

      const onClick = jest.fn();

      render(<RoomCard room={APIRooms[0]} onClick={onClick} />);

      const foundRoom = screen.getByRole("listitem");
      userEvent.click(foundRoom);

      expect(onClick).toHaveBeenCalledWith(
        expect.any(Object),
        expectedPosition
      );
    });
  });
});
