import { Hono } from "hono";
import HomePage from "./pages";

import nunjucks from "nunjucks";
import { nunjucksRouter } from "./utils";
import { server } from "./server";

const router = new Hono();
const nunExcludedPaths = ["_components"];
const nunExcludedFiles = ["base.html"];

const nun = new nunjucks.Environment(
  new nunjucks.FileSystemLoader(process.env.NODE_ENV == "production" ? "views": "src/views"),
  {
    autoescape: true,
    trimBlocks: true,
    watch: true,
  }
);

router.get("/", (c) => {


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

  const temp = nun.getTemplate("reserve/index.html");

  try {
    let h = temp.render({});
    // console.log(h);
    return c.html(h);
  } catch (e) {
    return c.notFound();
  }
});


router.get("/reserve/music", (c) => {

  if (!c.req.query("checkContact")) {
    return c.redirect("/reserve");
  }
  const temp = nun.getTemplate("reserve/music.html");



  try {
    let h = temp.render({});
    // console.log(h);
    return c.html(h);
  } catch (e) {
    return c.notFound();
  }
});

router.get("/reserve/menu", (c) => {

  if (!c.req.query("checkMusic")) {
    return c.redirect("/reserve/music");
  }
  const temp = nun.getTemplate("reserve/menu.html");



  try {
    let h = temp.render({});
    // console.log(h);
    return c.html(h);
  } catch (e) {
    return c.notFound();
  }
})

router.get("/reserve/dresscode", (c) => {

  if (!c.req.query("checkFood")) {
    return c.redirect("/reserve/menu");
  }
  const temp = nun.getTemplate("reserve/dresscode.html");



  try {
    let h = temp.render({});
    // console.log(h);
    return c.html(h);
  } catch (e) {
    return c.notFound();
  }
})
router.get("/reserve/finalize", (c) => {

  if (!c.req.query("checkDressCode")) {
    return c.redirect("/reserve/dresscode");
  }
  const temp = nun.getTemplate("reserve/finalize.html");



  try {
    let h = temp.render({});
    // console.log(h);
    return c.html(h);
  } catch (e) {
    return c.notFound();
  }
})

router.get("/*", (c) => {

  return nunjucksRouter(c, nun, nunExcludedPaths, nunExcludedFiles, {
    query:c.req.query()
  });
});

router.route("/",server);

export { router };
