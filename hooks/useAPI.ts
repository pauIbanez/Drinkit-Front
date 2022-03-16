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
  return { registerUser };
};

export default useAPI;
