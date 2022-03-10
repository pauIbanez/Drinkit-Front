import { rest } from "msw";
import { APIGames } from "../SharedTestObjects";

export const handlers = [
  rest.get(`${process.env.NEXT_PUBLIC_API_URL}games/list`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        games: APIGames,
      })
    );
  }),
];
