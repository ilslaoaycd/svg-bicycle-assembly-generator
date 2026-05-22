import {
  calculateRearHubMount,
  renderWheelFaceGroup,
  renderWheelSideGroup
} from 'svg-bicycle-wheel-generator';
import {
  calculateCassetteStack,
  calculateDrivetrainLayout,
  renderCassetteGroup,
  renderDrivetrainSvg
} from 'svg-bicycle-drivetrain-generator';

function fmt(value) {
  return Number.isFinite(value) ? Number(value.toFixed(3)).toString() : String(value);
}

function attrs(attributes = {}) {
  return Object.entries(attributes)
    .filter(([, value]) => value !== undefined && value !== null && value !== false)
    .map(([key, value]) => value === true ? key : `${key}="${String(value)}"`)
    .join(' ');
}

function tag(name, attributes = {}, content = '') {
  const attributeText = attrs(attributes);
  const open = attributeText ? `<${name} ${attributeText}` : `<${name}`;
  return content === null ? `${open}/>` : `${open}>${content}</${name}>`;
}

function svgDocument(viewBox, content, attributes = {}) {
  return tag('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '100%',
    height: '100%',
    viewBox,
    preserveAspectRatio: 'xMidYMid meet',
    ...attributes
  }, content);
}

function extractSvgContent(svg) {
  return svg.replace(/^<svg\b[^>]*>/, '').replace(/<\/svg>$/, '');
}

function extractViewBox(svg) {
  const match = svg.match(/\sviewBox="([^"]+)"/);
  return match ? match[1].split(/\s+/).map(Number) : [-100, -100, 200, 200];
}

function expandViewBoxForCircle(viewBox, center, radius, padding = 24) {
  const minX = Math.min(viewBox[0], center.x - radius - padding);
  const minY = Math.min(viewBox[1], center.y - radius - padding);
  const maxX = Math.max(viewBox[0] + viewBox[2], center.x + radius + padding);
  const maxY = Math.max(viewBox[1] + viewBox[3], center.y + radius + padding);
  return [minX, minY, maxX - minX, maxY - minY];
}

function radToDeg(angle) {
  return angle * 180 / Math.PI;
}

function cassetteOptions(options = {}) {
  return options.cassette || {};
}

function cassetteCogs(options = {}) {
  return cassetteOptions(options).cogs || options.cogs || [10, 12, 14, 16, 18, 21, 24, 28, 32, 36, 42, 52];
}

function wheelOptions(options = {}) {
  return {
    wheel: options.wheel || {},
    hub: {
      hubPosition: 'rear',
      ...(options.hub || {})
    },
    style: options.wheelStyle || options.style?.wheel || options.style || {}
  };
}

function drivetrainStyleOptions(options = {}) {
  const cassette = cassetteOptions(options);
  return {
    style: cassette.style || options.drivetrain?.style,
    styleConfig: {
      showText: cassette.showText ?? false,
      ...(cassette.styleConfig || {})
    },
    generatorConfig: {
      pitch: cassette.pitch || options.drivetrain?.pitch || 12.7
    }
  };
}

export function calculateRearAssemblyLayout(options = {}) {
  const mount = calculateRearHubMount(wheelOptions(options));
  const cogs = cassetteCogs(options);
  const cassette = cassetteOptions(options);
  const stack = calculateCassetteStack(cogs, {
    generatorConfig: { pitch: cassette.pitch || options.drivetrain?.pitch || 12.7 },
    cogPitch: cassette.cogPitch,
    cogWidth: cassette.cogWidth,
    lockringWidth: cassette.lockringWidth
  });
  const lockringEndX = stack.lockringX + stack.lockringWidth;
  const cassetteScaleX = lockringEndX > 0 ? mount.freehubLength / lockringEndX : 1;
  const cassetteStartX = mount.freehubStartX;
  const cassetteEndX = cassetteStartX + (lockringEndX * cassetteScaleX);

  return {
    mount,
    cassette: {
      ...stack,
      scaleX: cassetteScaleX,
      mountStartX: cassetteStartX,
      mountEndX: cassetteEndX
    },
    axleCenter: mount.axleCenter,
    sideViewBox: [
      Math.min(mount.leftEndX - 40, -80),
      -mount.wheelOuterRadius - 30,
      Math.max(mount.rightEndX + 55, cassetteEndX + 35) - Math.min(mount.leftEndX - 40, -80),
      (mount.wheelOuterRadius + 30) * 2
    ],
    faceViewBox: [
      -mount.wheelOuterRadius - 30,
      -mount.wheelOuterRadius - 30,
      (mount.wheelOuterRadius + 30) * 2,
      (mount.wheelOuterRadius + 30) * 2
    ]
  };
}

