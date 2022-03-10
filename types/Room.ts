import { APIGame } from "./Game";
import Player from "./Player";

export interface APIRoom {
  id: string;
  leader: Player;
  isActive: boolean;
  inLobby: boolean;
  inGame: boolean;
  players: string[];
  game: APIGame;
}
