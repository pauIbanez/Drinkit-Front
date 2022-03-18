import { Dispatch } from "redux";
import { getLoadUserAction } from "../../actions/user/userActionCreators";

export const getLoadUserThunk =
  (token: string) => async (dispatch: Dispatch) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}accounts/my-account`,
      {
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
    dispatch(getLoadUserAction(body));
  };