export function renderRearAssemblySvg(options = {}) {
  const view = options.view || 'side';
  const layout = calculateRearAssemblyLayout(options);
  const cogs = cassetteCogs(options);
  const cassetteGroup = renderCassetteGroup(cogs, {
    ...drivetrainStyleOptions(options),
    view: view === 'side' ? 'side' : 'front',
    direction: 'ltr'
  });

  if (view === 'driveFace') {
    const wheel = renderWheelFaceGroup({
      ...wheelOptions(options),
      view: { wheelFaceSide: 'right', hubFaceSide: 'right' }
    });
    const cassette = tag('g', { class: 'assembly-cassette-face' }, cassetteGroup);
    return svgDocument(layout.faceViewBox.map(fmt).join(' '), [
      tag('g', { transform: 'translate(-350 -350)' }, wheel),
      cassette
    ].join(''), { class: 'bicycle-assembly-svg bicycle-assembly-drive-face' });
  }

  const wheel = renderWheelSideGroup(wheelOptions(options));
  const cassette = tag('g', {
    class: 'assembly-cassette-side',
    transform: `translate(${fmt(layout.cassette.mountStartX)} 0) scale(${fmt(layout.cassette.scaleX)} 1)`
  }, cassetteGroup);
  return svgDocument(layout.sideViewBox.map(fmt).join(' '), [
    tag('g', { transform: 'translate(-100 -375)' }, wheel),
    cassette
  ].join(''), { class: 'bicycle-assembly-svg bicycle-assembly-side' });
}

export function renderWheelDrivetrainSvg(options = {}) {
  const drivetrain = {
    preset: 'mtbTenFiftyTwo',
    ...(options.drivetrain || {}),
    animation: {
      enabled: true,
      rpm: 8,
      ...(options.animation || {}),
      ...(options.drivetrain?.animation || {})
    }
  };
  const layout = calculateDrivetrainLayout(drivetrain);
  const drivetrainSvg = renderDrivetrainSvg(drivetrain);
  const mount = calculateRearHubMount(wheelOptions(options));
  const viewBox = expandViewBoxForCircle(
    extractViewBox(drivetrainSvg),
    layout.rearCenter,
    mount.wheelOuterRadius
  );
  const wheel = renderWheelFaceGroup({
    ...wheelOptions(options),
    view: { wheelFaceSide: 'right', hubFaceSide: 'right' }
  });
  const wheelDuration = layout.animation?.cassetteDuration || 4;
  const wheelGroup = tag('g', {
    class: 'assembly-animated-rear-wheel',
    transform: `translate(${fmt(layout.rearCenter.x)} ${fmt(layout.rearCenter.y)}) rotate(${fmt(radToDeg(layout.rearRotation))})`
  }, `${tag('animateTransform', {
    attributeName: 'transform',
    type: 'rotate',
    from: `${fmt(radToDeg(layout.rearRotation))} 0 0`,
    to: `${fmt(radToDeg(layout.rearRotation) + 360)} 0 0`,
    dur: `${fmt(wheelDuration)}s`,
    repeatCount: 'indefinite',
    additive: 'sum'
  }, null)}${tag('g', { transform: 'translate(-350 -350)' }, wheel)}`);

  return svgDocument(viewBox.map(fmt).join(' '), [
    wheelGroup,
    tag('g', { class: 'assembly-drivetrain' }, extractSvgContent(drivetrainSvg))
  ].join(''), {
    class: 'bicycle-assembly-svg bicycle-assembly-wheel-drivetrain',
    'data-cassette-rpm': fmt(layout.animation?.cassetteRpm || 0),
    'data-wheel-duration': `${fmt(wheelDuration)}s`
  });
}

export class BicycleAssemblySVG {
  rearAssembly(options = {}) {
    return renderRearAssemblySvg(options);
  }

  wheelDrivetrain(options = {}) {
    return renderWheelDrivetrainSvg(options);
  }

  layout(options = {}) {
    return calculateRearAssemblyLayout(options);
  }
}

export default BicycleAssemblySVG;
