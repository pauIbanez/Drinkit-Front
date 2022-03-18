interface Player {
  profile: {
    username: string;
    friends: string[] | Player[];
    incomingRequests: string[] | Player[];
    stats: {
      sips: number;
      games: number;
    };
    avatar: {
      staticUrl: string;
      backup: string;
    };
  };
  info?: {
    name: string;
    lastName: string;
    email: string;
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
    avatar?: {
      staticUrl?: string;
      backup?: string;
    };
  };
}

export default Player;
