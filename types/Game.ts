export interface APIGame {
  name: string;
  gameInfo: {
    setup: string;
    howToPlay: string;
  };
  drunkness: string;
  duration: number;
  minPlayers: number;
  maxPlayers: number;
}
