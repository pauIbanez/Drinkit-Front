import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderInBocata } from "../jest.setup";
import RoomList, { getServerSideProps } from "../pages/rooms";
import { APIRooms } from "../SharedTestObjects";
import { APIRoom } from "../types/Room";
import * as redux from "react-redux";
import { mockUrls } from "../mocks/mockUrls";

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

  describe("When it's instanciated passing a room and it's clicked and then the button is clicked", () => {
    test("Then it should display a button with the text 'Delete' and then call dispatch", () => {
      const expectedButton = "Delete";
      const mockDispatch = jest.fn();
      jest.spyOn(redux, "useDispatch").mockReturnValue(mockDispatch);

      renderInBocata(<RoomList rooms={APIRooms} />);

      const foundRooms = screen.getAllByRole("listitem");
      userEvent.click(foundRooms[0]);

      const foundButton = screen.getByRole("button", { name: expectedButton });

      expect(foundButton).toBeInTheDocument();

      userEvent.click(foundButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
