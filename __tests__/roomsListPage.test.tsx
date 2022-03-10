import { render, screen } from "@testing-library/react";
import RoomList, { getServerSideProps } from "../pages/rooms";
import { APIRooms } from "../SharedTestObjects";

describe("Given getServerSideProps", () => {
  describe("When it's instanciated", () => {
    test("Then it should return an object with a property props that contains the recieved rooms", async () => {
      const expectedResult = {
        props: {
          rooms: APIRooms,
        },
      };

      const result = await getServerSideProps();

      expect(result).toEqual(expectedResult);
    });
  });
});

describe("Given RoomsList page", () => {
  describe("When it's instanciated", () => {
    test("Then it should render a Link with the text 'Back'", () => {
      const expectedLink = "Back";

      render(<RoomList rooms={APIRooms} />);

      const foundLink = screen.getByRole("link", { name: expectedLink });

      expect(foundLink).toBeInTheDocument();
    });
  });
});
