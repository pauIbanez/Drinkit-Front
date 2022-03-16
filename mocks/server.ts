import { setupServer } from "msw/node";
import { accountHandlers } from "./handlers/accountHandlers";
import { gameHandlers } from "./handlers/gameHandlers";
import { roomHandlers } from "./handlers/roomHandlers";

const handlers = [...roomHandlers, ...gameHandlers, ...accountHandlers];

export const server = setupServer(...handlers);
