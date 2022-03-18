import { Dispatch } from "redux";
import {
  getAddRoomAction,
  getDeleteRoomAction,
} from "../../actions/rooms/roomActionCreators";
import NewRoom from "./types/NewRoom";

export const getAddRoomThunk =
  (newRoom: NewRoom, onLoad: Function, token: string) =>
  async (dispatch: Dispatch) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}rooms/create`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newRoom),
      }
    );

    const body = await response.json();

    if (body.error) {
      //handle errors
      return;
    }

    dispatch(getAddRoomAction(body));
    onLoad();
  };

export const getDeleteRoomThunk =
  (roomId: string, token: string) => async (dispatch: Dispatch) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}rooms/delete`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    const body = await response.json();

    if (body.error) {
      //handle errors
      return;
    }
    dispatch(getDeleteRoomAction(roomId));
  };
