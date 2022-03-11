import { Dispatch } from "redux";
import { getAddRoomAction } from "../../actions/rooms/roomActionCreators";
import NewRoom from "./types/NewRoom";

export const getAddRoomThunk =
  (newRoom: NewRoom, onLoad: Function) => async (dispatch: Dispatch) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}rooms/create`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
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
