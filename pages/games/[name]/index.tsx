import Layout from "../../../components/Layout/Layout";
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

const GameDetails = ({ game }: Props) => {
  return (
    <Layout pageTitle={game.name}>
      <CenteredContainer>
        <h1>{game.name}</h1>
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
