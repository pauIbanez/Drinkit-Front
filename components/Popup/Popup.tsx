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

const PopupMain = styled.div`
  background-color: white;
  height: 95px;
  width: 115px;
  position: absolute;
  top: -50px;
  left: 10px;
  border-radius: 5px;
`;

const PopupArrowsCont = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -10px;
  left: 0;

  width: 0;
  height: 0;
  border-top: 11px solid transparent;
  border-bottom: 11px solid transparent;

  border-right: 11px solid white;
`;

const Popup = ({ buttons, position, show }: PopupProps): JSX.Element => {
  return (
    <PopupContainer x={position.x} y={position.y} show={show}>
      <PopupArrowsCont></PopupArrowsCont>
      <PopupMain>a</PopupMain>
    </PopupContainer>
  );
};

export default Popup;
