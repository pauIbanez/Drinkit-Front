import Player from "./Player";

interface PiramideLobby {
  id: string;
  minPlayers: number;
  maxPlayers: number;
  jokers: boolean;
  twoDecks: boolean;
  leftovers: boolean;
  modifiers: string[];

  leader: Player;
  connectedPlayers: Player[];
}

export default PiramideLobby;
