import type { NextPage } from "next";
import Image from "next/image";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";
import { lightBlack, lightWhite } from "../styles/colors";
import { CenteredContainer } from "../styles/global";

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
`;

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home">
      <CenteredContainer>
        <VerticalCentered>
          <Image src="/Beer.png" alt="Beer icon" width={140} height={140} />
          <MainTitle>Drink It</MainTitle>
          <RandomPhrase>Let&apos;s just get drunk</RandomPhrase>
        </VerticalCentered>
      </CenteredContainer>
    </Layout>
  );
};

export default Home;
