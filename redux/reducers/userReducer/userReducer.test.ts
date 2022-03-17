import defaultUser from "./defaultUser";
import userReducer from "./userReducer";

describe("Given userReducer", () => {
  describe("When its instanciated without nothing", () => {
    test("Then it should return the default user", () => {
      const newUser = userReducer();

      expect(newUser).toEqual(defaultUser);
    });
  });
});
