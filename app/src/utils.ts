
import nunjucks from "nunjucks";
export const nunjucksRouter = (c:any,nun:nunjucks.Environment,nunExcludedPaths: any[],nunExcludedFiles: any[]) => {
      // Get the requests path
  let p = c.req.path.substring(1);

  // Add the html extension if needed
  if(!p.endsWith(".html")) p += ".html"

  // Check if exluded folder
  for (const path of nunExcludedPaths) {
    if (p.startsWith(path)) {
      return c.notFound();
    }
  }
  // Check if exluded file
  for (const path of nunExcludedFiles) {
    if (p.endsWith(path)) {
      return c.notFound();
    }
  }

  const temp = nun.getTemplate(p);

  try {
    let h = temp.render({});
    // console.log(h);
    return c.html(h);
  } catch (e) {
    return c.notFound();
  }
}