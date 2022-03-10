import { APIGame } from "./Game";

export interface Room {
  id: string;
  creator: string;
  game: string;
}

export interface APIRoom {
  id: string;
  leader: string;
  isActive: boolean;
  inLobby: boolean;
  inGame: boolean;
  players: string[];
  game: APIGame;
}
