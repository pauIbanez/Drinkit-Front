import Link from "next/link";
import { Key } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import RoomCard from "../../components/RoomCard/RoomCard";
import { Back, CenteredContainer } from "../../styles/global";
import Header from "../../types/Header";
import { APIRoom, Room } from "../../types/Room";

interface Props {
  rooms: Room[];
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RoomList = ({ rooms }: Props): JSX.Element => {
  const header: Header = {
    title: "JOIN A ROOM",
    subtitle: "ROOMS LIST",
  };
  const roomsToRender = rooms.map((room) => (
    <RoomCard key={room.id as Key} room={room}></RoomCard>
  ));

  return (
    <Layout header={header} pageTitle={"Room List"}>
      <CenteredContainer>
        <List>{roomsToRender}</List>
        <Link href={"/"} passHref>
          <Back>Back</Back>
        </Link>
      </CenteredContainer>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}rooms/list`);
  const body = await response.json();

  if (body.error) {
    //handle api error
    return {
      props: {
        rooms: [],
      },
    };
  }

  const roomsToSend = body.rooms.map(
    (room: APIRoom): Room => ({
      creator: room.leader,
      game: room.game.name,
      id: room.id,
    })
  );

  return {
    props: {
      rooms: roomsToSend,
    },
  };
};

export default RoomList;
