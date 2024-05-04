import { Hono } from "hono";
import HomePage from "./pages";

import nunjucks from "nunjucks";
import { nunjucksRouter } from "./utils";
import { server } from "./server";

const router = new Hono();
const nunExcludedPaths = ["_components"];
const nunExcludedFiles = ["base.html"];

router.get("/", (c) => {
  const nun = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(process.env.NODE_ENV == "production" ? "views": "src/views"),
    {
      autoescape: true,
      trimBlocks: true,
      watch: true,
    }
  );

  const temp = nun.getTemplate("index.html");

  try {
    let h = temp.render({});
    // console.log(h);
    return c.html(h);
  } catch (e) {
    return c.notFound();
  }
});


router.get("/reserve", (c) => {
  const nun = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(process.env.NODE_ENV == "production" ? "views": "src/views"),
    {
      autoescape: true,
      trimBlocks: true,
      watch: true,
    }
  );

  const temp = nun.getTemplate("reserve/index.html");

  try {
    let h = temp.render({});
    // console.log(h);
    return c.html(h);
  } catch (e) {
    return c.notFound();
  }
});

router.get("/*", (c) => {
  const nun = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(process.env.NODE_ENV == "production" ? "views": "src/views"),
    {
      autoescape: true,
      trimBlocks: true,
      watch: true,
    }
  );
  return nunjucksRouter(c, nun, nunExcludedPaths, nunExcludedFiles, {
    query:c.req.query()
  });
});

router.route("/",server);

export { router };
