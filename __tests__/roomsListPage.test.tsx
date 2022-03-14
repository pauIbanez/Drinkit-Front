import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RoomList, { getServerSideProps } from "../pages/rooms";
import { APIRooms } from "../SharedTestObjects";
import { APIRoom } from "../types/Room";

describe("Given getServerSideProps", () => {
  describe("When it's instanciated and the response is ok", () => {
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

  describe("When it's instanciated and the response is an error", () => {
    test("Then it should return an object with a property props that contains an empty array", async () => {
      const original = { ...process.env };
      process.env.NEXT_PUBLIC_API_URL = "http://fail-request/";
      interface Result {
        props: {
          rooms: APIRoom[];
        };
      }
      const expectedResult: Result = {
        props: {
          rooms: [],
        },
      };

      const result = await getServerSideProps();

      expect(result).toEqual(expectedResult);

      process.env = original;
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

  describe("When it's instanciated passing a room and it's clicked", () => {
    test("Then it should display a button with the text 'Join'", () => {
      const expectedButton = "Join";

      render(<RoomList rooms={APIRooms} />);

      const foundRooms = screen.getAllByRole("listitem");
      userEvent.click(foundRooms[0]);

      const foundButton = screen.getByRole("button", { name: expectedButton });
      expect(foundButton).toBeInTheDocument();
    });
  });
});
