import { BaseSyntheticEvent, SyntheticEvent, useRef } from "react";
import styled from "styled-components";
import { lightWhite, mainTeal } from "../../styles/colors";
import { globalRadius } from "../../styles/variables";
import { APIRoom } from "../../types/Room";
import { Position } from "../Popup/Popup";

interface Props {
  room: APIRoom;
  onClick(event: BaseSyntheticEvent, position: Position): void;
}

const RoomCardHolder = styled.li`
  background-color: ${mainTeal};
  border-radius: ${globalRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: 50px;
`;

const GameTitle = styled.h2`
  font-weight: 800;
  font-size: 18px;
  margin: 0;
  color: white;
`;

const Creator = styled.p`
  color: ${lightWhite};
  margin: 0;
`;

const RoomCard = ({ room, onClick }: Props) => {
  const reference = useRef();

  const onRoomClick = (event: SyntheticEvent) => {
    const position = {
      x: reference.current.getBoundingClientRect().x,
      y: reference.current.getBoundingClientRect().y,
    };
    onClick(event, position);
  };
  return (
    <RoomCardHolder onClick={onRoomClick} ref={reference}>
      <GameTitle>{room.game.name}</GameTitle>
      <Creator>{room.leader.profile.username}</Creator>
    </RoomCardHolder>
  );
};

export default RoomCard;
