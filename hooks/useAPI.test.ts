import RegisterData from "../types/RegisterData";
import useAPI from "./useAPI";

describe("Given useAPI registerUser", () => {
  describe("when it's instanciated and everything ok", () => {
    test("Then it should call the onSuccess callback", async () => {
      const { registerUser } = useAPI();

      const userData: RegisterData = {
        name: "sumname",
        lastName: "sumlname",
        email: "sumemail",
        username: "sumusername",
        password: "sumpass",
      };
      const onError = jest.fn();
      const onSuccess = jest.fn();

      await registerUser(userData, onError, onSuccess);

      expect(onError).not.toHaveBeenCalled();
      expect(onSuccess).toHaveBeenCalled();
    });
  });
});
