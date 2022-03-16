import React, { BaseSyntheticEvent, useState } from "react";
import useAPI from "../../../hooks/useAPI";
import { mainTeal } from "../../../styles/colors";
import { StyledForm } from "../../../styles/global";
import NormalButton from "../../Buttons/NormalButton/NormalButton";
import InputField from "../InputField/InputField";

const RegisterForm = () => {
  const blankForm = {
    name: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const { registerUser } = useAPI();

  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(blankForm);

  const onError = (error) => {
    setLoading(false);
  };
  const onSuccess = () => {};

  const onSubmit = () => {
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
    <StyledForm onSubmit={onSubmit}>
      <InputField
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={updateField}
      />
      <InputField
        label="Last name"
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={updateField}
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={updateField}
      />
      <InputField
        label="Username"
        name="username"
        type="text"
        value={formData.username}
        onChange={updateField}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={updateField}
      />
      <NormalButton
        color={mainTeal}
        isSubmit
        size={{ height: 30, width: 290 }}
        text="Register"
      />
    </StyledForm>
  );
};

export default RegisterForm;
