import { useRouter } from "next/router";
import React, { BaseSyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useAPI from "../../../hooks/useAPI/useAPI";
import { getLoadUserThunk } from "../../../redux/thunks/userThunks/userThunks";
import { mainTeal, yellow } from "../../../styles/colors";
import { StyledForm } from "../../../styles/global";
import NormalButton from "../../Buttons/NormalButton/NormalButton";
import InputField from "../InputField/InputField";

const ErrorMessages = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  margin: 20px 0;
  gap: 5px;
  color: ${yellow};
  p {
    margin: 0;
  }
`;

const LoginForm = () => {
  const blankForm = {
    username: "",
    password: "",
  };

  const router = useRouter();
  const { loginUser } = useAPI();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(blankForm);

  const onError = (errorString: string) => {
    setLoading(false);

    const errorStrings = errorString.split(",");
    const errorsToRender = errorStrings.map(
      (error: string): JSX.Element => <p key={error}>{error}</p>
    );
    setErrors(errorsToRender);
  };
  const onSuccess = (token: string) => {
    localStorage.setItem("token", token);
    dispatch(getLoadUserThunk(token));
    router.push("/");
    setLoading(false);
  };

  const onSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    loginUser(formData, onError, onSuccess);
  };

  const updateField = (event: BaseSyntheticEvent): void => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(newFormData);
  };

  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <InputField
          label="Username"
          name="username"
          type="text"
          value={formData.username}
          onChange={updateField}
          required
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={updateField}
          required
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <NormalButton
            color={mainTeal}
            isSubmit
            size={{ height: 30, width: 290 }}
            text="Log in"
          />
        )}
      </StyledForm>
      <ErrorMessages>{errors}</ErrorMessages>
    </>
  );
};

export default LoginForm;
