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
    avatar: {
      staticUrl: "https://url.com/image.png",
      backup: "https://url.com/image.png",
    },
    username: "username",
  },
};

export default defaultUser;
