import styled from "styled-components";
import { PageHolder } from "../../styles/global";

const tempRooms = [
  {
    id: "wqeqwe",
    creator: "username",
    game: "piramide",
  },
  {
    id: "wqeqwe",
    creator: "username",
    game: "remar",
  },
  {
    id: "wqeqwe",
    creator: "username",
    game: "piramide",
  },
];

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RoomList = (): JSX.Element => {
  return (
    <PageHolder>
      <List></List>
    </PageHolder>
  );
};

export default RoomList;
