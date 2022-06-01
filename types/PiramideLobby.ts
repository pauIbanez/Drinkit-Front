import Player from "./Player";

interface PiramideLobby {
  id: string;
  sharedId: string;
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
