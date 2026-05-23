# SVG Bicycle Assembly Generator

Compose the sibling wheel and drivetrain SVG generators into complete bicycle
assemblies. This package keeps wheel/hub and drivetrain rendering separate, then
adds a small integration layer for mounting cassettes on freehubs and spinning a
rear wheel with an animated drivetrain.

## Install

```bash
npm install svg-bicycle-assembly-generator
```

For local workspace development this package depends on:

- `svg-bicycle-wheel-generator`
- `svg-bicycle-drivetrain-generator`

## Quick Start

```js
import {
  renderRearAssemblySvg,
  renderWheelDrivetrainSvg
} from 'svg-bicycle-assembly-generator';

const side = renderRearAssemblySvg({
  view: 'side',
  hub: { preset: 'dt-swiss-240-exp-boost-rear-centerlock' },
  cassette: {
    cogs: [10, 12, 14, 16, 18, 21, 24, 28, 32, 36, 42, 52],
    style: 'classicSteel'
  },
  style: { theme: 'realistic' }
});

const animated = renderWheelDrivetrainSvg({
  hub: { preset: 'dt-swiss-240-exp-boost-rear-centerlock' },
  cassette: {
    cogs: [10, 12, 14, 16, 18, 21, 24, 28, 32, 36, 42, 52]
  },
  drivetrain: {
    chainring: 30,
    cogs: [10, 12, 14, 16, 18, 21, 24, 28, 32, 36, 42, 52],
    selectedCog: 36,
    chainstay: 435,
    animation: { enabled: true, rpm: 8 }
  }
});
```

## API

```js
renderRearAssemblySvg({
  view: 'side' | 'driveFace',
  wheel,
  hub,
  cassette,
  style
});

renderWheelDrivetrainSvg({
  wheel,
  hub,
  cassette,
  drivetrain,
  animation,
  style
});

calculateRearAssemblyLayout(options);
```

`view: 'side'` mounts the cassette cogs along the hub freehub body. The largest
cog is inboard and the lockring is outboard. `view: 'driveFace'` centers the
cassette over the rear axle on the drive side of the wheel.

`renderWheelDrivetrainSvg` renders the drivetrain animation and adds a rear wheel
that uses the same cassette duration/RPM, so the wheel and cassette rotate
together.

## Examples

Run:

```bash
npm run examples
```

Generated examples are written to `examples/svg`:

- `rear-assembly-side.svg`
- `rear-assembly-drive-face.svg`
- `wheel-drivetrain-animated.svg`
- `drivetrain-animated-base.svg`
- `spinning-rear-wheel.svg`

For a quick browser demo, open `examples/browser/spinning-demo.html` from a local
static server. The demo uses `drivetrain-animated-base.svg` plus a separate
CSS-animated `spinning-rear-wheel.svg` layer for smoother browser rotation.

## Development

```bash
npm install
npm test
```
