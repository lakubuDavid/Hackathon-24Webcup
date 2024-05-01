import { Hono } from "hono";
import HomePage from "./pages";

import nunjucks from "nunjucks";
import { nunjucksRouter } from "./utils";

const router = new Hono();
const nunExcludedPaths = ["_components"];
const nunExcludedFiles = ["base.html"];

router.get("/", (c) => {
  return c.html(<HomePage></HomePage>);
});

router.get("/*", (c) => {
  const nun = new nunjucks.Environment(
    new nunjucks.NodeResolveLoader("src/views"),
    {
      autoescape: true,
      trimBlocks: true,
      watch: true,
    }
  );
  return nunjucksRouter(c, nun, nunExcludedPaths, nunExcludedFiles);
});

export { router };
