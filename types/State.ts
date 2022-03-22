import PiramideLobby from "./PiramideLobby";
import Player from "./Player";
import { APIRoom } from "./Room";

interface State {
  rooms: APIRoom[];
  user: Player;
  piramideLobby: PiramideLobby;
}

export default State;
