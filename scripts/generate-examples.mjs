import { mkdir, writeFile } from 'node:fs/promises';
import {
  renderRearAssemblySvg,
  renderRearWheelSvg,
  renderWheelDrivetrainBaseSvg,
  renderWheelDrivetrainSvg
} from '../src/index.js';

await mkdir('examples/svg', { recursive: true });

const common = {
  hub: { preset: 'dt-swiss-240-exp-boost-rear-centerlock' },
  wheel: { spokeCount: 32 },
  cassette: {
    cogs: [10, 12, 14, 16, 18, 21, 24, 28, 32, 36, 42, 52],
    style: 'classicSteel'
  },
  style: { theme: 'realistic' }
};

await writeFile('examples/svg/rear-assembly-side.svg', renderRearAssemblySvg({ ...common, view: 'side' }));
await writeFile('examples/svg/rear-assembly-drive-face.svg', renderRearAssemblySvg({ ...common, view: 'driveFace' }));
const drivetrainOptions = {
  ...common,
  drivetrain: {
    chainring: 30,
    cogs: common.cassette.cogs,
    selectedCog: 36,
    chainstay: 435,
    style: 'classicSteel',
    animation: { enabled: true, rpm: 8 }
  }
};

await writeFile('examples/svg/wheel-drivetrain-animated.svg', renderWheelDrivetrainSvg(drivetrainOptions));
await writeFile('examples/svg/drivetrain-animated-base.svg', renderWheelDrivetrainBaseSvg(drivetrainOptions));
await writeFile('examples/svg/spinning-rear-wheel.svg', renderRearWheelSvg(common));
