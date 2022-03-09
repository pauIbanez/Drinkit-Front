import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import { CenteredContainer } from "../../styles/global";
import { APIGame } from "../../types/Game";
import Header from "../../types/Header";

const APIGames = [
  {
    name: "Piramide",
    description: "ASdasdadsa",
    drunkness: "high",
    rules: "asdasdasda",
    duration: 30,
    minPlayers: 4,
    maxPlayers: 12,
  },
];

interface Props {
  games: APIGame[];
}

const GamesListHolder = styled.ul``;

const GamesList = ({ games }: Props) => {
  const header: Header = {
    title: "SELECT A GAME",
    subtitle: "GAMES LIST",
  };

  // const gamesToRender: JSX.Element[] = games.map((game: APIGame): JSX.Element => <Game game={game}/>)
  return (
    <Layout pageTitle="Games" header={header}>
      <CenteredContainer>
        <GamesListHolder>{"gamesToRender"}</GamesListHolder>
      </CenteredContainer>
    </Layout>
  );
};

export const getStaticProps = () => {
  return {
    props: {
      games: APIGames,
    },
  };
};

export default GamesList;
