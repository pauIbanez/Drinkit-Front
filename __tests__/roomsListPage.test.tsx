import { screen } from "@testing-library/react";
import { renderInBocata } from "../jest.setup";
import RoomList, { getServerSideProps } from "../pages/rooms";
import { APIRooms } from "../SharedTestObjects";
import { APIRoom } from "../types/Room";
import { mockUrls } from "../mocks/mockUrls";

const mockPush = jest.fn();
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

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
      process.env.NEXT_PUBLIC_API_URL = mockUrls.failUrl;
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

      renderInBocata(<RoomList rooms={APIRooms} />);

      const foundLink = screen.getByRole("link", { name: expectedLink });

      expect(foundLink).toBeInTheDocument();
    });
  });
});
