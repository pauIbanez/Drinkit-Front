import Image from "next/image";
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
import { globalRadius } from "../../../styles/variables";
import Player from "../../../types/Player";
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

const PlayersSection = styled.section`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const PlayerHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  height: 90px;
  width: 70px;
`;

const Avatar = styled(Image)`
  border-radius: ${globalRadius};
  object-fit: contain;
`;

const Username = styled.p`
  margin: 0;
  color: white;
  fnt-size: 13px;
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

  let usersToRender: JSX.Element[] = [];
  if (piramideLobby.connectedPlayers) {
    const connectedToRender = piramideLobby.connectedPlayers.map(
      (player: Player) => (
        <PlayerHolder key={player.id}>
          <Avatar
            height={70}
            width={70}
            src={`${process.env.NEXT_PUBLIC_API_URL}avatars/${player.profile.avatar.staticUrl}`}
            alt="user avatar"
          />
          <Username>{player.profile.username}</Username>
        </PlayerHolder>
      )
    );
    const missingPlayers = piramideLobby.maxPlayers - connectedToRender.length;

    let restToRender: JSX.Element[] = [];

    for (let i = 0; i < missingPlayers; i++) {
      restToRender.push(
        <PlayerHolder key={i}>
          <Avatar height={70} width={70} src="/default.png" alt="user avatar" />
          <Username>Waiting...</Username>
        </PlayerHolder>
      );
    }

    usersToRender = [...connectedToRender, ...restToRender];
  }

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
        <PlayersSection>{usersToRender}</PlayersSection>
      </CenteredContainer>
    </Layout>
  );
};

export default LobbyPage;
