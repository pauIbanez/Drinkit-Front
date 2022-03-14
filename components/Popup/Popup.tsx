import styled from "styled-components";
import { AnyButton, TextIconButton } from "../../types/Buttons";

export interface Position {
  x: number;
  y: number;
}
interface PopupContainerProps extends Position {
  show: boolean;
}
export interface PopupProps {
  buttons: AnyButton[];
  position: Position;
  show?: boolean;
}

const PopupContainer = styled.div`
  ${(props: PopupContainerProps): string =>
    props.show ? "display: flex;" : "display: none;"}
  position: absolute;
  z-index: 12;
  ${(props: PopupContainerProps) =>
    "top:" + props.y + "px;" + "left:" + props.x + "px;"}
  background-color: white;
`;

const Popup = ({ buttons, position, show }: PopupProps): JSX.Element => {
  return (
    <PopupContainer x={position.x} y={position.y} show={show}>
      asdasdasdasda
    </PopupContainer>
  );
};

export default Popup;
