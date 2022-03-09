import Link from "next/link";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import { lightWhite } from "../../styles/colors";
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

const GamesListHolder = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Back = styled.a`
  color: ${lightWhite};
  text-decoration: none;
  font-size: 20px;
`;

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
        <Link href={"/"} passHref>
          <Back>Back</Back>
        </Link>
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
