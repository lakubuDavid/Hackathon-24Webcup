import * as esbuild from 'esbuild'
// import { nodeExternalsPlugin } from 'esbuild-node-externals';


await esbuild.build({
  entryPoints: ['src/app.tsx', 'src/assets/**/*', 'src/views/**/*'],
  bundle: true,
  outdir: "dist/",
  platform: 'node',
  target: "node18",
  treeShaking: true,
  format: "cjs",
  define: {
    ["process.env.NODE_ENV"]: '"production"',
  },

  external: ["fsevents"],
  alias: {
    "@components/*": "src/components/*",
    "@static/*": "src/static/*",
    // "@views/*":"src/views/*"
  },
  loader: {
    [".html"]: "copy"
  },
  outExtension: {
    [".js"]: ".cjs"
  }
  // plugins: [nodeExternalsPlugin({
  //   allowList: ["hono","@hono/node-server"]
  // })],
}).catch((err) => {
  console.error(err);
})