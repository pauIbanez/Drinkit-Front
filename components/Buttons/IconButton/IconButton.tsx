import Image from "next/image";
import styled from "styled-components";

interface Props {
  alt: string;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconButton = ({ alt, icon, color, size, onClick }: Props) => {
  return (
    <StyledButton col={color} size={size} onClick={onClick}>
      <Image
        src={icon}
        alt={alt}
        width={size.width - 5}
        height={size.height - 5}
      />
    </StyledButton>
  );
};

export default IconButton;
