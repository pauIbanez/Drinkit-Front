import { BaseSyntheticEvent, useState } from "react";
import styled from "styled-components";
import { lightBlack } from "../../../styles/colors";
import { globalRadius } from "../../../styles/variables";

interface Props {
  type: string;
  name: string;
  value: string;
  label: string;
  onChange(event: BaseSyntheticEvent): void;
}

interface LabelProps {
  focused: boolean;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
`;

const DynamicLabel = styled.label`
  color: white;
  margin: 0;
  z-index: 2;
  margin-left: 10px;
  ${({ focused }: LabelProps): string =>
    focused
      ? "position: absolute; animation: labelOut ease-in 0.1s forwards;"
      : "animation: labelIn ease-out 0.1s forwards;"}
`;

const InputCheto = styled.input`
  position: absolute;
  inset: 0;
  padding: 10px;
  border-radius: ${globalRadius};
  outline: none;
  border: none;
  background-color: ${lightBlack};
  color: white;
  font-family: inherit;
`;

const InputField = ({ type, name, value, onChange, label }: Props) => {
  const [focused, setFocused] = useState(false);

  const moveLabel = (): void => {
    setFocused(true);
  };
  const returnLabel = (): void => {
    if (value === "") {
      setFocused(false);
    }
  };

  return (
    <Wrapper>
      <InputCheto
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onFocus={moveLabel}
        onBlur={returnLabel}
        autoComplete="off"
      />
      <DynamicLabel htmlFor={name} focused={focused}>
        {label}
      </DynamicLabel>
    </Wrapper>
  );
};

export default InputField;
