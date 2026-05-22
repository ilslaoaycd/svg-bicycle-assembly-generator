import { rm } from 'node:fs/promises';
import { build } from 'esbuild';

const entryPoints = ['src/index.js'];

await rm('dist', { recursive: true, force: true });

await build({
  entryPoints,
  outfile: 'dist/index.mjs',
  bundle: true,
  format: 'esm',
  platform: 'neutral',
  mainFields: ['module', 'main'],
  conditions: ['import', 'default'],
  sourcemap: true,
  target: 'es2020'
});

await build({
  entryPoints,
  outfile: 'dist/index.cjs',
  bundle: true,
  format: 'cjs',
  platform: 'neutral',
  mainFields: ['module', 'main'],
  conditions: ['import', 'default'],
  sourcemap: true,
  target: 'es2020'
});

await build({
  entryPoints,
  outfile: 'dist/bicycle-assembly-svg.global.js',
  bundle: true,
  format: 'iife',
  platform: 'neutral',
  globalName: 'BicycleAssemblySVG',
  mainFields: ['module', 'main'],
  conditions: ['import', 'default'],
  sourcemap: true,
  target: 'es2020'
});
