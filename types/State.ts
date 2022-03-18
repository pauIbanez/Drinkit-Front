import Player from "./Player";
import { APIRoom } from "./Room";

interface State {
  rooms: APIRoom[];
  user: Player;
}

export default State;
