import { useRouter } from "next/router";
import React, { BaseSyntheticEvent, useState } from "react";
import styled from "styled-components";
import useAPI from "../../../hooks/useAPI";
import { mainTeal, yellow } from "../../../styles/colors";
import { StyledForm } from "../../../styles/global";
import NormalButton from "../../Buttons/NormalButton/NormalButton";
import InputField from "../InputField/InputField";

interface Props {
  onFinished(email: string): void;
}

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

const RegisterForm = ({ onFinished }: Props) => {
  const blankForm = {
    name: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const { registerUser } = useAPI();

  const [errors, setErrors] = useState([<></>]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(blankForm);

  const onError = (error: string) => {
    setLoading(false);
    const formattedError = error.replace('"', "");
    const errorStrings = formattedError.split(",");
    const errorsToRender = errorStrings.map(
      (error: string): JSX.Element => <p key={error}>{error}</p>
    );
    setErrors(errorsToRender);
  };
  const onSuccess = () => {
    setLoading(false);
    onFinished(formData.email);
  };

  const onSubmit = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    setLoading(true);
    registerUser(formData, onError, onSuccess);
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
          label="Name"
          name="name"
          type="text"
          value={formData.name}
          onChange={updateField}
          required
        />
        <InputField
          label="Last name"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={updateField}
          required
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={updateField}
          required
        />
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
            text="Register"
          />
        )}
      </StyledForm>
      <ErrorMessages>{errors}</ErrorMessages>
    </>
  );
};

export default RegisterForm;
