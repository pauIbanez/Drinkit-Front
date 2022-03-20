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
      staticUrl: "default-avatar.png",
      backup:
        "https://firebasestorage.googleapis.com/v0/b/drinkit-bc8d7.appspot.com/o/default-avatar.png?alt=media&token=9ad386c6-b494-42bb-afc9-ce05989179eb",
    },
    username: "username",
  },
};

export default defaultUser;
