import Player from "../../../types/Player";
import { LoadUserAction } from "../../actions/user/types/UserActions";
import userActionTypes from "../../actions/user/userActionTypes.ts";
import defaultUser from "./defaultUser";
import userReducer from "./userReducer";

describe("Given userReducer", () => {
  describe("When its instanciated without nothing", () => {
    test("Then it should return the default user", () => {
      const newUser = userReducer();

      expect(newUser).toEqual(defaultUser);
    });
  });

  describe("When its instanciated with default user and a loadUser action with a new user", () => {
    test("Then it should return the new user", () => {
      const user: Player = {
        id: defaultUser.id,
        profile: {
          friends: ["frien", "frien"],
          incomingRequests: [],
          stats: {
            games: 35,
            sips: 2000,
          },
          username: "elPapi",
        },
        info: {
          avatar: {
            staticUrl: "https://someurl.com/images/yes/muchreral.png",
          },
          email: "someemail@gmail.com",
          lastName: "supa",
          name: "mr.",
        },
      };

      const action: LoadUserAction = {
        type: userActionTypes.loadUser,
        user,
      };

      const newUser = userReducer(defaultUser, action);

      expect(newUser).toEqual(user);
    });
  });
});
