import { BaseSyntheticEvent, useState } from "react";
import { StyledForm } from "../../../styles/global";
import InputField from "../InputField/InputField";

const RegisterForm = () => {
  const blankForm = {
    name: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankForm);

  const updateField = (event: BaseSyntheticEvent): void => {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };

    setFormData(newFormData);
  };

  return (
    <StyledForm>
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
    </StyledForm>
  );
};

export default RegisterForm;
