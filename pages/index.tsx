import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "styled-components";
import IconButton from "../components/Buttons/IconButton/IconButton";
import TextIconButton from "../components/Buttons/TextIconButton/TextIconButton";
import Layout from "../components/Layout/Layout";
import {
  lightBlack,
  lightBlue,
  lightWhite,
  mainRed,
  mainTeal,
  sectionBlue,
  vibeRed,
} from "../styles/colors";
import { CenteredContainer } from "../styles/global";
import { globalPageHorizontalPadding } from "../styles/variables";
import State from "../types/State";

const MainTitle = styled.h1`
  font-size: 36px;
  text-shadow: 0 4px 4px black;
  margin: 0;
  color: white;
`;

const RandomPhrase = styled.h2`
  margin: 0;
  color: ${lightWhite};
  font-size: 14px;
  font-weight: 400;
`;

const VerticalCentered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
`;

const Controlls = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  jkustify-content: center;
  gap: 20px;
`;

const FriendsButtonHolder = styled.div`
  position: absolute;
  top: ${globalPageHorizontalPadding};
  right: ${globalPageHorizontalPadding};
`;

const notificationSize = 17;

const FriendsNotification = styled.div`
  background-color: ${vibeRed};
  height: ${notificationSize}px;
  width: ${notificationSize}px;
  position: absolute;
  top: -${notificationSize / 3}px;
  right: -${notificationSize / 3}px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: ${notificationSize}px;
`;

const CenteredCenteredContainer = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserSection = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 120px;
  width: 100%;
  background-color: ${sectionBlue};
  box-shadow: 0 -4px 4px ${lightBlack};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${globalPageHorizontalPadding};
`;

const User = styled.div`
  display: flex;
  gap: 5px;
`;

const UserData = styled.section`
  display: flex;
  flex-direction: column;
`;

const Username = styled.h2`
  color: white;
  margin: 0;
  font-size: 18px;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  color: ${lightWhite};
`;

const Stat = styled.p`
  margin: 0;
  font-size: 18px;
`;

const Home: NextPage = () => {
  const router = useRouter();

  const { user } = useSelector((state: State): State => state);

  const gotoGamesList = () => {
    router.push("/games");
  };

  const gotoRoomsList = () => {
    router.push("/rooms");
  };

  return (
    <Layout>
      <FriendsButtonHolder>
        <FriendsNotification>2</FriendsNotification>
        <IconButton
          alt="friends icon"
          color={mainTeal}
          icon="/icons/friends.png"
          size={{ width: 50, height: 50 }}
        />
      </FriendsButtonHolder>
      <CenteredCenteredContainer>
        <CenteredContainer>
          <VerticalCentered>
            <Image src="/Beer.png" alt="Beer icon" width={140} height={140} />
            <MainTitle>DRINK IT</MainTitle>
            <RandomPhrase>Let&apos;s just get drunk</RandomPhrase>
            <Controlls>
              <TextIconButton
                color={mainRed}
                icon="/icons/clink"
                size={{ height: 45, width: 285 }}
                text="Host Game"
                onClick={gotoGamesList}
              />
              <TextIconButton
                color={lightBlue}
                icon="/icons/clink"
                size={{ height: 45, width: 285 }}
                text="Join Game"
                onClick={gotoRoomsList}
              />
            </Controlls>
          </VerticalCentered>
        </CenteredContainer>
      </CenteredCenteredContainer>
      <UserSection>
        <User>
          <Image
            src={user.profile.avatar.staticUrl}
            alt="avatar"
            height={75}
            width={75}
          />
          <UserData>
            <Username>{user.profile.username}</Username>
            <Stats>
              <Stat>Sips: {user.profile.stats.sips}</Stat>
              <Stat>Games: {user.profile.stats.games}</Stat>
            </Stats>
          </UserData>
        </User>
        <IconButton
          alt="user settings icon"
          color={mainTeal}
          icon="/icons/settings.png"
          size={{ height: 45, width: 45 }}
        />
      </UserSection>
    </Layout>
  );
};

export default Home;
