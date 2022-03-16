import { rest } from "msw";

export const accountHandlers = [
  rest.post(
    `${process.env.NEXT_PUBLIC_API_URL}accounts/register`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json({}));
    }
  ),

  rest.post(`https://failemail.com/accounts/register`, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: true,
        message: "email",
      })
    );
  }),

  rest.post(`https://failusername.com/accounts/register`, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: true,
        message: "username",
      })
    );
  }),

  rest.post(`https://failpassword.com/accounts/register`, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: true,
        message: "The password must be at lease 8 characters long",
      })
    );
  }),
];
