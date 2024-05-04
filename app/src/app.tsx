import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { router } from "./router";
import ErrorPage from "./pages/_error";
import Page404 from "./pages/_notfound";
import { logger } from "hono/logger";
import { dirname } from "path";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();
app.use(logger())

app.onError((err, c) => {
  return c.html(<ErrorPage statusCode={500} error={err}></ErrorPage>,500);
});

app.notFound((c) => {
  return c.html(<Page404></Page404>,404);
})
app.get('/assets/*', serveStatic({ root: process.env.NODE_ENV == 'production' ? './' : './src/' }))

app.route("/", router)

const port = 3000;
console.log(`Server is running http://localhost:3000`);

serve({
  fetch: app.fetch,
  port,
});
