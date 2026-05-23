import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFile } from 'node:fs/promises';
import { describe, test } from 'node:test';
import {
  BicycleAssemblySVG,
  calculateRearAssemblyLayout,
  renderRearAssemblySvg,
  renderWheelDrivetrainSvg
} from '../src/index.js';

describe('public API', () => {
  const assemblyOptions = {
    hub: { preset: 'dt-swiss-240-exp-boost-rear-centerlock' },
    cassette: { cogs: [10, 12, 14, 16], style: 'classicSteel' },
    style: { theme: 'drawing' }
  };

  test('exports facade and convenience functions', () => {
    assert.equal(typeof BicycleAssemblySVG, 'function');
    assert.equal(typeof calculateRearAssemblyLayout, 'function');
    assert.equal(typeof renderRearAssemblySvg, 'function');
    assert.equal(typeof renderWheelDrivetrainSvg, 'function');
  });

  test('rear side assembly places cassette inside freehub bounds', () => {
    const layout = calculateRearAssemblyLayout(assemblyOptions);
    const svg = renderRearAssemblySvg({ ...assemblyOptions, view: 'side' });

    assert.ok(layout.cassette.mountStartX >= layout.mount.freehubStartX);
    assert.ok(layout.cassette.mountEndX <= layout.mount.freehubEndX + 0.0001);
    assert.match(svg, /class="assembly-cassette-side"/);
    assert.match(svg, /class="wheel-side-embedded"/);
  });

  test('drive face assembly centers cassette and wheel on the axle', () => {
    const svg = renderRearAssemblySvg({ ...assemblyOptions, view: 'driveFace' });

    assert.match(svg, /class="bicycle-assembly-svg bicycle-assembly-drive-face"/);
    assert.match(svg, /translate\(-350 -350\)/);
    assert.match(svg, /class="assembly-cassette-face"/);
  });

  test('animated drivetrain fixes wheel spin to cassette timing', () => {
    const svg = renderWheelDrivetrainSvg({
      ...assemblyOptions,
      drivetrain: {
        chainring: 30,
        cogs: [10, 12, 14, 16, 18],
        selectedCog: 16,
        chainstay: 420,
        animation: { enabled: true, rpm: 8 }
      }
    });

    assert.match(svg, /data-cassette-rpm="15"/);
    assert.match(svg, /data-wheel-duration="4s"/);
    assert.match(svg, /class="assembly-animated-rear-wheel"/);
    assert.match(svg, /will-change: transform/);
    assert.match(svg, /dur="4s"/);
    assert.match(svg, /<animateMotion/);
  });

  test('CommonJS bundle can be required', () => {
    const require = createRequire(import.meta.url);
    const api = require('../dist/index.cjs');

    assert.equal(typeof api.renderRearAssemblySvg, 'function');
    assert.match(api.renderRearAssemblySvg(assemblyOptions), /^<svg /);
  });

  test('runtime source avoids Node and DOM globals', async () => {
    const content = await readFile('src/index.js', 'utf8');
    const forbidden = /(?:from ['"]node:|require\(|module\.exports|process\.|document\.|window\.)/;

    assert.equal(forbidden.test(content), false);
  });

  test('sample SVG files are present', async () => {
    const side = await readFile('examples/svg/rear-assembly-side.svg', 'utf8');
    const face = await readFile('examples/svg/rear-assembly-drive-face.svg', 'utf8');
    const animated = await readFile('examples/svg/wheel-drivetrain-animated.svg', 'utf8');

    assert.match(side, /assembly-cassette-side/);
    assert.match(face, /assembly-cassette-face/);
    assert.match(animated, /assembly-animated-rear-wheel/);
  });
});
