import RoomCard from "./RoomCard";
import { render, screen } from "@testing-library/react";

describe("Given RoomCard", () => {
  describe("When it's passed a room", () => {
    test("Then it should render the car's game and creator", () => {});
    const room = {
      id: "qwseqweqw",
      game: "Piramide",
      creator: "creator username",
    };

    const expectedGame = "Piramide";
    const expectedCreator = "creator username";

    render(<RoomCard room={room} />);

    const foundGame = screen.getByRole("heading", { name: expectedGame });
    const foundCreator = screen.getByText(expectedCreator);

    expect(foundGame).toBeInTheDocument();
    expect(foundCreator).toBeInTheDocument();
  });
});
