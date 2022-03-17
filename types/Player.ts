interface Player {
  profile: {
    username: string;
    friends: string[] | Player[];
    incomingRequests: string[] | Player[];
    stats: {
      sips: number;
      games: number;
    };
  };
  info?: {
    name: string;
    lastName: string;
    email: string;
    avatar: {
      staticUrl: string;
    };
  };
  id: string;
}

export interface PlayerChange {
  profile?: {
    friends?: string[] | Player[];
    incomingRequests?: string[] | Player[];
    stats?: {
      sips?: number;
      games?: number;
    };
  };
  info?: {
    avatar?: {
      staticUrl?: string;
    };
  };
}

export default Player;
