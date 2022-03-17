import LoginData from "../types/LoginData";
import RegisterData from "../types/RegisterData";

const useAPI = () => {
  const registerUser = async (
    registerData: RegisterData,
    onError: Function,
    onSuccess: Function
  ) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}accounts/register`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(registerData),
      }
    );

    const body = await response.json();

    if (body.error) {
      onError(body.message);
      return;
    }

    onSuccess();
  };

  const loginUser = async (
    loginData: LoginData,
    onError: Function,
    onSuccess: Function
  ) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}accounts/login`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      }
    );

    const body = await response.json();

    if (body.error) {
      onError(body.message);
      return;
    }

    onSuccess();
  };
  return { registerUser, loginUser };
};

export default useAPI;
