import type { NextPage } from "next";
import Image from "next/image";
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
} from "../styles/colors";
import { CenteredContainer } from "../styles/global";
import { globalPageHorizontalPadding } from "../styles/variables";

const MainTitle = styled.h1`
  font-size: 36px;
  text-shadow: 0 4px 4px black;
  margin: 0;
  color: white;
`;

const RandomPhrase = styled.p`
  margin: 0;
  color: ${lightWhite};
`;

const VerticalCentered = styled.div`
  display: flex;
  height: 100vh;
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
  return (
    <Layout>
      <FriendsButtonHolder>
        <IconButton
          alt="frinds icon"
          color={mainTeal}
          icon="/icons/friends.png"
          size={{ width: 50, height: 50 }}
        />
      </FriendsButtonHolder>
      <CenteredContainer>
        <VerticalCentered>
          <Image src="/Beer.png" alt="Beer icon" width={140} height={140} />
          <MainTitle>Drink It</MainTitle>
          <RandomPhrase>Let&apos;s just get drunk</RandomPhrase>
          <Controlls>
            <TextIconButton
              color={mainRed}
              icon="/icons/clink"
              size={{ height: 45, width: 285 }}
              text="Host Game"
            />
            <TextIconButton
              color={lightBlue}
              icon="/icons/clink"
              size={{ height: 45, width: 285 }}
              text="Join Game"
            />
          </Controlls>
        </VerticalCentered>
      </CenteredContainer>
      <UserSection>
        <User>
          <Image src="/useravatar" alt="avatar" height={75} width={75} />
          <UserData>
            <Username>Username</Username>
            <Stats>
              <Stat>Sips: 350</Stat>
              <Stat>Games: 14</Stat>
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
