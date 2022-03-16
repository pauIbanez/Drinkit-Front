import { useCallback } from "react";
import RegisterData from "../types/RegisterData";

const useAPI = () => {
  const registerUser = async (registerData: RegisterData) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}accounts/register`,
      {
        method: "POST",
        body: JSON.stringify(registerData),
      }
    );
  };
  return { registerUser };
};
