import { css, Style } from "hono/css";
// import style from "../static/style.css"
import { createContext, PropsWithChildren, useContext } from "hono/jsx";

interface Script {
  src: string;
}
interface PageMeta {
  title?: string;
  script?: Script;
}

export const Layout = ({
  title,
  script,
  children,
}: PropsWithChildren<PageMeta>) => {
  return (
    <>
      <html>
        <head>
          <title>{title}</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossorigin="anonymous"
          />
          <link href="/assets/style.css" rel="stylesheet" />
          <link href="/assets/preloader.css" rel="stylesheet" />

          <script src="/assets/preloader.js"></script>
          <Style />
        </head>
        <body>
          <div id="preloader">
            <div class="loader">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
          </div>
          {children}
        </body>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossorigin="anonymous"
        ></script>
        {script ? <script src={script.src}></script> : <></>}
      </html>
    </>
  );
};
