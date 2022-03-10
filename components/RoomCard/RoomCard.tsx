import styled from "styled-components";
import { lightWhite, mainTeal } from "../../styles/colors";
import { globalRadius } from "../../styles/variables";
import { APIRoom } from "../../types/Room";

interface Props {
  room: APIRoom;
}

const RoomCardHolder = styled.li`
  background-color: ${mainTeal};
  border-radius: ${globalRadius};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
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

const RoomCard = ({ room }: Props) => {
  return (
    <RoomCardHolder>
      <GameTitle>{room.game}</GameTitle>
      <Creator>{room.leader.profile.username}</Creator>
    </RoomCardHolder>
  );
};

export default RoomCard;
