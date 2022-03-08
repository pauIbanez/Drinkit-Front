import { APIGame } from "./Game";

export interface Room {
  id: string;
  creator: string;
  game: string;
}

export interface APIRoom {
  id: string;
  leader: string;
  isActive: Boolean;
  inLobby: boolean;
  inGame: Boolean;
  game: APIGame;
}
