import Player, { PlayerChange } from "../../../types/Player";
import {
  LoadUserAction,
  UpdateUserAction,
} from "../../actions/user/types/UserActions";
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
          avatar: {
            staticUrl: "https://someurl.com/images/yes/muchreral.png",
            backup: "https://someurl.com/images/yes/muchreral.png",
          },
        },
        info: {
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

  describe("When its instanciated with a user and a updateUser action with some changes", () => {
    test("Then it should return the changed user", () => {
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
          avatar: {
            staticUrl: "https://someurl.com/images/yes/muchreral.png",
            backup: "https://backupurl.cum/save.png",
          },
        },
        info: {
          email: "someemail@gmail.com",
          lastName: "supa",
          name: "mr.",
        },
      };

      const expectedUser: Player = {
        id: defaultUser.id,
        profile: {
          friends: ["frien", "frien"],
          incomingRequests: [],
          stats: {
            games: 36,
            sips: 2050,
          },
          avatar: {
            staticUrl: "https://someurl.com/images/yes/other.png",
            backup: "https://backupurl.cum/save.png",
          },
          username: "elPapi",
        },
        info: {
          email: "someemail@gmail.com",
          lastName: "supa",
          name: "mr.",
        },
      };

      const changes: PlayerChange = {
        profile: {
          stats: {
            games: 36,
            sips: 2050,
          },
          avatar: {
            staticUrl: "https://someurl.com/images/yes/other.png",
          },
        },
      };

      const action: UpdateUserAction = {
        type: userActionTypes.updateUser,
        change: changes,
      };

      const newUser = userReducer(user, action);

      expect(newUser).toEqual(expectedUser);
    });
  });
});
