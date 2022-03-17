import Player from "../../../types/Player";

const defaultUser: Player = {
  id: "",
  profile: {
    friends: [],
    incomingRequests: [],
    stats: {
      games: 0,
      sips: 0,
    },
    username: "username",
  },
};

export default defaultUser;
