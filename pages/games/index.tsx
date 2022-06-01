import Link from "next/link";
import styled from "styled-components";
import Game from "../../components/Game/Game";
import Layout from "../../components/Layout/Layout";
import { Back, CenteredContainer } from "../../styles/global";
import { APIGame } from "../../types/Game";
import Header from "../../types/Header";

interface Props {
  games: APIGame[];
}

const GamesListHolder = styled.ul`
  margin: 30px 0;
  padding: 0;
  list-style: none;
  width: 100%;
  min-height: 400px;
`;

const GamesList = ({ games }: Props): JSX.Element => {
  const header: Header = {
    title: "SELECT A GAME",
    subtitle: "GAMES LIST",
  };

  const gamesToRender: JSX.Element[] = games.map(
    (game: APIGame): JSX.Element => <Game key={game.name} game={game} />
  );

  return (
    <Layout pageTitle="Games" header={header}>
      <CenteredContainer>
        <GamesListHolder>{gamesToRender}</GamesListHolder>
        <Link href={"/"} passHref>
          <Back>Back</Back>
        </Link>
      </CenteredContainer>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}games/list`);
  const body = await response.json();

  if (body.error) {
    //handle api error
    return {
      props: {
        games: [],
      },
    };
  }

  return {
    props: {
      games: body.games,
    },
  };
};

export default GamesList;
