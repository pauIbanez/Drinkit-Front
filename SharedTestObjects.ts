import { APIGame } from "./types/Game";
import Player from "./types/Player";
import { APIRoom } from "./types/Room";

export const localUser: Player = {
  profile: {
    friends: [],
    incomingRequests: [],
    stats: {
      sips: 312,
      games: 14,
    },
    username: "local user",
  },
};

export const APIGames: APIGame[] = [
  {
    name: "Piramide",
    description: "ASdasdadsa",
    drunkness: "high",
    rules: "asdasdasda",
    duration: 30,
    minPlayers: 4,
    maxPlayers: 12,
  },
  {
    name: "Remar",
    description: "asdas",
    drunkness: "high",
    rules: "asd",
    duration: 0,
    minPlayers: 0,
    maxPlayers: 0,
  },
];

export const APIRooms: APIRoom[] = [
  {
    players: [],
    id: "asdasd",
    game: APIGames[0],
    inGame: false,
    inLobby: true,
    isActive: true,
    leader: localUser,
  },
  {
    players: [],
    id: "asdasd",
    game: APIGames[1],
    inGame: false,
    inLobby: true,
    isActive: true,
    leader: localUser,
  },
];
