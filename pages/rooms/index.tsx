import Link from "next/link";
import { BaseSyntheticEvent, Key, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import Popup, { PopupProps, Position } from "../../components/Popup/Popup";
import RoomCard from "../../components/RoomCard/RoomCard";
import { lightBlue, mainRed } from "../../styles/colors";
import { Back, CenteredContainer } from "../../styles/global";
import Header from "../../types/Header";
import { APIRoom } from "../../types/Room";

interface Props {
  rooms: APIRoom[];
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  min-height: 400px;
  margin: 30px 0;
`;

const SectionTitle = styled.h2`
  font-size: 25px;
  font-weight: 800;
  color: white;
  align-self: flex-start;
  margin: 0;
`;
const MyRoomContainer = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const RoomList = ({ rooms }: Props): JSX.Element => {
  const dispatch = useDispatch();

  const initialPopupProps: PopupProps = {
    position: {
      x: 0,
      y: 0,
    },
    buttons: [],
  };

  const [showPopup, setShowPopup] = useState(false);
  const [popupProps, setPopupProps] = useState(initialPopupProps);

  const deleteRoom = () => {
    dispatch();
  };

  const onMyRoomClick = (event: BaseSyntheticEvent, position: Position) => {
    setShowPopup(true);
    setPopupProps({
      position,
      buttons: [
        {
          color: lightBlue,
          onClick: () => {},
          text: "Join",
        },
        {
          color: mainRed,
          onClick: deleteRoom,
          text: "Delete",
        },
      ],
    });
  };

  const myId = "622f00e91e85099995d63b07";
  const myRoom = rooms.find((room: APIRoom) => room.leader.id === myId);
  const myRenderRoom = <RoomCard room={myRoom} onClick={onMyRoomClick} />;

  const header: Header = {
    title: "JOIN A ROOM",
    subtitle: "ROOMS LIST",
  };
  const roomsToRender = rooms.map((room) => (
    <RoomCard key={room.id as Key} room={room} onClick={onMyRoomClick} />
  ));

  return (
    <>
      <Popup
        position={popupProps.position}
        buttons={popupProps.buttons}
        show={showPopup}
      />
      <Layout header={header} pageTitle={"Room List"}>
        <CenteredContainer>
          {myRoom && (
            <>
              <SectionTitle>My Room</SectionTitle>
              <MyRoomContainer>{myRenderRoom}</MyRoomContainer>
            </>
          )}
          <SectionTitle>Rooms List</SectionTitle>
          <List>{roomsToRender}</List>
          <Link href={"/"} passHref>
            <Back>Back</Back>
          </Link>
        </CenteredContainer>
      </Layout>
    </>
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

  return {
    props: {
      rooms: body.rooms,
    },
  };
};

export default RoomList;
