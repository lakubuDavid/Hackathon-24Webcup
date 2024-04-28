import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/index.tsx'],
  bundle: true,
  outfile: "dist/index.cjs",
  platform: 'node',
  target: "node18",
  treeShaking:true,
  alias: {
    "@components/*":"src/components/*"
  }
})