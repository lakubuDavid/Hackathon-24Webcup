import { html } from "hono/html";
import { Layout } from "./_layout";

const HomePage = (props: {}) => {
  return (
    <Layout title="Home">
      <main class="container">
        <h1>Home</h1>
        <p>Hello world!</p>
        <button class="btn btn-primary">Hello </button>
      </main>
      {html`
        <script>
          console.log("Hello there");
        </script>
      `}
    </Layout>
  );
};

export default HomePage;
