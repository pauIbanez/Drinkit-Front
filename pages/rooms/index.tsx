import { Key } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import RoomCard from "../../components/RoomCard/RoomCard";
import { PageHolder } from "../../styles/global";
import Room from "../../types/Room";

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
  const roomsToRender = rooms.map((room) => (
    <RoomCard key={room.id as Key} room={room}></RoomCard>
  ));

  return (
    <Layout
      header={{ title: "JOIN A ROOM", subtitle: "ROOMS LIST" }}
      pageTitle={"Room List"}
    >
      <List>{roomsToRender}</List>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}rooms`);
  const body = await response.json();

  if (body.error) {
    //handle api error
    return {
      props: {
        rooms: [],
      },
    };
  }

  return {
    props: {
      rooms: body.rooms,
    },
  };
};

export default RoomList;
