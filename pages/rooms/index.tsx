import Link from "next/link";
import { useRouter } from "next/router";
import { BaseSyntheticEvent, Key, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import RoomIdForm from "../../components/Forms/RoomIdForm/RoomIdForm";
import Layout from "../../components/Layout/Layout";
import Popup, { PopupProps, Position } from "../../components/Popup/Popup";
import RoomCard from "../../components/RoomCard/RoomCard";
import { getLoadRoomsAction } from "../../redux/actions/rooms/roomActionCreators";
import { lightBlue } from "../../styles/colors";
import { Back, CenteredContainer } from "../../styles/global";
import Header from "../../types/Header";
import { APIRoom } from "../../types/Room";
import State from "../../types/State";

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
  margin: 0;
  margin-top: 20px;
  font-size: 25px;
  font-weight: 800;
  color: white;
  align-self: flex-start;
`;
const MyRoomContainer = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const UpperLink = styled(Link)`
  z-index: 3;
`;

const RoomList = ({ rooms }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: State): State => state);

  useEffect(() => {
    dispatch(getLoadRoomsAction(rooms));
  }, [dispatch, rooms]);

  const hidePopup = () => {
    setShowPopup(false);
  };

  const initialPopupProps: PopupProps = {
    position: {
      x: 0,
      y: 0,
    },
    buttons: [],
    hide: hidePopup,
  };

  const router = useRouter();
  const currentRooms = useSelector((state: State) => state.rooms);
  const [showPopup, setShowPopup] = useState(false);
  const [popupProps, setPopupProps] = useState(initialPopupProps);

  const getOnRoomClick =
    (roomId: string) => (event: BaseSyntheticEvent, position: Position) => {
      event.stopPropagation();
      setShowPopup(true);
      setPopupProps({
        ...initialPopupProps,
        position,
        buttons: [
          {
            color: lightBlue,
            onClick: () => {
              router.push(`/rooms/${roomId}`);
            },
            text: "Join",
          },
        ],
      });
    };

  const header: Header = {
    title: "JOIN A ROOM",
    subtitle: "ROOMS LIST",
  };

  let roomsToRender;
  roomsToRender = currentRooms.map((room) => (
    <RoomCard
      key={room.id as Key}
      room={room}
      onClick={getOnRoomClick(room.id)}
    />
  ));

  return (
    <>
      <Popup
        position={popupProps.position}
        buttons={popupProps.buttons}
        show={showPopup}
        hide={hidePopup}
      />
      <Layout header={header} pageTitle={"Room List"}>
        <CenteredContainer>
          <SectionTitle>Join a room</SectionTitle>
          <RoomIdForm />
          <SectionTitle>Rooms List</SectionTitle>
          <List>{roomsToRender}</List>
          <UpperLink href={"/"} passHref>
            <Back>Back</Back>
          </UpperLink>
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
