import { localUser } from "../../../SharedTestObjects";
import { LoadUserAction } from "../../actions/user/types/UserActions";
import userActionTypes from "../../actions/user/userActionTypes.ts";
import { getLoadUserThunk } from "./userThunks";

describe("Given loadUserThunk", () => {
  describe("When it's instanciated passing a token and everything goes ok", () => {
    test("Then it should call dispatch with the recieved user", async () => {
      const token = "token";
      const dispatch = jest.fn();

      const expectedAction: LoadUserAction = {
        type: userActionTypes.loadUser,
        user: localUser,
      };

      const loadUserThunk = getLoadUserThunk(token);
      await loadUserThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
