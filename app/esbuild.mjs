import * as esbuild from 'esbuild'
import { copy } from 'esbuild-plugin-copy';

// import { nodeExternalsPlugin } from 'esbuild-node-externals';


await esbuild.build({
  entryPoints: ['src/app.tsx', 'src/views/**/*'],
  bundle: true,
  outdir: "dist/",
  platform: 'node',
  target: "node18",
  treeShaking: true,
  format: "cjs",
  define: {
    ["process.env.NODE_ENV"]: '"production"',
  },
  external: ["fsevents","./src/assets/"],
  alias: {
    "@components/*": "src/components/*",
    "@static/*": "src/static/*",
  },
  loader: {
    [".html"]: "copy"
  },
  outExtension: {
    [".js"]: ".cjs"
  },
  plugins: [copy({
    // this is equal to process.cwd(), which means we use cwd path as base path to resolve `to` path
    // if not specified, this plugin uses ESBuild.build outdir/outfile options as base path.
    resolveFrom: 'cwd',
    assets: {
      from: ['./src/assets/**/*'],
      to: ['./dist/assets/'],
    },
    watch: true,
  }),]
}).catch((err) => {
  console.error(err);
})