import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import TextIconButton from "../../../components/Buttons/TextIconButton/TextIconButton";
import Layout from "../../../components/Layout/Layout";
import WSContext from "../../../contexts/wsContext";
import { getUpdateStateAction } from "../../../redux/actions/piramideLobby/piramideLobbyActionCreators";
import { mainRed } from "../../../styles/colors";
import { CenteredContainer } from "../../../styles/global";
import State from "../../../types/State";

interface Message {
  data: string;
}

const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: white;
`;

const RoomCode = styled.p`
  width: 100px;
  margin: 0;
  font-size: 20px;
`;

const PlayerCounter = styled.p`
  margin: 0;
  font-size: 14px;
`;

const LobbyPage = (): JSX.Element => {
  const router = useRouter();
  const { roomId } = router.query;
  const { user, piramideLobby } = useSelector((state: State) => state);
  const { wsInstance, ready } = useContext(WSContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ready && roomId && user.id) {
      wsInstance.send(
        JSON.stringify({
          reason: "lobby",
          game: "piramide",
          type: "join",
          lobby: roomId,
          userId: user.id,
        })
      );
      wsInstance.onmessage = ({ data }: Message) => {
        const lobby = JSON.parse(data);
        dispatch(getUpdateStateAction(lobby));
      };
    }
  }, [dispatch, ready, roomId, user.id, wsInstance]);

  console.log(piramideLobby);

  return (
    <Layout
      pageTitle="Piramide lobby"
      header={{ title: "PIRAMIDE", subtitle: "LOBBY" }}
    >
      <CenteredContainer>
        <HorizontalContainer>
          <RoomCode>HS6Y</RoomCode> <PlayerCounter>3/7</PlayerCounter>
          <TextIconButton
            color={mainRed}
            icon="/icons/sda"
            text="Invite"
            size={{ height: 35, width: 100 }}
          />
        </HorizontalContainer>
      </CenteredContainer>
    </Layout>
  );
};

export default LobbyPage;
