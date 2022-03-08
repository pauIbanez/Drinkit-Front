import styled from "styled-components";
import RoomCard from "../../components/RoomCard/RoomCard";
import { PageHolder } from "../../styles/global";

const tempRooms = [
  {
    id: "wqeqwe",
    creator: "username",
    game: "Piramide",
  },
  {
    id: "sada",
    creator: "username",
    game: "Remar",
  },
  {
    id: "asdsadasdsa",
    creator: "username",
    game: "Piramide",
  },
];

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RoomList = (): JSX.Element => {
  const roomsToRender = tempRooms.map((room) => (
    <RoomCard key={room.id} room={room}></RoomCard>
  ));

  return (
    <PageHolder>
      <List>{roomsToRender}</List>
    </PageHolder>
  );
};

export default RoomList;
