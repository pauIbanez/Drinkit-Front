import Image from "next/image";
import styled from "styled-components";

interface Props {
  text: string;
  color: string;
  size: {
    width: number;
    height: number;
  };
  icon: string;
  onClick?(): void;
}

interface ButtonProps {
  col: string;
  size: {
    width: number;
    height: number;
  };
}

const StyledButton = styled.button`
  ${({ col, size }: ButtonProps) =>
    `background-color: ${col}; height:${size.height}px; width: ${size.width}px;`}
  border: 1px solid white;
  border-radius: 5px;
  font-family: inherit;
  color: white;
  font-size: 18px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextIconButton = ({
  text,
  color,
  icon,
  size,
  onClick = () => {},
}: Props) => {
  return (
    <StyledButton col={color} size={size} onClick={onClick}>
      <Image src={icon} alt="Two glasses" width={24} height={24} />
      {text}
    </StyledButton>
  );
};

export default TextIconButton;
