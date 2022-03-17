import defaultUser from "../../reducers/userReducer/defaultUser";
import { LoadUserAction, UpdateUserAction } from "./types/UserActions";
import { getLoadUserAction, getUpdateUserAction } from "./userActionCreators";
import userActionTypes from "./userActionTypes.ts";

describe("Givcen getLoadUserAction", () => {
  describe("when it's instanciated passing a user", () => {
    test("Then it should return an action with type as loadUser and the passed user", () => {
      const expectedAction: LoadUserAction = {
        type: userActionTypes.loadUser,
        user: defaultUser,
      };

      const recievedAction = getLoadUserAction(defaultUser);

      expect(recievedAction).toEqual(expectedAction);
    });
  });
});
describe("Givcen getUpdateUserAction", () => {
  describe("when it's instanciated passing a user change", () => {
    test("Then it should return an action with type as updateUser and the passed change", () => {
      const userChange = {
        profile: {
          friends: ["one frien"],
        },
      };

      const expectedAction: UpdateUserAction = {
        type: userActionTypes.updateUser,
        change: userChange,
      };

      const recievedAction = getUpdateUserAction(userChange);

      expect(recievedAction).toEqual(expectedAction);
    });
  });
});
