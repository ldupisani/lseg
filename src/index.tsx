import { serve } from "bun";
import index from "./frontend/index.html";
import bot from "./bot/bot";

const server = serve({
  port: 3000,
  routes: {
    "/": index,

    "/api/query/": {
      async GET(req) {
        return Response.json({
          message: bot.processQuery("menu"),
          method: "GET",
        });
      },
    },

    "/api/query/:text": {
      async GET(req) {
        return Response.json({
          message: bot.processQuery(req.params.text),
          method: "GET",
        });
      },
    },
  },

  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
