import { APIGame } from "../../types/Game";

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

const GamesList = ({ games }: Props) => {};

export const getStaticProps = () => {
  return {
    props: {
      games: APIGames,
    },
  };
};

export default GamesList;
