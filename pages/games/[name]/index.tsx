import Layout from "../../../components/Layout/Layout";
import { CenteredContainer } from "../../../styles/global";
import { APIGame } from "../../../types/Game";

interface Props {
  game: APIGame;
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

export default GameDetails;
