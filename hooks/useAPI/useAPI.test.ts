import { mockUrls } from "../../mocks/mockUrls";
import RegisterData from "../../types/RegisterData";
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

  describe("when it's instanciated and everything bad", () => {
    test("Then it should call the onError callback with 'email'", async () => {
      const originalEnv = { ...process.env };
      process.env.NEXT_PUBLIC_API_URL = mockUrls.failEmail;

      const { registerUser } = useAPI();

      const expectedErrorMsg = "email";

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

      expect(onError).toHaveBeenCalledWith(expectedErrorMsg);
      expect(onSuccess).not.toHaveBeenCalled();

      process.env = originalEnv;
    });
  });
});
