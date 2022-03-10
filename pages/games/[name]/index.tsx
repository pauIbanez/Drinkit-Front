import styled from "styled-components";
import Layout from "../../../components/Layout/Layout";
import { lightWhite, mainTeal } from "../../../styles/colors";
import { CenteredContainer } from "../../../styles/global";
import { APIGame } from "../../../types/Game";

interface Props {
  game: APIGame;
}

interface StaticProps {
  params: {
    name: string;
  };
}

const InfoSection = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;
const Title = styled.h1`
  font-size: 36px;
  margin: 0;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-top: 10px;
`;

const SectionInfo = styled.p`
  color: ${lightWhite};
  font-size: 14px;
  margin: 0;
`;

const GameDetails = ({ game }: Props) => {
  return (
    <Layout pageTitle={game.name} color={mainTeal}>
      <CenteredContainer>
        <InfoSection>
          <Title>{game.name}</Title>
          <SectionTitle>Setup</SectionTitle>
          <SectionInfo>{game.gameInfo.setup}</SectionInfo>
          <SectionTitle>How to play</SectionTitle>
          <SectionInfo>{game.gameInfo.howToPlay}</SectionInfo>
        </InfoSection>
      </CenteredContainer>
    </Layout>
  );
};

export const getStaticProps = async ({ params: { name } }: StaticProps) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}games/list`);
  const body = await response.json();

  const game = body.games.find(
    (game: APIGame) => game.name.toLowerCase() === name
  );
  return {
    props: {
      game,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}games/list`);
  const body = await response.json();

  const paths = body.games.map(
    (game: APIGame): StaticProps => ({
      params: { name: game.name.toLowerCase() },
    })
  );

  return {
    paths,
    fallback: false,
  };
};

export default GameDetails;
