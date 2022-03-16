import { rest } from "msw";
import { APIGames } from "../../SharedTestObjects";
import { mockUrls } from "../mockUrls";

export const gameHandlers = [
  //GAMES ===========================================================
  rest.get(`${process.env.NEXT_PUBLIC_API_URL}games/list`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        games: APIGames,
      })
    );
  }),

  rest.get(`${mockUrls.failUrl}games/list`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        error: true,
      })
    );
  }),
];
