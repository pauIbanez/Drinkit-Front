import { APIGame } from "./Game";

export interface Room {
  id: String;
  creator: String;
  game: String;
}

export interface APIRoom {
  id: String;
  leader: String;
  isActive: Boolean;
  inLobby: boolean;
  inGame: Boolean;
  game: APIGame;
}
