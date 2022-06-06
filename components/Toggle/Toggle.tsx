import styled from "styled-components";
import { mainTeal } from "../../styles/colors";

interface ToggleProps {
  toggled: boolean;
  onClick(): void;
}

interface ToggleStyleProps {
  toggled: boolean;
}

const toggleHeight = 20;
const toggleWidth = 50;

const ToggleBackground = styled.div`
  position: relative;
  height: ${toggleHeight}px;
  width: ${toggleWidth}px;

  border-radius: ${toggleHeight / 2}px;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ToggleHandle = styled.div`
  background-color: white;
  width: ${toggleHeight}px;
  height: ${toggleHeight}px;
  position: absolute;
  border-radius: ${toggleHeight / 2}px;

  z-index: 2;

  ${(props: ToggleStyleProps) =>
    props.toggled && `transform: translateX(${toggleWidth - toggleHeight}px);`}

  transition: all 0.3s ease-in-out;
`;

const ToggleFilledBackground = styled.div`
  position: absolute;
  inset: 0;
  width: 10px;
  ${(props: ToggleStyleProps) =>
    props.toggled && `background-color: ${mainTeal}; width: ${toggleWidth}px;`}

  border-radius: ${toggleHeight / 2}px;

  z-index: 1;

  transition: all 0.3s ease-in-out;
`;

const Toggle = ({ toggled, onClick }: ToggleProps) => {
  return (
    <ToggleBackground onClick={onClick}>
      <ToggleFilledBackground toggled={toggled} />
      <ToggleHandle toggled={toggled} />
    </ToggleBackground>
  );
};

export default Toggle;
