import RoomCard from "./RoomCard";
import { render, screen } from "@testing-library/react";
import { APIRooms } from "../../SharedTestObjects";

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
});
