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
    </Layout>
  );
};

export default Home;
