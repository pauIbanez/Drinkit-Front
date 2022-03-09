import { APIGame } from "../../types/Game";

interface Props {
  game: APIGame;
}

const Game = ({ game }: Props): JSX.Element => {
  return (
    <li>
      <h2>game.name</h2>
      <p>{`Drunkness: ${game.drunkness}`}</p>
      <p>{`Time: ${game.duration}mins`}</p>
      <p>{`Players: ${game.minPlayers} - ${game.maxPlayers}`}</p>
    </li>
  );
};

export default Game;
