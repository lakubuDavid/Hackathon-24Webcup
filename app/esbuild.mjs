import * as esbuild from 'esbuild'
// import { nodeExternalsPlugin } from 'esbuild-node-externals';


await esbuild.build({
  entryPoints: ['src/app.tsx'],
  bundle: true,
  outfile: "dist/index.cjs",
  platform: 'node',
  target: "node18",
  treeShaking: true,
  // packages: 'external',
  external:["fsevents"],
  alias: {
    "@components/*": "src/components/*",
    "@static/*":"src/static/*",
  },
  // plugins: [nodeExternalsPlugin({
  //   allowList: ["hono","@hono/node-server"]
  // })],
}).catch((err) => {
    console.error(err);
})