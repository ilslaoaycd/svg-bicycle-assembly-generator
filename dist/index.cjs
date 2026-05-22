var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  BicycleAssemblySVG: () => BicycleAssemblySVG,
  calculateRearAssemblyLayout: () => calculateRearAssemblyLayout,
  default: () => index_default,
  renderRearAssemblySvg: () => renderRearAssemblySvg,
  renderWheelDrivetrainSvg: () => renderWheelDrivetrainSvg
});
module.exports = __toCommonJS(index_exports);

// node_modules/svg-bicycle-wheel-generator/dist/index.mjs
var BASE_PALETTE = {
  svgBackground: "#ffffff",
  rimFaceFill: "#343a40",
  rimSideFill: "#343a40",
  rimStroke: "#212529",
  rimOutlineStroke: "#111111",
  rimHighlightStroke: "rgba(255,255,255,.15)",
  rimHoleFill: "#111111",
  rimHoleStroke: "#343a40",
  valveFill: "#ffffff",
  valveStroke: "#111111",
  valveLabelFill: "#495057",
  spokeLeftPulling: "#111111",
  spokeLeftTrailing: "#111111",
  spokeRightPulling: "#111111",
  spokeRightTrailing: "#111111",
  spokeBlack: "#111111",
  spokeSilver: "#ced4da",
  nippleSilver: "#111111",
  nippleBlack: "#111111",
  nippleDotFill: "#ffffff",
  nippleDotStroke: "#111111",
  hubAxleFill: "#ffffff",
  hubAxleStroke: "#111111",
  hubEndcapFill: "#ffffff",
  hubEndcapStroke: "#111111",
  hubShellFill: "#ffffff",
  hubShellStroke: "#111111",
  hubShellDtSwissFill: "#ffffff",
  hubShellIndustryNineFill: "#ffffff",
  hubFlangeLeftFill: "#ffffff",
  hubFlangeLeftStroke: "#111111",
  hubFlangeRightFill: "#ffffff",
  hubFlangeRightStroke: "#111111",
  hubMountFill: "#ffffff",
  hubMountStroke: "#111111",
  hubFreehubFill: "#ffffff",
  hubFreehubStroke: "#111111",
  hubBearingFill: "#ffffff",
  hubBearingStroke: "#111111",
  hubCutoutFill: "#ffffff",
  hubCutoutStroke: "#111111",
  hubHoleFill: "#111111",
  hubDetailStroke: "#111111",
  hubBlueprintStroke: "#111111",
  hubFluteStroke: "#111111",
  hubHighlightStroke: "#111111"
};
var STYLE_PRESETS = {
  drawing: {
    name: "Drawing",
    hubRenderStyle: "blueprint",
    wheel: { valveType: "presta" },
    hub: { showHubHoles: "hidden" },
    style: {
      spokeColor: "black",
      nippleStyle: "nipples",
      nippleColor: "black",
      spokeLayering: "3d"
    },
    palette: {
      ...BASE_PALETTE,
      rimFaceFill: "#e9ecef",
      rimSideFill: "#ffffff",
      rimStroke: "#111111",
      spokeBlack: "#111111",
      nippleBlack: "#111111",
      nippleSilver: "#111111",
      hubBlueprintStroke: "#6b7280"
    }
  },
  technical: {
    name: "Technical",
    hubRenderStyle: "blueprint",
    wheel: { valveType: "presta" },
    hub: { showHubHoles: "visible" },
    style: {
      spokeColor: "color",
      nippleStyle: "dots",
      nippleColor: "black",
      spokeLayering: "3d"
    },
    palette: {
      ...BASE_PALETTE,
      rimFaceFill: "#111111",
      rimSideFill: "#111111",
      rimStroke: "#111111",
      spokeLeftPulling: "#0d6efd",
      spokeLeftTrailing: "#0dcaf0",
      spokeRightPulling: "#fd7e14",
      spokeRightTrailing: "#ffc107",
      nippleDotFill: "#ffffff",
      nippleDotStroke: "#111111",
      hubFlangeLeftFill: "#e7f1ff",
      hubFlangeLeftStroke: "#0d6efd",
      hubFlangeRightFill: "#fff3cd",
      hubFlangeRightStroke: "#fd7e14",
      hubHoleFill: "#111111",
      hubBlueprintStroke: "#8aa8c2"
    }
  },
  realistic: {
    name: "Realistic",
    hubRenderStyle: "realistic",
    wheel: { valveType: "presta" },
    hub: { showHubHoles: "hidden" },
    style: {
      spokeColor: "black",
      nippleStyle: "nipples",
      nippleColor: "black",
      spokeLayering: "3d"
    },
    palette: {
      ...BASE_PALETTE,
      svgBackground: "#ffffff",
      rimFaceFill: "#222529",
      rimSideFill: "#222529",
      rimStroke: "#111111",
      rimOutlineStroke: "#111111",
      rimHighlightStroke: "rgba(255,255,255,.18)",
      rimHoleFill: "#101214",
      rimHoleStroke: "#101214",
      valveFill: "#2f3438",
      valveStroke: "#111111",
      spokeBlack: "#111111",
      nippleBlack: "#111111",
      nippleSilver: "#111111",
      hubAxleFill: "#d9dcde",
      hubAxleStroke: "#222222",
      hubEndcapFill: "#7d848a",
      hubEndcapStroke: "#25282b",
      hubShellFill: "#bfc4c8",
      hubShellStroke: "#3c4145",
      hubShellDtSwissFill: "#c9ced2",
      hubShellIndustryNineFill: "#b5bcc1",
      hubFlangeLeftFill: "#d2d6d9",
      hubFlangeLeftStroke: "#3c4145",
      hubFlangeRightFill: "#aeb5ba",
      hubFlangeRightStroke: "#3c4145",
      hubMountFill: "#969da3",
      hubMountStroke: "#2c3033",
      hubFreehubFill: "#c8ccd0",
      hubFreehubStroke: "#3c4145",
      hubBearingFill: "#6f767c",
      hubBearingStroke: "#2c3033",
      hubCutoutFill: "#f1f2f3",
      hubCutoutStroke: "#3c4145",
      hubHoleFill: "#111111",
      hubDetailStroke: "#24272a",
      hubBlueprintStroke: "#24272a",
      hubFluteStroke: "#6d747a",
      hubHighlightStroke: "#eceff1"
    }
  },
  light: {
    name: "Light",
    hubRenderStyle: "realistic",
    wheel: { valveType: "presta" },
    hub: { showHubHoles: "hidden" },
    style: {
      spokeColor: "silver",
      nippleStyle: "nipples",
      nippleColor: "silver",
      spokeLayering: "3d"
    },
    palette: {
      ...BASE_PALETTE,
      svgBackground: "#0b0f14",
      rimFaceFill: "#d9e2ea",
      rimSideFill: "#d9e2ea",
      rimStroke: "#f8fafc",
      rimOutlineStroke: "#f8fafc",
      rimHighlightStroke: "rgba(255,255,255,.42)",
      rimHoleFill: "#f8fafc",
      rimHoleStroke: "#d9e2ea",
      valveFill: "#f8fafc",
      valveStroke: "#e5eef7",
      spokeSilver: "#edf4fb",
      nippleSilver: "#f8fafc",
      hubAxleFill: "#fbfdff",
      hubAxleStroke: "#d9e2ea",
      hubEndcapFill: "#d7e0e8",
      hubEndcapStroke: "#f8fafc",
      hubShellFill: "#eef4fa",
      hubShellStroke: "#d6e1ea",
      hubShellDtSwissFill: "#f5f9fc",
      hubShellIndustryNineFill: "#e7f0f7",
      hubFlangeLeftFill: "#f6fbff",
      hubFlangeLeftStroke: "#d6e1ea",
      hubFlangeRightFill: "#dce7ef",
      hubFlangeRightStroke: "#d6e1ea",
      hubMountFill: "#d5dee7",
      hubMountStroke: "#f8fafc",
      hubFreehubFill: "#eef4fa",
      hubFreehubStroke: "#d6e1ea",
      hubBearingFill: "#c8d4de",
      hubBearingStroke: "#f8fafc",
      hubCutoutFill: "#0b0f14",
      hubCutoutStroke: "#d6e1ea",
      hubHoleFill: "#f8fafc",
      hubDetailStroke: "#f8fafc",
      hubBlueprintStroke: "#c7d7e5",
      hubFluteStroke: "#d6e1ea",
      hubHighlightStroke: "#ffffff"
    }
  }
};
var TOKEN_TO_VAR = Object.fromEntries(Object.keys(BASE_PALETTE).map((key) => [
  key,
  `--wheel-${key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`
]));
function compact(object) {
  return Object.fromEntries(Object.entries(object || {}).filter(([, value]) => value !== void 0));
}
function resolveStyleOptions(style = {}) {
  const themeName = style.theme || style.hubRenderStyle || "drawing";
  const preset = STYLE_PRESETS[themeName] || STYLE_PRESETS.drawing;
  const presetStyle = preset.style || {};
  const hubRenderStyle = style.hubRenderStyle || preset.hubRenderStyle || "blueprint";
  return {
    ...presetStyle,
    ...style,
    theme: themeName,
    hubRenderStyle,
    paintMode: style.paintMode || presetStyle.paintMode || "hybrid",
    palette: {
      ...BASE_PALETTE,
      ...compact(preset.palette),
      ...compact(style.palette)
    }
  };
}
function stylePresetOptions(style = {}) {
  const themeName = style.theme || style.hubRenderStyle || "drawing";
  const preset = STYLE_PRESETS[themeName] || STYLE_PRESETS.drawing;
  return {
    wheel: preset.wheel || {},
    hub: preset.hub || {},
    style: preset.style || {}
  };
}
function cssVar(token, fallback) {
  return `var(${TOKEN_TO_VAR[token]}, ${fallback})`;
}
function paintValue(style, token) {
  const resolved = resolveStyleOptions(style);
  const value = resolved.palette[token] || BASE_PALETTE[token];
  if (resolved.paintMode === "css") return void 0;
  if (resolved.paintMode === "inline") return value;
  return cssVar(token, value);
}
function paintAttrs(style, map) {
  return Object.fromEntries(Object.entries(map).flatMap(([attribute, token]) => {
    const value = paintValue(style, token);
    return value === void 0 ? [] : [[attribute, value]];
  }));
}
function hubPaintStyles(style = {}) {
  const line2 = {
    ...paintAttrs(style, { stroke: "hubBlueprintStroke" }),
    fill: "none",
    "stroke-width": 0.7,
    "stroke-dasharray": "3 3"
  };
  const detail = {
    ...paintAttrs(style, { stroke: "hubDetailStroke" }),
    fill: "none",
    "stroke-width": 1,
    "stroke-linecap": "round"
  };
  return {
    axle: { ...paintAttrs(style, { fill: "hubAxleFill", stroke: "hubAxleStroke" }), "stroke-width": 0.8 },
    endcap: { ...paintAttrs(style, { fill: "hubEndcapFill", stroke: "hubEndcapStroke" }), "stroke-width": 1 },
    shell: { ...paintAttrs(style, { fill: "hubShellFill", stroke: "hubShellStroke" }), "stroke-width": 1.2 },
    flangeLeft: { ...paintAttrs(style, { fill: "hubFlangeLeftFill", stroke: "hubFlangeLeftStroke" }), "stroke-width": 1.1 },
    flangeRight: { ...paintAttrs(style, { fill: "hubFlangeRightFill", stroke: "hubFlangeRightStroke" }), "stroke-width": 1.1 },
    mount: { ...paintAttrs(style, { fill: "hubMountFill", stroke: "hubMountStroke" }), "stroke-width": 1 },
    freehub: { ...paintAttrs(style, { fill: "hubFreehubFill", stroke: "hubFreehubStroke" }), "stroke-width": 1 },
    bearing: { ...paintAttrs(style, { fill: "hubBearingFill", stroke: "hubBearingStroke" }), "stroke-width": 1 },
    cutout: { ...paintAttrs(style, { fill: "hubCutoutFill", stroke: "hubCutoutStroke" }), "stroke-width": 0.7 },
    hole: { ...paintAttrs(style, { fill: "hubHoleFill" }), stroke: "none" },
    line: line2,
    detail,
    faceReference: line2,
    faceBearing: {
      ...paintAttrs(style, { stroke: "hubAxleStroke" }),
      fill: "none",
      "stroke-width": 2,
      "stroke-dasharray": "2 2"
    }
  };
}
function rule(selector, declarations) {
  return `${selector}{${Object.entries(declarations).filter(([, value]) => value !== void 0 && value !== null).map(([property, value]) => `${property}:${value}`).join(";")}}`;
}
function v(token, palette) {
  return cssVar(token, palette[token] || BASE_PALETTE[token]);
}
function createVisualizerStyle(style = {}) {
  const { palette } = resolveStyleOptions(style);
  return [
    rule(".wheel-svg,.hub-svg", { background: v("svgBackground", palette) }),
    rule(".rim-body", { fill: v("rimSideFill", palette), stroke: v("rimStroke", palette), "stroke-width": 1, "fill-rule": "evenodd" }),
    rule(".rim-outline", { fill: "none", stroke: v("rimOutlineStroke", palette), "stroke-width": 1.5 }),
    rule(".rim-highlight", { fill: "none", stroke: v("rimHighlightStroke", palette), "stroke-width": 1 }),
    rule(".rim-hole", { fill: v("rimHoleFill", palette), stroke: v("rimHoleStroke", palette), "stroke-width": 0.5 }),
    rule(".valve-hole-marker", { fill: v("valveFill", palette) }),
    rule(".valve-hole-line", { stroke: v("valveStroke", palette), "stroke-width": 2.5, "stroke-linecap": "round" }),
    rule(".valve-label", { "font-family": "sans-serif", "font-size": "14px", fill: v("valveLabelFill", palette), "font-weight": "bold" }),
    rule(".wheel-valve-part", { fill: v("valveFill", palette), stroke: v("valveStroke", palette), "stroke-width": 1 }),
    rule(".spoke-nipple", { "stroke-width": 5, "stroke-linecap": "butt" }),
    rule(".spoke-nipple-dot", { fill: v("nippleDotFill", palette), stroke: v("nippleDotStroke", palette), "stroke-width": 1 }),
    rule(".nipple-theme-silver .spoke-nipple", { stroke: v("nippleSilver", palette) }),
    rule(".nipple-theme-black .spoke-nipple", { stroke: v("nippleBlack", palette) }),
    rule(".spoke", { "stroke-width": 1.5, "stroke-linecap": "round" }),
    rule(".spoke-theme-color .spoke-left.spoke-pulling", { stroke: v("spokeLeftPulling", palette) }),
    rule(".spoke-theme-color .spoke-left.spoke-trailing", { stroke: v("spokeLeftTrailing", palette) }),
    rule(".spoke-theme-color .spoke-right.spoke-pulling", { stroke: v("spokeRightPulling", palette), "stroke-dasharray": "4 4" }),
    rule(".spoke-theme-color .spoke-right.spoke-trailing", { stroke: v("spokeRightTrailing", palette), "stroke-dasharray": "4 4" }),
    rule(".spoke-theme-black .spoke", { stroke: v("spokeBlack", palette) }),
    rule(".spoke-theme-silver .spoke", { stroke: v("spokeSilver", palette) }),
    rule(".hub-axle,.hub-axle-tip", { fill: v("hubAxleFill", palette), stroke: v("hubAxleStroke", palette), "stroke-width": 0.8 }),
    rule(".hub-endcap", { fill: v("hubEndcapFill", palette), stroke: v("hubEndcapStroke", palette), "stroke-width": 1 }),
    rule(".hub-cylinder,.hub-shell-body", { fill: v("hubShellFill", palette), stroke: v("hubShellStroke", palette), "stroke-width": 1.2, "fill-rule": "evenodd" }),
    rule(".hub-brand-dt-swiss .hub-shell-body", { fill: v("hubShellDtSwissFill", palette) }),
    rule(".hub-brand-industry-nine .hub-shell-body", { fill: v("hubShellIndustryNineFill", palette) }),
    rule(".hub-flange-left", { fill: v("hubFlangeLeftFill", palette), stroke: v("hubFlangeLeftStroke", palette), "stroke-width": 1, "fill-rule": "evenodd" }),
    rule(".hub-flange-right", { fill: v("hubFlangeRightFill", palette), stroke: v("hubFlangeRightStroke", palette), "stroke-width": 1, "fill-rule": "evenodd" }),
    rule(".hub-flange-plate", { "stroke-width": 1.1 }),
    rule(".hub-brake-mount,.hub-centerlock-side,.hub-sixbolt-side", { fill: v("hubMountFill", palette), stroke: v("hubMountStroke", palette), "stroke-width": 1, "fill-rule": "evenodd" }),
    rule(".hub-cylinder-freehub", { fill: v("hubFreehubFill", palette), stroke: v("hubFreehubStroke", palette), "stroke-width": 1, "fill-rule": "evenodd" }),
    rule(".hub-cylinder-dark,.hub-bearing-ring,.hub-freehub-inner-shoulder,.hub-freehub-thread-step", { fill: v("hubBearingFill", palette), stroke: v("hubBearingStroke", palette), "stroke-width": 1 }),
    rule(".hub-flange-cutout,.hub-flange-scallop", { fill: v("hubCutoutFill", palette), stroke: v("hubCutoutStroke", palette), "stroke-width": 0.7 }),
    rule(".hub-spoke-hole-side", { fill: v("hubHoleFill", palette), stroke: "none" }),
    rule(".hub-bolt-head-side", { fill: v("hubCutoutFill", palette), stroke: v("hubDetailStroke", palette), "stroke-width": 0.6 }),
    rule(".hub-spline-line,.hub-freehub-spline,.hub-centerlock-tooth,.hub-sixbolt-side-line,.hub-freehub-thread-line,.hub-freehub-final-step-line,.hub-straightpull-slot-side", { stroke: v("hubDetailStroke", palette), "stroke-width": 1, "stroke-linecap": "round", fill: "none" }),
    rule(".hub-blueprint-line", { stroke: v("hubBlueprintStroke", palette), "stroke-width": 0.7, "stroke-dasharray": "3 3", fill: "none", opacity: 0.9 }),
    rule(".hub-shell-flute", { stroke: v("hubFluteStroke", palette), "stroke-width": 0.9, "stroke-linecap": "round", fill: "none" }),
    rule(".hub-shell-highlight", { stroke: v("hubHighlightStroke", palette), "stroke-width": 1, "stroke-linecap": "round" }),
    rule(".hub-centerlock-solid-ring,.hub-freehub-xd-center-ring", { fill: "none", stroke: v("hubDetailStroke", palette), "stroke-width": 1 }),
    rule(".hub-centerlock-dashed-ring,.hub-freehub-xd-middle-ring", { fill: "none", stroke: v("hubDetailStroke", palette), "stroke-width": 1, "stroke-dasharray": "1 1" })
  ].join("");
}
var DEFAULT_WHEEL = {
  outerDia: 634,
  erd: 601,
  rimWidth: 25,
  rimOffset: 0,
  spokeCount: 32,
  valveType: "presta"
};
var DEFAULT_HUB = {
  hubPosition: "rear",
  brakeType: "6bolt",
  hubType: "jbend",
  showHubHoles: "visible",
  builtInDimension: 142,
  leftFlangeDia: 58,
  rightFlangeDia: 52,
  leftFlangeCenter: 36.6,
  rightFlangeCenter: 23.3,
  spokeHoleDia: 2.6,
  brandStyle: "generic",
  shellStyle: "tapered",
  shellWaistDia: 24,
  shellBodyDia: 31,
  flangeThickness: 4,
  endcapLength: 8,
  endcapDia: 18,
  freehubLength: 36,
  freehubDia: 35,
  freehubType: "hg",
  brakeMountWidth: 5,
  brakeMountDia: 44,
  flangeCutoutStyle: "none",
  flangeStickOut: 4,
  centerShellDia: 25,
  curveDrama: 0.35
};
var HUB_PRESETS = {
  "dt-swiss-350-mtb-boost-rear-6bolt": {
    name: "DT Swiss 350 MTB Boost Rear 6-Bolt",
    hubPosition: "rear",
    brakeType: "6bolt",
    hubType: "jbend",
    builtInDimension: 148,
    leftFlangeDia: 60,
    rightFlangeDia: 50.5,
    leftFlangeCenter: 36.6,
    rightFlangeCenter: 23.4,
    spokeHoleDia: 2.6,
    brandStyle: "dt-swiss",
    shellStyle: "smooth-taper",
    shellWaistDia: 23,
    shellBodyDia: 32,
    flangeThickness: 4,
    endcapLength: 8,
    endcapDia: 19,
    freehubLength: 37,
    freehubDia: 34,
    freehubType: "xd",
    brakeMountWidth: 5,
    brakeMountDia: 44,
    flangeCutoutStyle: "lightening-slots",
    flangeStickOut: 4,
    centerShellDia: 25,
    curveDrama: 0.32
  },
  "dt-swiss-240-exp-boost-rear-centerlock": {
    name: "DT Swiss 240 EXP Boost Rear Center Lock",
    hubPosition: "rear",
    brakeType: "centerlock",
    hubType: "jbend",
    builtInDimension: 148,
    leftFlangeDia: 50.4,
    rightFlangeDia: 50.4,
    leftFlangeCenter: 37.3,
    rightFlangeCenter: 22.6,
    spokeHoleDia: 2.5,
    brandStyle: "dt-swiss",
    shellStyle: "smooth-taper",
    shellWaistDia: 22,
    shellBodyDia: 30,
    flangeThickness: 3.5,
    endcapLength: 8,
    endcapDia: 18,
    freehubLength: 37,
    freehubDia: 33,
    freehubType: "hg",
    brakeMountWidth: 5,
    brakeMountDia: 42,
    flangeCutoutStyle: "lightening-slots",
    flangeStickOut: 4,
    centerShellDia: 24,
    curveDrama: 0.3
  },
  "industry-nine-hydra2-boost-rear-6bolt": {
    name: "Industry Nine Hydra2 Classic 12x148 Rear 6-Bolt",
    hubPosition: "rear",
    brakeType: "6bolt",
    hubType: "jbend",
    builtInDimension: 148,
    leftFlangeDia: 59.5,
    rightFlangeDia: 62,
    leftFlangeCenter: 36.9,
    rightFlangeCenter: 23.7,
    spokeHoleDia: 2.6,
    brandStyle: "industry-nine",
    shellStyle: "fluted",
    shellWaistDia: 25,
    shellBodyDia: 34,
    flangeThickness: 5,
    endcapLength: 8,
    endcapDia: 19,
    freehubLength: 37,
    freehubDia: 36,
    freehubType: "xd",
    brakeMountWidth: 5,
    brakeMountDia: 46,
    flangeCutoutStyle: "scalloped",
    flangeStickOut: 5,
    centerShellDia: 28,
    curveDrama: 0.42
  },
  "industry-nine-solix-road-rear-centerlock": {
    name: "Industry Nine Solix CL Road Rear",
    hubPosition: "rear",
    brakeType: "centerlock",
    hubType: "jbend",
    builtInDimension: 142,
    leftFlangeDia: 41,
    rightFlangeDia: 53,
    leftFlangeCenter: 33,
    rightFlangeCenter: 19,
    spokeHoleDia: 2.5,
    brandStyle: "industry-nine",
    shellStyle: "fluted",
    shellWaistDia: 23,
    shellBodyDia: 31,
    flangeThickness: 4.5,
    endcapLength: 7,
    endcapDia: 18,
    freehubLength: 37,
    freehubDia: 34,
    freehubType: "xd",
    brakeMountWidth: 5,
    brakeMountDia: 42,
    flangeCutoutStyle: "scalloped",
    flangeStickOut: 4,
    centerShellDia: 24,
    curveDrama: 0.38
  }
};
var DEFAULT_LACING = {
  crossPattern: 3
};
var DEFAULT_VIEW = {
  wheelFaceSide: "left",
  hubFaceSide: "left"
};
function round(value, decimals = 1) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
function polar(centerX, centerY, radius, angle) {
  return {
    x: centerX + radius * Math.cos(angle),
    y: centerY + radius * Math.sin(angle),
    angle
  };
}
function normalizeFreehubType(type = "hg") {
  const normalized = String(type).toLowerCase();
  if (normalized.includes("micro")) return "microspline";
  if (normalized.includes("xd")) return "xd";
  return "hg";
}
function normalizeOptions(options = {}) {
  const flatWheel = {
    outerDia: options.outerDia,
    erd: options.erd,
    rimWidth: options.rimWidth,
    rimOffset: options.rimOffset,
    spokeCount: options.spokeCount,
    valveType: options.valveType
  };
  const flatHub = {
    hubPosition: options.hubPosition,
    brakeType: options.brakeType,
    hubType: options.hubType,
    showHubHoles: options.showHubHoles,
    preset: options.preset,
    builtInDimension: options.builtInDimension,
    leftFlangeDia: options.leftFlangeDia,
    rightFlangeDia: options.rightFlangeDia,
    leftFlangeCenter: options.leftFlangeCenter,
    rightFlangeCenter: options.rightFlangeCenter,
    spokeHoleDia: options.spokeHoleDia,
    brandStyle: options.brandStyle,
    shellStyle: options.shellStyle,
    shellWaistDia: options.shellWaistDia,
    shellBodyDia: options.shellBodyDia,
    flangeThickness: options.flangeThickness,
    endcapLength: options.endcapLength,
    endcapDia: options.endcapDia,
    freehubLength: options.freehubLength,
    freehubDia: options.freehubDia,
    freehubType: options.freehubType,
    brakeMountWidth: options.brakeMountWidth,
    brakeMountDia: options.brakeMountDia,
    flangeCutoutStyle: options.flangeCutoutStyle,
    flangeStickOut: options.flangeStickOut,
    centerShellDia: options.centerShellDia,
    curveDrama: options.curveDrama
  };
  const compact2 = (object) => Object.fromEntries(Object.entries(object).filter(([, value]) => value !== void 0));
  const wheelOptions2 = { ...compact2(flatWheel), ...options.wheel || {} };
  const hubOptions = { ...compact2(flatHub), ...options.hub || {} };
  const hubPreset = HUB_PRESETS[hubOptions.preset] || {};
  const styleInput = typeof options.style === "object" ? options.style : {};
  const presetOptions = stylePresetOptions(styleInput);
  const view = typeof options.view === "string" ? { wheelFaceSide: options.view, hubFaceSide: options.view } : options.view || {};
  const hub = { ...DEFAULT_HUB, ...hubPreset, ...presetOptions.hub, ...hubOptions };
  hub.freehubType = normalizeFreehubType(hub.freehubType);
  if (hub.brakeType === "rim") {
    hub.brakeMountWidth = 0;
  }
  return {
    wheel: { ...DEFAULT_WHEEL, ...presetOptions.wheel, ...wheelOptions2 },
    hub,
    lacing: { ...DEFAULT_LACING, ...options.lacing || {} },
    view: { ...DEFAULT_VIEW, ...view },
    style: resolveStyleOptions(styleInput)
  };
}
function calculateSpokeLength(params) {
  const theta = 4 * Math.PI * params.crossPattern / params.spokeCount;
  const erdRadius = params.erd / 2;
  const flangeRadius = params.flangeDia / 2;
  const planarDistance = Math.sqrt(
    erdRadius ** 2 + flangeRadius ** 2 - 2 * erdRadius * flangeRadius * Math.cos(theta)
  );
  return Math.sqrt(planarDistance ** 2 + params.flangeCenter ** 2) - (params.spokeHoleDia || 2.6) / 2 + (params.lengthAdjustment || 0);
}
function calculateWheelBuild(options = {}) {
  const config = normalizeOptions(options);
  const { wheel, hub, lacing } = config;
  const left = calculateSpokeLength({
    erd: wheel.erd,
    flangeDia: hub.leftFlangeDia,
    flangeCenter: hub.leftFlangeCenter,
    spokeHoleDia: hub.spokeHoleDia,
    spokeCount: wheel.spokeCount,
    crossPattern: lacing.crossPattern
  });
  const right = calculateSpokeLength({
    erd: wheel.erd,
    flangeDia: hub.rightFlangeDia,
    flangeCenter: hub.rightFlangeCenter,
    spokeHoleDia: hub.spokeHoleDia,
    spokeCount: wheel.spokeCount,
    crossPattern: lacing.crossPattern
  });
  return { left, right, roundedLeft: round(left, 1), roundedRight: round(right, 1) };
}
function calculateRearHubMount(options = {}) {
  const config = normalizeOptions(options);
  const old = config.hub.builtInDimension || (config.hub.hubPosition === "front" ? 100 : 142);
  const endcapLength = config.hub.endcapLength || 8;
  const flangeThickness = (config.hub.flangeThickness || 4) * (config.hub.hubType === "straightpull" ? 1.5 : 1);
  const rightEndX = old / 2;
  const rightEndcapStart = rightEndX - endcapLength;
  const rightFlangeX = config.hub.rightFlangeCenter;
  const rightFlangeOuterX = rightFlangeX + flangeThickness / 2;
  const freehubLength = config.hub.hubPosition === "rear" ? config.hub.freehubLength : 0;
  const freehubStartX = Math.max(rightEndcapStart - freehubLength, rightFlangeOuterX + 2);
  const freehubEndX = rightEndcapStart;
  return {
    axleCenter: { x: 0, y: 0 },
    driveSide: "right",
    brakeSide: "left",
    overLocknutDimension: old,
    leftEndX: -old / 2,
    rightEndX,
    freehubStartX,
    freehubEndX,
    freehubLength: Math.max(0, freehubEndX - freehubStartX),
    freehubRadius: (config.hub.freehubDia || 34) / 2,
    wheelOuterRadius: config.wheel.outerDia / 2,
    wheelInnerRadius: config.wheel.erd / 2,
    rimOffset: config.wheel.rimOffset,
    hub: config.hub,
    wheel: config.wheel
  };
}
function rimHolePositions(options = {}, layout = {}) {
  const config = normalizeOptions(options);
  const center = layout.center || 0;
  const radius = layout.radius || config.wheel.erd / 2;
  const count = config.wheel.spokeCount;
  const step = 2 * Math.PI / count;
  return Array.from({ length: count }, (_item, index) => {
    const angle = -Math.PI / 2 + step / 2 + index * step;
    return { index, ...polar(center, center, radius, angle) };
  });
}
function hubHolePositions(options = {}, layout = {}) {
  const config = normalizeOptions(options);
  const center = layout.center || 0;
  const spokesPerSide = config.wheel.spokeCount / 2;
  const rimStep = 2 * Math.PI / config.wheel.spokeCount;
  const hubStep = 2 * Math.PI / spokesPerSide;
  const safeCross = Math.floor(config.lacing.crossPattern);
  const patternShift = safeCross % 2 === 0 && safeCross > 0 ? 2 : 0;
  const hubAngleOffset = patternShift * rimStep;
  return {
    left: Array.from({ length: spokesPerSide }, (_item, index) => {
      const angle = -Math.PI / 2 + rimStep / 2 + index * hubStep + hubAngleOffset;
      return { index, ...polar(center, center, config.hub.leftFlangeDia / 2, angle) };
    }),
    right: Array.from({ length: spokesPerSide }, (_item, index) => {
      const angle = -Math.PI / 2 + rimStep / 2 + index * hubStep + hubAngleOffset + hubStep / 2;
      return { index, ...polar(center, center, config.hub.rightFlangeDia / 2, angle) };
    })
  };
}
function lacingMap(options = {}) {
  const config = normalizeOptions(options);
  const count = config.wheel.spokeCount;
  const spokesPerSide = count / 2;
  const safeCross = Math.floor(config.lacing.crossPattern);
  const patternShift = safeCross % 2 === 0 && safeCross > 0 ? 2 : 0;
  function sideMap(side, rimOffset) {
    return Array.from({ length: spokesPerSide }, (_item, index) => {
      const isPulling = index % 2 === 0;
      const rawIndex = safeCross === 0 ? index * 2 + rimOffset + patternShift : index * 2 + (isPulling ? safeCross * 2 : -safeCross * 2) + rimOffset + patternShift;
      return {
        side,
        hubIndex: index,
        rimIndex: (Math.round(rawIndex) % count + count) % count,
        type: isPulling ? "pulling" : "trailing",
        crosses: safeCross,
        patternShift
      };
    });
  }
  return [...sideMap("left", 0), ...sideMap("right", 1)];
}
function fmt(value) {
  return Number.isFinite(value) ? Number(value.toFixed(3)).toString() : String(value);
}
function roundNumbers(value) {
  return String(value).replace(/-?(?:\d+\.\d+|\d+\.|\.\d+)(?:e[+-]?\d+)?|-?\d+e[+-]?\d+/gi, (match) => fmt(Number(match)));
}
function formatPathData(d) {
  return roundNumbers(d);
}
function formatAttribute(key, value) {
  if (typeof value === "number") return fmt(value);
  if (key === "d" || key === "viewBox" || key === "points" || key === "transform" || key === "stroke-dasharray") return roundNumbers(value);
  return value;
}
function escapeText(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
function attrs(attributes = {}) {
  return Object.entries(attributes).filter(([, value]) => value !== void 0 && value !== null && value !== false).map(([key, value]) => value === true ? key : `${key}="${escapeText(formatAttribute(key, value))}"`).join(" ");
}
function tag(name, attributes = {}, content = "") {
  const attributeText = attrs(attributes);
  const open = attributeText ? `<${name} ${attributeText}` : `<${name}`;
  return content === null ? `${open}/>` : `${open}>${content}</${name}>`;
}
function line(x1, y1, x2, y2, attributes = {}) {
  return tag("line", { x1: fmt(x1), y1: fmt(y1), x2: fmt(x2), y2: fmt(y2), ...attributes }, null);
}
function circle(cx, cy, r, attributes = {}) {
  return tag("circle", { cx: fmt(cx), cy: fmt(cy), r: fmt(r), ...attributes }, null);
}
function rect(x, y, width, height, attributes = {}) {
  return tag("rect", { x: fmt(x), y: fmt(y), width: fmt(width), height: fmt(height), ...attributes }, null);
}
function path(d, attributes = {}) {
  return tag("path", { d: formatPathData(d), ...attributes }, null);
}
function svgDocument(width, height, viewBox, content, style = "", attributes = {}) {
  return tag("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width,
    height,
    viewBox,
    preserveAspectRatio: "xMidYMid meet",
    ...attributes
  }, `${style ? tag("style", {}, style) : ""}${content}`);
}
function visualizerStyle(style = {}) {
  return createVisualizerStyle(style);
}
function circlePath(cx, cy, r, clockwise = true) {
  const sweep = clockwise ? 1 : 0;
  return `M ${cx} ${cy - r} A ${r} ${r} 0 0 ${sweep} ${cx} ${cy + r} A ${r} ${r} 0 0 ${sweep} ${cx} ${cy - r} Z `;
}
function closedFitSplinePath(points, tension = 0.45) {
  if (points.length < 3) return "";
  let d = `M ${points[0].x} ${points[0].y} `;
  points.forEach((point, index) => {
    const previous = points[(index - 1 + points.length) % points.length];
    const next = points[(index + 1) % points.length];
    const afterNext = points[(index + 2) % points.length];
    const cp1 = {
      x: point.x + (next.x - previous.x) * tension / 6,
      y: point.y + (next.y - previous.y) * tension / 6
    };
    const cp2 = {
      x: next.x - (afterNext.x - point.x) * tension / 6,
      y: next.y - (afterNext.y - point.y) * tension / 6
    };
    d += `C ${cp1.x} ${cp1.y} ${cp2.x} ${cp2.y} ${next.x} ${next.y} `;
  });
  return `${d}Z `;
}
function createJBendFlangePath(cx, cy, outerRadius, holes, showHoles) {
  let d = circlePath(cx, cy, outerRadius, true);
  if (showHoles) {
    holes.forEach((point) => {
      d += circlePath(point.x, point.y, 1.8, false);
    });
  }
  d += circlePath(cx, cy, 6, false);
  return d;
}
function create6BoltPath(cx, cy) {
  const points = [];
  for (let index = 0; index < 6; index += 1) {
    const angle = index * (Math.PI / 3);
    points.push(
      polar(cx, cy, 16.7, angle - 0.32),
      polar(cx, cy, 21.3, angle - 0.39),
      polar(cx, cy, 26, angle - 0.29),
      polar(cx, cy, 28.6, angle - 0.075),
      polar(cx, cy, 28.6, angle + 0.075),
      polar(cx, cy, 26, angle + 0.29),
      polar(cx, cy, 21.3, angle + 0.39),
      polar(cx, cy, 16.7, angle + 0.32),
      polar(cx, cy, 13.8, angle + Math.PI / 6)
    );
  }
  let d = closedFitSplinePath(points);
  for (let index = 0; index < 6; index += 1) {
    const boltCenter = polar(cx, cy, 22, index * (Math.PI / 3));
    d += circlePath(boltCenter.x, boltCenter.y, 2.8, false);
  }
  d += circlePath(cx, cy, 6, false);
  return d;
}
function createFreehubSplineFacePath(cx, cy, options = {}) {
  const majorRadius = 17.45;
  const minorRadius = 15.9;
  const chamferDepth = 0.4;
  const chamferRad = 0.025;
  const toothCount = options.toothCount || 9;
  const innerRadius = options.innerRadius || 10;
  const splineScale = options.splineScale || 1;
  const standardSpline = 2 * Math.PI / toothCount * 0.6 * splineScale;
  const standardValley = 2 * Math.PI / toothCount - standardSpline;
  const pattern = Array.from({ length: toothCount }, (_item, index) => {
    if (toothCount === 9 && index === 0) return [standardSpline * 0.55, standardValley * 0.7];
    if (toothCount === 9 && index === toothCount - 1) return [standardSpline, standardValley * 1.25];
    return [standardSpline, standardValley];
  });
  let d = "";
  let currentAngle = -Math.PI / 2 - pattern[0][0] / 2;
  pattern.forEach(([splineWidth, valleyWidth], index) => {
    const start = currentAngle;
    const end = currentAngle + splineWidth;
    const nextStart = end + valleyWidth;
    const p1 = polar(cx, cy, minorRadius, start);
    const p2 = polar(cx, cy, majorRadius - chamferDepth, start);
    const p3 = polar(cx, cy, majorRadius, start + chamferRad);
    const p4 = polar(cx, cy, majorRadius, end - chamferRad);
    const p5 = polar(cx, cy, majorRadius - chamferDepth, end);
    const p6 = polar(cx, cy, minorRadius, end);
    const pNext = polar(cx, cy, minorRadius, nextStart);
    if (index === 0) d += `M ${p1.x} ${p1.y} `;
    d += `L ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${majorRadius} ${majorRadius} 0 0 1 ${p4.x} ${p4.y} L ${p5.x} ${p5.y} L ${p6.x} ${p6.y} `;
    d += `A ${minorRadius} ${minorRadius} 0 0 1 ${pNext.x} ${pNext.y} `;
    currentAngle = nextStart;
  });
  return `${d}Z ${circlePath(cx, cy, innerRadius, false)}`;
}
function createHGFreehubFacePath(cx, cy) {
  return createFreehubSplineFacePath(cx, cy);
}
function createMicrosplineFreehubFacePath(cx, cy) {
  return createFreehubSplineFacePath(cx, cy, { toothCount: 18, splineScale: 0.72 });
}
function createXDFreehubFacePath(cx, cy) {
  return createFreehubSplineFacePath(cx, cy, { innerRadius: 15 });
}
function createStraightPullFlangePath(cx, cy, radius, holes) {
  const arms = Math.floor(holes.length / 2);
  if (arms === 0) return "";
  let firstAngle = Math.atan2(holes[0].y - cy, holes[0].x - cx);
  let secondAngle = Math.atan2(holes[1].y - cy, holes[1].x - cx);
  if (firstAngle < 0) firstAngle += 2 * Math.PI;
  if (secondAngle < 0) secondAngle += 2 * Math.PI;
  if (secondAngle < firstAngle) secondAngle += 2 * Math.PI;
  const armGap = secondAngle - firstAngle;
  const slice = 2 * Math.PI / arms;
  const emptySpace = slice - armGap;
  const outerRadius = radius + 6;
  const innerRadius = Math.max(14, radius - 8);
  const valleyRadius = Math.max(10, innerRadius - 5);
  const padLength = Math.min(5, emptySpace * innerRadius / 2 * 0.75);
  const outerPad = padLength / outerRadius;
  const innerPad = padLength / innerRadius;
  const armsData = Array.from({ length: arms }, (_item, armIndex) => {
    const h1 = holes[armIndex * 2];
    const h2 = holes[armIndex * 2 + 1];
    let a1 = Math.atan2(h1.y - cy, h1.x - cx);
    let a2 = Math.atan2(h2.y - cy, h2.x - cx);
    if (a1 < 0) a1 += 2 * Math.PI;
    if (a2 < 0) a2 += 2 * Math.PI;
    if (a2 < a1) a2 += 2 * Math.PI;
    return {
      pIL: polar(cx, cy, innerRadius, a1 - innerPad),
      pOL: polar(cx, cy, outerRadius, a1 - outerPad),
      pOR: polar(cx, cy, outerRadius, a2 + outerPad),
      pIR: polar(cx, cy, innerRadius, a2 + innerPad),
      aInnerLeft: a1 - innerPad,
      aInnerRight: a2 + innerPad
    };
  });
  let d = "";
  armsData.forEach((current, index) => {
    if (index === 0) {
      d += `M ${current.pIL.x} ${current.pIL.y} `;
    } else {
      const previous = armsData[index - 1];
      let leftAngle = previous.aInnerRight;
      let rightAngle2 = current.aInnerLeft;
      if (rightAngle2 < leftAngle) rightAngle2 += 2 * Math.PI;
      const valley2 = polar(cx, cy, valleyRadius, leftAngle + (rightAngle2 - leftAngle) / 2);
      d += `Q ${valley2.x} ${valley2.y} ${current.pIL.x} ${current.pIL.y} `;
    }
    d += `L ${current.pOL.x} ${current.pOL.y} A ${outerRadius} ${outerRadius} 0 0 1 ${current.pOR.x} ${current.pOR.y} L ${current.pIR.x} ${current.pIR.y} `;
  });
  const last = armsData[arms - 1];
  const first = armsData[0];
  let rightAngle = first.aInnerLeft;
  if (rightAngle < last.aInnerRight) rightAngle += 2 * Math.PI;
  const valley = polar(cx, cy, valleyRadius, last.aInnerRight + (rightAngle - last.aInnerRight) / 2);
  return `${d}Q ${valley.x} ${valley.y} ${first.pIL.x} ${first.pIL.y} Z ${circlePath(cx, cy, 6, false)}`;
}
function renderValve(config, center, innerRadius) {
  const valve = polar(center, center, innerRadius, -Math.PI / 2);
  if (config.wheel.valveType === "presta") {
    return `<g class="wheel-valve-group" transform="translate(${fmt(valve.x)} ${fmt(valve.y)}) rotate(0)">${rect(-3, 0, 6, 48, { class: "wheel-valve-part wheel-valve-stem", rx: 1 })}${rect(-5, 0, 10, 3, { class: "wheel-valve-part wheel-valve-base", rx: 0.5 })}${rect(-2, 48, 4, 6, { class: "wheel-valve-part wheel-valve-cap", rx: 0.5 })}</g>`;
  }
  if (config.wheel.valveType === "schrader") {
    return `<g class="wheel-valve-group" transform="translate(${fmt(valve.x)} ${fmt(valve.y)}) rotate(0)">${rect(-4, 0, 8, 30, { class: "wheel-valve-part wheel-valve-stem", rx: 1 })}${rect(-5, 0, 10, 3, { class: "wheel-valve-part wheel-valve-base", rx: 0.5 })}${rect(-4.5, 22, 9, 8, { class: "wheel-valve-part wheel-valve-cap", rx: 1 })}</g>`;
  }
  return `<g class="wheel-valve-group" transform="translate(${fmt(valve.x)} ${fmt(valve.y)}) rotate(0)"><text class="valve-label" transform="rotate(90)" x="8" y="0" dominant-baseline="middle" text-anchor="start" letter-spacing="2">VALVE</text></g>`;
}
function spokeNipple(hubPoint, rimPoint) {
  const dx = hubPoint.x - rimPoint.x;
  const dy = hubPoint.y - rimPoint.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  return { x2: rimPoint.x + dx / distance * 10, y2: rimPoint.y + dy / distance * 10 };
}
function activeStyle(config) {
  const style = hubPaintStyles(config.style);
  if (config.style.hubRenderStyle === "realistic") {
    style.line.opacity = 0.35;
    style.faceReference.opacity = 0.35;
  }
  return style;
}
function isBlueprint(config) {
  return config.style.hubRenderStyle !== "realistic";
}
function bp(className, style, extra = {}) {
  return { class: className, ...style, ...extra };
}
function hubProfileClass(config) {
  return [
    "hub-side-group",
    `hub-brand-${config.hub.brandStyle || "generic"}`,
    `hub-shell-${config.hub.shellStyle || "tapered"}`,
    `hub-render-${config.style.hubRenderStyle || "blueprint"}`
  ].join(" ");
}
function contiguousPath(x1, x2, cy, r, chamfer = 1.5) {
  return [
    `M ${x1 + chamfer} ${cy - r}`,
    `L ${x2 - chamfer} ${cy - r}`,
    `L ${x2} ${cy - r + chamfer}`,
    `L ${x2} ${cy + r - chamfer}`,
    `L ${x2 - chamfer} ${cy + r}`,
    `L ${x1 + chamfer} ${cy + r}`,
    `L ${x1} ${cy + r - chamfer}`,
    `L ${x1} ${cy - r + chamfer}`,
    "Z"
  ].join(" ");
}
function endcapPath(x1, x2, cy, r, side, chamfer = 1.5) {
  if (side === "left") {
    return [
      `M ${x1 + chamfer} ${cy - r}`,
      `L ${x2} ${cy - r}`,
      `L ${x2} ${cy + r}`,
      `L ${x1 + chamfer} ${cy + r}`,
      `L ${x1} ${cy + r - chamfer}`,
      `L ${x1} ${cy - r + chamfer}`,
      "Z"
    ].join(" ");
  }
  return [
    `M ${x1} ${cy - r}`,
    `L ${x2 - chamfer} ${cy - r}`,
    `L ${x2} ${cy - r + chamfer}`,
    `L ${x2} ${cy + r - chamfer}`,
    `L ${x2 - chamfer} ${cy + r}`,
    `L ${x1} ${cy + r}`,
    "Z"
  ].join(" ");
}
function centeredYs(cy, radius, count) {
  return Array.from({ length: count }, (_, index) => cy - radius + (index + 1) * radius * 2 / (count + 1));
}
function renderCenterlockFaceRings(cx, cy, style) {
  return [
    circle(cx, cy, 17, {
      class: "hub-centerlock-solid-ring",
      fill: "none",
      stroke: style.detail.stroke,
      "stroke-width": 1
    }),
    circle(cx, cy, 17.5, {
      class: "hub-centerlock-dashed-ring",
      fill: "none",
      stroke: style.detail.stroke,
      "stroke-width": 1,
      "stroke-dasharray": "1 1"
    })
  ].join("");
}
function renderFreehubFace(cx, cy, config, style) {
  if (config.hub.freehubType === "microspline") {
    return path(createMicrosplineFreehubFacePath(cx, cy), bp("hub-cylinder-freehub hub-freehub-microspline-face", style.freehub));
  }
  if (config.hub.freehubType === "xd") {
    return [
      path(createXDFreehubFacePath(cx, cy), bp("hub-cylinder-freehub hub-freehub-xd-face", style.freehub)),
      circle(cx, cy, 13.5, {
        class: "hub-freehub-xd-middle-ring",
        fill: "none",
        stroke: style.detail.stroke,
        "stroke-width": 1,
        "stroke-dasharray": "1 1"
      }),
      circle(cx, cy, 11.5, {
        class: "hub-freehub-xd-center-ring",
        fill: "none",
        stroke: style.detail.stroke,
        "stroke-width": 1
      })
    ].join("");
  }
  return path(createHGFreehubFacePath(cx, cy), bp("hub-cylinder-freehub hub-freehub-hg-face", style.freehub));
}
function sideFacePaint(style, side) {
  return side === "left" ? style.flangeLeft : style.flangeRight;
}
function sideFaceClass(side) {
  return side === "left" ? "hub-flange-left" : "hub-flange-right";
}
function renderContiguousHubSideGroup(cx, cy, config) {
  const style = activeStyle(config);
  const old = config.hub.builtInDimension || (config.hub.hubPosition === "front" ? 100 : 142);
  const leftEndX = cx - old / 2;
  const rightEndX = cx + old / 2;
  const endcapLength = config.hub.endcapLength || 8;
  const endcapRadius = (config.hub.endcapDia || 18) / 2;
  const hasBrakeMount = config.hub.brakeType !== "rim";
  const brakeWidth = hasBrakeMount ? config.hub.brakeMountWidth ?? 5 : 0;
  const brakeCoreRadius = hasBrakeMount ? Math.max(15, Math.min(config.hub.brakeMountDia / 2, 18)) : Math.max(12, config.hub.shellBodyDia / 2);
  const freehubLength = config.hub.hubPosition === "rear" ? config.hub.freehubLength : 0;
  const freehubRadius = (config.hub.freehubDia || 34) / 2;
  const leftFlangeX = cx - config.hub.leftFlangeCenter;
  const rightFlangeX = cx + config.hub.rightFlangeCenter;
  const flangeThickness = (config.hub.flangeThickness || 4) * (config.hub.hubType === "straightpull" ? 1.5 : 1);
  const leftFlangeRadius = config.hub.leftFlangeDia / 2;
  const rightFlangeRadius = config.hub.rightFlangeDia / 2;
  const shellRadius = Math.max(12, config.hub.shellWaistDia / 2);
  const freehubType = config.hub.freehubType || "hg";
  const isXd = freehubType === "xd";
  const xBrakeStart = leftEndX + endcapLength;
  const xBrakeEnd = hasBrakeMount ? Math.min(xBrakeStart + brakeWidth, leftFlangeX - flangeThickness / 2 - 2) : xBrakeStart;
  const xLeftFlange1 = leftFlangeX - flangeThickness / 2;
  const xLeftFlange2 = leftFlangeX + flangeThickness / 2;
  const xRightFlange1 = rightFlangeX - flangeThickness / 2;
  const xRightFlange2 = rightFlangeX + flangeThickness / 2;
  const xRightEndcapStart = rightEndX - endcapLength;
  const xFreehubStart = Math.max(xRightEndcapStart - freehubLength, xRightFlange2 + 2);
  const xdSplineWidth = isXd ? Math.min(7, freehubLength * 0.22) : 0;
  const xdThreadWidth = isXd ? Math.min(5.5, freehubLength * 0.18) : 0;
  const xXdSplineEnd = xFreehubStart + xdSplineWidth;
  const xXdThreadEnd = xXdSplineEnd + xdThreadWidth;
  const xXdFinalStep = isXd ? Math.max(xXdThreadEnd + 1, xRightEndcapStart - 5) : xRightEndcapStart;
  const xdSplineRadius = freehubRadius;
  const xdThreadRadius = freehubRadius - 1;
  const xdSmoothRadius = freehubRadius - 2;
  const xdEndRadius = freehubRadius - 3;
  const flangeStickOut = Math.max(0, config.hub.flangeStickOut || 0);
  const leftAttachRadius = Math.max(shellRadius, leftFlangeRadius - flangeStickOut);
  const rightAttachRadius = Math.max(shellRadius, rightFlangeRadius - flangeStickOut);
  const centerRadius = Math.max(8, (config.hub.centerShellDia || config.hub.shellWaistDia) / 2);
  const curveDrama = Math.max(0.1, Math.min(1, config.hub.curveDrama || 0.35));
  const leftSpan = Math.max(1, cx - xLeftFlange2);
  const rightSpan = Math.max(1, xRightFlange1 - cx);
  const cpLeftX1 = xLeftFlange2 + leftSpan * curveDrama;
  const cpLeftX2 = cx - leftSpan * curveDrama;
  const cpRightX1 = cx + rightSpan * curveDrama;
  const cpRightX2 = xRightFlange1 - rightSpan * curveDrama;
  const leftEndcapPath = endcapPath(leftEndX, xBrakeStart, cy, endcapRadius, "left", 1.5);
  const rightEndcapPath = endcapPath(xRightEndcapStart, rightEndX, cy, endcapRadius, "right", 1.5);
  const leftFlangePath = contiguousPath(xLeftFlange1, xLeftFlange2, cy, leftFlangeRadius, Math.min(1.2, flangeThickness / 3));
  const rightFlangePath = contiguousPath(xRightFlange1, xRightFlange2, cy, rightFlangeRadius, Math.min(1.2, flangeThickness / 3));
  const brakePath = contiguousPath(xBrakeStart, xBrakeEnd, cy, brakeCoreRadius, 1.2);
  const shellPath = [
    `M ${xBrakeEnd} ${cy - brakeCoreRadius}`,
    `C ${xBrakeEnd + 4} ${cy - brakeCoreRadius} ${xLeftFlange1 - 5} ${cy - leftAttachRadius} ${xLeftFlange1} ${cy - leftAttachRadius}`,
    `L ${xLeftFlange2} ${cy - leftAttachRadius}`,
    `C ${cpLeftX1} ${cy - leftAttachRadius} ${cpLeftX2} ${cy - centerRadius} ${cx} ${cy - centerRadius}`,
    `C ${cpRightX1} ${cy - centerRadius} ${cpRightX2} ${cy - rightAttachRadius} ${xRightFlange1} ${cy - rightAttachRadius}`,
    `L ${xRightFlange2} ${cy - rightAttachRadius}`,
    `C ${xRightFlange2 + 4} ${cy - rightFlangeRadius} ${xFreehubStart - 4} ${cy - freehubRadius} ${xFreehubStart} ${cy - freehubRadius}`,
    `L ${xFreehubStart} ${cy + freehubRadius}`,
    `C ${xFreehubStart - 4} ${cy + freehubRadius} ${xRightFlange2 + 4} ${cy + rightFlangeRadius} ${xRightFlange2} ${cy + rightFlangeRadius}`,
    `L ${xRightFlange1} ${cy + rightAttachRadius}`,
    `C ${cpRightX2} ${cy + rightAttachRadius} ${cpRightX1} ${cy + centerRadius} ${cx} ${cy + centerRadius}`,
    `C ${cpLeftX2} ${cy + centerRadius} ${cpLeftX1} ${cy + leftAttachRadius} ${xLeftFlange2} ${cy + leftAttachRadius}`,
    `L ${xLeftFlange1} ${cy + leftAttachRadius}`,
    `C ${xLeftFlange1 - 5} ${cy + leftAttachRadius} ${xBrakeEnd + 4} ${cy + brakeCoreRadius} ${xBrakeEnd} ${cy + brakeCoreRadius}`,
    "Z"
  ].join(" ");
  const freehubPath = isXd ? [
    `M ${xFreehubStart} ${cy - xdSplineRadius}`,
    `L ${xXdSplineEnd} ${cy - xdSplineRadius}`,
    `L ${xXdSplineEnd} ${cy - xdThreadRadius}`,
    `L ${xXdThreadEnd} ${cy - xdThreadRadius}`,
    `L ${xXdThreadEnd} ${cy - xdSmoothRadius}`,
    `L ${xXdFinalStep} ${cy - xdSmoothRadius}`,
    `L ${xXdFinalStep} ${cy - xdEndRadius}`,
    `L ${xRightEndcapStart} ${cy - xdEndRadius}`,
    `L ${xRightEndcapStart} ${cy + xdEndRadius}`,
    `L ${xXdFinalStep} ${cy + xdEndRadius}`,
    `L ${xXdFinalStep} ${cy + xdSmoothRadius}`,
    `L ${xXdThreadEnd} ${cy + xdSmoothRadius}`,
    `L ${xXdThreadEnd} ${cy + xdThreadRadius}`,
    `L ${xXdSplineEnd} ${cy + xdThreadRadius}`,
    `L ${xXdSplineEnd} ${cy + xdSplineRadius}`,
    `L ${xFreehubStart} ${cy + xdSplineRadius}`,
    "Z"
  ].join(" ") : [
    `M ${xFreehubStart} ${cy - freehubRadius}`,
    `L ${xRightEndcapStart} ${cy - freehubRadius}`,
    `L ${xRightEndcapStart} ${cy + freehubRadius}`,
    `L ${xFreehubStart} ${cy + freehubRadius}`,
    "Z"
  ].join(" ");
  const maskId = `hub-mask-${String(config.hub.preset || "custom").replaceAll(/[^a-z0-9-]/gi, "-")}-${config.style.hubRenderStyle || "blueprint"}`;
  const components = [
    path(leftEndcapPath, bp("hub-endcap", style.endcap)),
    hasBrakeMount ? path(brakePath, bp(`hub-brake-mount hub-${config.hub.brakeType}-side`, style.mount)) : "",
    path(shellPath, bp("hub-cylinder hub-shell-body", style.shell)),
    path(leftFlangePath, bp("hub-flange-left hub-flange-plate", style.flangeLeft)),
    path(rightFlangePath, bp("hub-flange-right hub-flange-plate", style.flangeRight)),
    path(freehubPath, bp(`hub-cylinder-freehub hub-freehub-${freehubType}`, style.freehub)),
    path(rightEndcapPath, bp("hub-endcap", style.endcap))
  ];
  const details = [];
  if (config.style.hubRenderStyle === "realistic") {
    details.push(tag("defs", {}, tag("clipPath", { id: maskId }, [
      tag("path", { d: leftEndcapPath }, ""),
      hasBrakeMount ? tag("path", { d: brakePath }, "") : "",
      tag("path", { d: shellPath }, ""),
      tag("path", { d: leftFlangePath }, ""),
      tag("path", { d: rightFlangePath }, ""),
      tag("path", { d: freehubPath }, ""),
      tag("path", { d: rightEndcapPath }, "")
    ].join(""))));
  }
  if (config.hub.hubType === "straightpull") {
    const slotCount = Math.max(1, Math.round(config.wheel.spokeCount / 4));
    [
      [xLeftFlange1, xLeftFlange2, leftFlangeRadius],
      [xRightFlange1, xRightFlange2, rightFlangeRadius]
    ].forEach(([x1, x2, r]) => {
      centeredYs(cy, r, slotCount).forEach((y) => {
        details.push(line(x1 + 0.6, y, x2 - 0.6, y, bp("hub-straightpull-slot-side", style.detail, { opacity: 0.72, "stroke-width": 0.8 })));
      });
    });
  }
  if (config.hub.brakeType === "6bolt") {
    centeredYs(cy, brakeCoreRadius, 2).forEach((y) => {
      details.push(line(xBrakeStart + 0.7, y, xBrakeEnd - 0.7, y, bp("hub-sixbolt-side-line", style.detail, { opacity: 0.65, "stroke-width": 0.75 })));
    });
  }
  if (config.hub.brakeType === "centerlock") {
    for (let x = xBrakeStart + 1.5; x < xBrakeEnd; x += 1.6) {
      details.push(line(x, cy - brakeCoreRadius + 1, x, cy + brakeCoreRadius - 1, bp("hub-centerlock-tooth", style.detail, { opacity: 0.55, "stroke-width": 0.55 })));
    }
  }
  if (isXd) {
    for (let x = xXdSplineEnd + 0.7; x < xXdThreadEnd; x += 1.2) {
      details.push(line(x, cy - xdThreadRadius + 1, x, cy + xdThreadRadius - 1, bp("hub-freehub-thread-line", style.detail, { opacity: 0.45, "stroke-width": 0.55 })));
    }
    centeredYs(cy, xdSplineRadius, 6).forEach((y) => {
      details.push(line(xFreehubStart + 0.8, y, xXdSplineEnd, y, bp("hub-freehub-spline", style.detail, { opacity: 0.7, "stroke-width": 0.75 })));
    });
    details.push(line(xXdFinalStep, cy - xdSmoothRadius, xXdFinalStep, cy + xdSmoothRadius, bp("hub-freehub-final-step-line", style.detail, { opacity: 0.5, "stroke-width": 0.65 })));
  } else {
    const splineCount = freehubType === "microspline" ? 9 : 4;
    centeredYs(cy, freehubRadius, splineCount).forEach((y) => {
      details.push(line(xFreehubStart, y, xRightEndcapStart - 1, y, bp("hub-freehub-spline", style.detail, { opacity: 0.7, "stroke-width": 0.75 })));
    });
  }
  if (isBlueprint(config)) {
    details.push(line(leftEndX, cy + 55, leftEndX, cy + 65, bp("hub-blueprint-line", style.line)));
    details.push(line(rightEndX, cy + 55, rightEndX, cy + 65, bp("hub-blueprint-line", style.line)));
  }
  return tag("g", { class: hubProfileClass(config), "data-hub-preset": config.hub.preset }, [...components, ...details].join(""));
}
function renderHubSideGroup(cx, cy, config) {
  return renderContiguousHubSideGroup(cx, cy, config);
}
var HubSVGGenerator = class {
  renderFace(options = {}) {
    const config = normalizeOptions(options);
    const style = activeStyle(config);
    const center = 75;
    const isLeft = config.view.hubFaceSide !== "right";
    const frontSide = isLeft ? "left" : "right";
    const backSide = isLeft ? "right" : "left";
    const frontRadius = isLeft ? config.hub.leftFlangeDia / 2 : config.hub.rightFlangeDia / 2;
    const backRadius = isLeft ? config.hub.rightFlangeDia / 2 : config.hub.leftFlangeDia / 2;
    const spokesPerSide = config.wheel.spokeCount / 2;
    const hubStep = 2 * Math.PI / spokesPerSide;
    const frontHoles = [];
    const backHoles = [];
    for (let index = 0; index < spokesPerSide; index += 1) {
      const leftAngle = -Math.PI / 2 + index * hubStep;
      const rightAngle = leftAngle + hubStep / 2;
      if (isLeft) {
        frontHoles.push(polar(center, center, frontRadius, leftAngle));
        backHoles.push(polar(center, center, backRadius, rightAngle));
      } else {
        frontHoles.push(polar(center, center, frontRadius, rightAngle));
        backHoles.push(polar(center, center, backRadius, leftAngle));
      }
    }
    const content = [];
    if (!isLeft && config.hub.brakeType === "6bolt") {
      content.push(path(create6BoltPath(center, center), bp("hub-brake-mount", style.mount)));
    } else if (!isLeft && config.hub.brakeType === "centerlock") {
      content.push(renderCenterlockFaceRings(center, center, style));
    }
    if (config.hub.hubType === "straightpull") {
      content.push(path(createStraightPullFlangePath(center, center, backRadius, backHoles), bp(sideFaceClass(backSide), sideFacePaint(style, backSide))));
      content.push(path(createStraightPullFlangePath(center, center, frontRadius, frontHoles), bp(sideFaceClass(frontSide), sideFacePaint(style, frontSide))));
    } else {
      const showHoles = config.hub.showHubHoles === "visible";
      content.push(path(createJBendFlangePath(center, center, backRadius + 4, backHoles, showHoles), bp(sideFaceClass(backSide), sideFacePaint(style, backSide))));
      content.push(path(createJBendFlangePath(center, center, frontRadius + 4, frontHoles, showHoles), bp(sideFaceClass(frontSide), sideFacePaint(style, frontSide))));
      if (config.hub.flangeCutoutStyle === "scalloped") {
        const scallopCount = Math.max(6, Math.floor(spokesPerSide / 2));
        for (let index = 0; index < scallopCount; index += 1) {
          const cut = polar(center, center, frontRadius * 0.72, -Math.PI / 2 + index * (2 * Math.PI / scallopCount));
          content.push(circle(cut.x, cut.y, 2.7, bp("hub-flange-cutout", style.cutout)));
        }
      }
    }
    if (config.hub.hubPosition === "rear" && !isLeft) {
      content.push(renderFreehubFace(center, center, config, style));
    }
    if (isLeft && config.hub.brakeType === "6bolt") {
      content.push(path(create6BoltPath(center, center), bp("hub-brake-mount", style.mount)));
    } else if (isLeft && config.hub.brakeType === "centerlock") {
      content.push(renderCenterlockFaceRings(center, center, style));
    }
    return svgDocument(150, 150, "0 0 150 150", tag("g", {
      class: `hub-face-group hub-brand-${config.hub.brandStyle || "generic"} hub-render-${config.style.hubRenderStyle || "blueprint"}`
    }, content.join("")), visualizerStyle(config.style), {
      class: "hub-svg"
    });
  }
  renderSide(options = {}) {
    const config = normalizeOptions(options);
    return svgDocument(200, 150, "0 0 200 150", renderHubSideGroup(100, 75, config), visualizerStyle(config.style), {
      class: "hub-svg"
    });
  }
  hubHoles(options = {}) {
    return hubHolePositions(options);
  }
};
function renderCenterlockFaceRings2(cx, cy, config) {
  return [
    circle(cx, cy, 17, {
      class: "hub-centerlock-solid-ring",
      fill: "none",
      stroke: paintValue(config.style, "hubDetailStroke"),
      "stroke-width": 1
    }),
    circle(cx, cy, 17.5, {
      class: "hub-centerlock-dashed-ring",
      fill: "none",
      stroke: paintValue(config.style, "hubDetailStroke"),
      "stroke-width": 1,
      "stroke-dasharray": "1 1"
    })
  ].join("");
}
function renderFreehubFace2(cx, cy, config) {
  if (config.hub.freehubType === "microspline") {
    return path(createMicrosplineFreehubFacePath(cx, cy), { class: "hub-cylinder-freehub hub-freehub-microspline-face" });
  }
  if (config.hub.freehubType === "xd") {
    return [
      path(createXDFreehubFacePath(cx, cy), { class: "hub-cylinder-freehub hub-freehub-xd-face" }),
      circle(cx, cy, 13.5, {
        class: "hub-freehub-xd-middle-ring",
        fill: "none",
        stroke: paintValue(config.style, "hubDetailStroke"),
        "stroke-width": 1,
        "stroke-dasharray": "1 1"
      }),
      circle(cx, cy, 11.5, {
        class: "hub-freehub-xd-center-ring",
        fill: "none",
        stroke: paintValue(config.style, "hubDetailStroke"),
        "stroke-width": 1
      })
    ].join("");
  }
  return path(createHGFreehubFacePath(cx, cy), { class: "hub-cylinder-freehub hub-freehub-hg-face" });
}
function sideFaceClass2(side) {
  return side === "left" ? "hub-flange-left" : "hub-flange-right";
}
var WheelFaceSVGGenerator = class {
  render(options = {}) {
    const config = normalizeOptions(options);
    const center = 350;
    const outerRadius = config.wheel.outerDia / 2;
    const innerRadius = config.wheel.erd / 2;
    const rimThickness = outerRadius - innerRadius;
    const rimMidRadius = innerRadius + rimThickness / 2;
    const rimHoles = rimHolePositions(config, { center, radius: innerRadius });
    const hubHoles = hubHolePositions(config, { center });
    const lacing = lacingMap(config);
    const isLeftView = config.view.wheelFaceSide !== "right";
    const frontSide = isLeftView ? "left" : "right";
    const backSide = isLeftView ? "right" : "left";
    const frontRadius = isLeftView ? config.hub.leftFlangeDia / 2 : config.hub.rightFlangeDia / 2;
    const backRadius = isLeftView ? config.hub.rightFlangeDia / 2 : config.hub.leftFlangeDia / 2;
    const frontHoles = isLeftView ? hubHoles.left : hubHoles.right;
    const backHoles = isLeftView ? hubHoles.right : hubHoles.left;
    const backSpokes = [];
    const frontSpokes = [];
    const backNipples = [];
    const frontNipples = [];
    const backNippleDots = [];
    const frontNippleDots = [];
    lacing.forEach((spoke) => {
      const hubPoint = hubHoles[spoke.side][spoke.hubIndex];
      const rimPoint = rimHoles[spoke.rimIndex];
      const isBackFlange = spoke.side === "left" && !isLeftView || spoke.side === "right" && isLeftView;
      const isFront = config.style.spokeLayering === "flat" ? true : !isBackFlange;
      const spokeSvg = line(hubPoint.x, hubPoint.y, rimPoint.x, rimPoint.y, {
        class: `spoke spoke-${spoke.side} spoke-${spoke.type}`,
        "data-rim-index": spoke.rimIndex,
        "data-hub-index": spoke.hubIndex
      });
      (isFront ? frontSpokes : backSpokes).push(spokeSvg);
      if (config.style.nippleStyle === "nipples") {
        const nipple = spokeNipple(hubPoint, rimPoint);
        const nippleSvg = line(rimPoint.x, rimPoint.y, nipple.x2, nipple.y2, { class: "spoke-nipple" });
        (isFront ? frontNipples : backNipples).push(nippleSvg);
      } else if (config.style.nippleStyle === "dots") {
        const dotSvg = circle(rimPoint.x, rimPoint.y, 2.2, { class: "spoke-nipple-dot" });
        (isFront ? frontNippleDots : backNippleDots).push(dotSvg);
      }
    });
    const hubContent = [];
    if (!isLeftView && config.hub.brakeType === "6bolt") hubContent.push(path(create6BoltPath(center, center), { class: "hub-brake-mount" }));
    else if (!isLeftView && config.hub.brakeType === "centerlock") hubContent.push(renderCenterlockFaceRings2(center, center, config));
    if (config.hub.hubType === "straightpull") {
      hubContent.push(path(createStraightPullFlangePath(center, center, backRadius, backHoles), { class: sideFaceClass2(backSide) }));
      hubContent.push(path(createStraightPullFlangePath(center, center, frontRadius, frontHoles), { class: sideFaceClass2(frontSide) }));
    } else {
      const showHoles = config.hub.showHubHoles === "visible";
      hubContent.push(path(createJBendFlangePath(center, center, backRadius + 4, backHoles, showHoles), { class: sideFaceClass2(backSide) }));
      if (showHoles) {
        backHoles.forEach((point) => {
          hubContent.push(circle(point.x + 0.4, point.y + 0.4, 1.4, {
            fill: config.style.spokeColor === "black" ? paintValue(config.style, "spokeBlack") : paintValue(config.style, "spokeSilver")
          }));
        });
      }
      hubContent.push(path(createJBendFlangePath(center, center, frontRadius + 4, frontHoles, showHoles), { class: sideFaceClass2(frontSide) }));
    }
    if (config.hub.hubPosition === "rear" && !isLeftView) {
      hubContent.push(renderFreehubFace2(center, center, config));
    }
    if (isLeftView && config.hub.brakeType === "6bolt") hubContent.push(path(create6BoltPath(center, center), { class: "hub-brake-mount" }));
    else if (isLeftView && config.hub.brakeType === "centerlock") hubContent.push(renderCenterlockFaceRings2(center, center, config));
    hubContent.push(circle(center, center, 9, { fill: "none", stroke: paintValue(config.style, "hubDetailStroke"), "stroke-width": 6 }));
    const rim = tag("g", { id: "rimGroup" }, [
      circle(center, center, rimMidRadius, {
        fill: "transparent",
        stroke: paintValue(config.style, "rimFaceFill"),
        "stroke-width": rimThickness
      }),
      circle(center, center, outerRadius, { class: "rim-outline" }),
      circle(center, center, innerRadius, { class: "rim-outline" }),
      circle(center, center, innerRadius + 1, { class: "rim-highlight" })
    ].join(""));
    const rimHoleSvg = tag("g", { class: "rim-holes-group" }, rimHoles.map((point) => circle(point.x, point.y, 2.2, { class: "rim-hole" })).join(""));
    const foregroundHubHeads = config.hub.hubType === "jbend" && config.hub.showHubHoles === "visible" ? frontHoles.map((point) => circle(point.x + 0.4, point.y + 0.4, 1.4, {
      fill: config.style.spokeColor === "black" ? paintValue(config.style, "spokeBlack") : paintValue(config.style, "spokeSilver")
    })).join("") : "";
    const content = [
      config.style.spokeLayering === "3d" ? tag("g", { class: `spoke-theme-${config.style.spokeColor} wheel-back-spokes` }, backSpokes.join("")) : "",
      config.style.spokeLayering === "3d" ? tag("g", { class: `nipple-theme-${config.style.nippleColor} wheel-back-nipples` }, backNipples.join("")) : "",
      tag("g", { class: "wheel-hub-face-group" }, hubContent.join("")),
      tag("g", { class: `spoke-theme-${config.style.spokeColor} wheel-front-spokes` }, frontSpokes.join("")),
      tag("g", { class: `nipple-theme-${config.style.nippleColor} wheel-front-nipples` }, frontNipples.join("")),
      rim,
      config.style.spokeLayering === "3d" ? tag("g", { class: "wheel-back-nipple-dots" }, backNippleDots.join("")) : "",
      tag("g", { class: "wheel-front-nipple-dots" }, frontNippleDots.join("")),
      rimHoleSvg,
      foregroundHubHeads ? tag("g", { class: "hub-spoke-heads-group" }, foregroundHubHeads) : "",
      renderValve(config, center, innerRadius)
    ].join("");
    const renderedContent = isLeftView ? content : tag("g", { transform: "translate(700 0) scale(-1 1)", class: "wheel-face-right-mirror" }, content);
    return svgDocument(700, 700, "0 0 700 700", renderedContent, visualizerStyle(config.style), { class: "wheel-svg" });
  }
};
var WheelSideSVGGenerator = class {
  render(options = {}) {
    const config = normalizeOptions(options);
    const cx = 100;
    const cy = 375;
    const rimCenter = cx + config.wheel.rimOffset;
    const outerRadius = config.wheel.outerDia / 2;
    const innerRadius = config.wheel.erd / 2;
    const leftHubRadius = config.hub.leftFlangeDia / 2;
    const rightHubRadius = config.hub.rightFlangeDia / 2;
    const leftHubX = cx - config.hub.leftFlangeCenter;
    const rightHubX = cx + config.hub.rightFlangeCenter;
    const rimDepth = (config.wheel.outerDia - config.wheel.erd) / 2;
    const width = config.wheel.rimWidth;
    const yOuterTop = cy - outerRadius;
    const yInnerTop = cy - innerRadius;
    const yMidTop = yOuterTop + rimDepth / 2;
    const yOuterBottom = cy + outerRadius;
    const yInnerBottom = cy + innerRadius;
    const yMidBottom = yOuterBottom - rimDepth / 2;
    const topPath = [
      `M ${rimCenter - width / 2} ${yOuterTop}`,
      `L ${rimCenter + width / 2} ${yOuterTop}`,
      `L ${rimCenter + width / 2} ${yMidTop}`,
      `L ${rimCenter + width / 6} ${yInnerTop}`,
      `L ${rimCenter - width / 6} ${yInnerTop}`,
      `L ${rimCenter - width / 2} ${yMidTop}`,
      "Z"
    ].join(" ");
    const bottomPath = [
      `M ${rimCenter - width / 6} ${yInnerBottom}`,
      `L ${rimCenter + width / 6} ${yInnerBottom}`,
      `L ${rimCenter + width / 2} ${yMidBottom}`,
      `L ${rimCenter + width / 2} ${yOuterBottom}`,
      `L ${rimCenter - width / 2} ${yOuterBottom}`,
      `L ${rimCenter - width / 2} ${yMidBottom}`,
      "Z"
    ].join(" ");
    const rimGroup = tag("g", { id: "rimGroup" }, [
      path(topPath, { class: "rim-body" }),
      path(bottomPath, { class: "rim-body" })
    ].join(""));
    const hubGroup = renderHubSideGroup(cx, cy, config);
    if (config.style.spokeLayering === "flat") {
      const spokes = [];
      const nipples = [];
      const nippleDots = [];
      const draw = (hubPoint, rimPoint, side) => {
        spokes.push(line(hubPoint.x, hubPoint.y, rimPoint.x, rimPoint.y, { class: `spoke spoke-${side} spoke-pulling` }));
        if (config.style.nippleStyle === "nipples") {
          const nipple = spokeNipple(hubPoint, rimPoint);
          nipples.push(line(rimPoint.x, rimPoint.y, nipple.x2, nipple.y2, { class: "spoke-nipple" }));
        } else if (config.style.nippleStyle === "dots") {
          nippleDots.push(circle(rimPoint.x, rimPoint.y, 1.7, { class: "spoke-nipple-dot" }));
        }
      };
      draw({ x: leftHubX, y: cy - leftHubRadius }, { x: rimCenter, y: yInnerTop }, "left");
      draw({ x: rightHubX, y: cy - rightHubRadius }, { x: rimCenter, y: yInnerTop }, "right");
      draw({ x: leftHubX, y: cy + leftHubRadius }, { x: rimCenter, y: yInnerBottom }, "left");
      draw({ x: rightHubX, y: cy + rightHubRadius }, { x: rimCenter, y: yInnerBottom }, "right");
      return svgDocument(200, 750, "0 0 200 750", [
        tag("g", { class: `spoke-theme-${config.style.spokeColor}` }, spokes.join("")),
        hubGroup,
        tag("g", { class: `nipple-theme-${config.style.nippleColor}` }, nipples.join("")),
        rimGroup,
        tag("g", { class: "wheel-nipple-dots" }, nippleDots.join(""))
      ].join(""), visualizerStyle(config.style), { class: "wheel-svg" });
    }
    const spokesPerSide = config.wheel.spokeCount / 2;
    const rimStep = 2 * Math.PI / config.wheel.spokeCount;
    const hubStep = 2 * Math.PI / spokesPerSide;
    const safeCross = Math.floor(config.lacing.crossPattern);
    const patternShift = safeCross % 2 === 0 && safeCross > 0 ? 2 : 0;
    const hubAngleOffset = patternShift * rimStep;
    const backSpokes = [];
    const frontSpokes = [];
    const backNipples = [];
    const frontNipples = [];
    const backNippleDots = [];
    const frontNippleDots = [];
    lacingMap(config).forEach((spoke) => {
      const isLeft = spoke.side === "left";
      const hubRadius = isLeft ? leftHubRadius : rightHubRadius;
      const hubX = isLeft ? leftHubX : rightHubX;
      const hubAngle = -Math.PI / 2 + rimStep / 2 + spoke.hubIndex * hubStep + hubAngleOffset + (isLeft ? 0 : hubStep / 2);
      const rimAngle = -Math.PI / 2 + rimStep / 2 + spoke.rimIndex * rimStep;
      const hubPoint = { x: hubX, y: cy + hubRadius * Math.sin(hubAngle) };
      const rimPoint = { x: rimCenter, y: cy + innerRadius * Math.sin(rimAngle) };
      const isFront = innerRadius * Math.cos(rimAngle) >= 0;
      const spokeSvg = line(hubPoint.x, hubPoint.y, rimPoint.x, rimPoint.y, {
        class: `spoke spoke-${spoke.side} spoke-${spoke.type}`
      });
      (isFront ? frontSpokes : backSpokes).push(spokeSvg);
      if (config.style.nippleStyle === "nipples") {
        const nipple = spokeNipple(hubPoint, rimPoint);
        const nippleSvg = line(rimPoint.x, rimPoint.y, nipple.x2, nipple.y2, { class: "spoke-nipple" });
        (isFront ? frontNipples : backNipples).push(nippleSvg);
      } else if (config.style.nippleStyle === "dots") {
        const dotSvg = circle(rimPoint.x, rimPoint.y, 1.7, { class: "spoke-nipple-dot" });
        (isFront ? frontNippleDots : backNippleDots).push(dotSvg);
      }
    });
    return svgDocument(200, 750, "0 0 200 750", [
      tag("g", { class: `spoke-theme-${config.style.spokeColor} wheel-back-spokes` }, backSpokes.join("")),
      tag("g", { class: `nipple-theme-${config.style.nippleColor} wheel-back-nipples` }, backNipples.join("")),
      hubGroup,
      tag("g", { class: `spoke-theme-${config.style.spokeColor} wheel-front-spokes` }, frontSpokes.join("")),
      tag("g", { class: `nipple-theme-${config.style.nippleColor} wheel-front-nipples` }, frontNipples.join("")),
      rimGroup,
      tag("g", { class: "wheel-back-nipple-dots" }, backNippleDots.join("")),
      tag("g", { class: "wheel-front-nipple-dots" }, frontNippleDots.join(""))
    ].join(""), visualizerStyle(config.style), { class: "wheel-svg" });
  }
};
var BicycleWheelSVG = class {
  constructor(config = {}) {
    this.config = config;
    this.faceGenerator = new WheelFaceSVGGenerator();
    this.sideGenerator = new WheelSideSVGGenerator();
    this.hubGenerator = new HubSVGGenerator();
  }
  options(options = {}) {
    return normalizeOptions({
      ...this.config,
      ...options,
      wheel: { ...this.config.wheel || {}, ...options.wheel || {} },
      hub: { ...this.config.hub || {}, ...options.hub || {} },
      lacing: { ...this.config.lacing || {}, ...options.lacing || {} },
      view: { ...this.config.view || {}, ...typeof options.view === "object" ? options.view : {} },
      style: { ...this.config.style || {}, ...typeof options.style === "object" ? options.style : {} }
    });
  }
  wheel(options = {}) {
    return this.wheelFace(options);
  }
  wheelFace(options = {}) {
    return this.faceGenerator.render(this.options(options));
  }
  wheelSide(options = {}) {
    return this.sideGenerator.render(this.options(options));
  }
  hubFace(options = {}) {
    return this.hubGenerator.renderFace(this.options(options));
  }
  hubSide(options = {}) {
    return this.hubGenerator.renderSide(this.options(options));
  }
  spokeBuild(options = {}) {
    return calculateWheelBuild(this.options(options));
  }
};
function renderWheelFaceSvg(options = {}) {
  return new BicycleWheelSVG(options.generatorConfig).wheelFace(options);
}
function renderWheelSideSvg(options = {}) {
  return new BicycleWheelSVG(options.generatorConfig).wheelSide(options);
}
function renderWheelFaceGroup(options = {}) {
  const svg = renderWheelFaceSvg(options);
  return `<g class="wheel-face-embedded">${svg}</g>`;
}
function renderWheelSideGroup(options = {}) {
  const svg = renderWheelSideSvg(options);
  return `<g class="wheel-side-embedded">${svg}</g>`;
}

// node_modules/svg-bicycle-drivetrain-generator/dist/index.mjs
var SprocketGeometry = class {
  constructor(pitch = 10) {
    this.pitch = pitch;
  }
  p2c(radius, angle) {
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle)
    };
  }
  getPitchRadius(teeth) {
    return this.pitch / (2 * Math.sin(Math.PI / teeth));
  }
  getOuterRadius(teeth) {
    return this.getPitchRadius(teeth) + this.pitch * 0.075;
  }
  getToothAngle(teeth) {
    return 2 * Math.PI / teeth;
  }
  getValleyAngle(teeth, index, rotation = 0) {
    return rotation + (index + 0.5) * this.getToothAngle(teeth);
  }
  getValleyCenter(teeth, index, rotation = 0, center = { x: 0, y: 0 }) {
    const radius = this.getPitchRadius(teeth);
    const angle = this.getValleyAngle(teeth, index, rotation);
    return {
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle),
      angle,
      index: this.normalizeIndex(index, teeth)
    };
  }
  getValleyCenters(teeth, rotation = 0, center = { x: 0, y: 0 }) {
    return Array.from({ length: teeth }, (_, index) => {
      return this.getValleyCenter(teeth, index, rotation, center);
    });
  }
  normalizeIndex(index, teeth) {
    return (index % teeth + teeth) % teeth;
  }
  getIndexForAngle(teeth, worldAngle, rotation = 0) {
    const toothAngle = this.getToothAngle(teeth);
    return this.normalizeIndex(Math.round((worldAngle - rotation) / toothAngle - 0.5), teeth);
  }
  generateSprocketPath(teeth, innerHoleRadius) {
    const rollerRadius = this.pitch * 0.3125;
    const pitchRadius = this.getPitchRadius(teeth);
    const outerRadius = this.getOuterRadius(teeth);
    const toothAngle = this.getToothAngle(teeth);
    const phi = 50 * (Math.PI / 180);
    const flatTopWidth = this.pitch * 0.4;
    const delta = flatTopWidth / 2 / outerRadius;
    let path2 = "";
    for (let i = 0; i < teeth; i++) {
      const toothCenterAngle = i * toothAngle;
      const previousValleyAngle = (i - 0.5) * toothAngle;
      const currentValleyAngle = (i + 0.5) * toothAngle;
      const previousValley = this.p2c(pitchRadius, previousValleyAngle);
      const currentValley = this.p2c(pitchRadius, currentValleyAngle);
      const p1x = previousValley.x + rollerRadius * Math.cos(previousValleyAngle + Math.PI - phi);
      const p1y = previousValley.y + rollerRadius * Math.sin(previousValleyAngle + Math.PI - phi);
      const p2x = outerRadius * Math.cos(toothCenterAngle - delta);
      const p2y = outerRadius * Math.sin(toothCenterAngle - delta);
      const p3x = outerRadius * Math.cos(toothCenterAngle + delta);
      const p3y = outerRadius * Math.sin(toothCenterAngle + delta);
      const p4x = currentValley.x + rollerRadius * Math.cos(currentValleyAngle + Math.PI + phi);
      const p4y = currentValley.y + rollerRadius * Math.sin(currentValleyAngle + Math.PI + phi);
      const nextP1x = currentValley.x + rollerRadius * Math.cos(currentValleyAngle + Math.PI - phi);
      const nextP1y = currentValley.y + rollerRadius * Math.sin(currentValleyAngle + Math.PI - phi);
      if (i === 0) {
        path2 += `M ${p1x} ${p1y} `;
      }
      path2 += `L ${p2x} ${p2y} `;
      path2 += `A ${outerRadius} ${outerRadius} 0 0 1 ${p3x} ${p3y} `;
      path2 += `L ${p4x} ${p4y} `;
      path2 += `A ${rollerRadius} ${rollerRadius} 0 0 0 ${nextP1x} ${nextP1y} `;
    }
    path2 += "Z ";
    const segments = 48;
    for (let i = segments; i >= 0; i--) {
      const point = this.p2c(innerHoleRadius, i / segments * (2 * Math.PI));
      path2 += i === segments ? `M ${point.x} ${point.y} ` : `L ${point.x} ${point.y} `;
    }
    path2 += "Z";
    return path2;
  }
};
var CassetteSVGGenerator = class {
  constructor(pitch = 10) {
    this.pitch = pitch;
    this.geometry = new SprocketGeometry(pitch);
    this.coordinatePrecision = 3;
  }
  _p2c(radius, angle) {
    return this.geometry.p2c(radius, angle);
  }
  _getPitchRadius(teeth) {
    return this.geometry.getPitchRadius(teeth);
  }
  _getOuterRadius(teeth) {
    return this.geometry.getOuterRadius(teeth);
  }
  _generateCogPath(teeth) {
    return this.geometry.generateSprocketPath(teeth, 9.5);
  }
  _generateLockringPath() {
    const outerRadius = 11.8;
    const notchRadius = 9.4;
    const innerRadius = 8.1;
    const notches = 12;
    const notchHalfWidth = 1;
    let path2 = "";
    const segments = 64;
    for (let i = 0; i < segments; i++) {
      const angle = i / segments * (2 * Math.PI);
      const pt = this._p2c(outerRadius, angle);
      if (i === 0) {
        path2 += `M ${pt.x} ${pt.y} `;
      } else {
        path2 += `L ${pt.x} ${pt.y} `;
      }
    }
    path2 += "Z ";
    for (let i = notches - 1; i >= 0; i--) {
      const theta = i * (Math.PI / 6);
      const u = { x: Math.cos(theta), y: Math.sin(theta) };
      const v2 = { x: -Math.sin(theta), y: Math.cos(theta) };
      const enterInner = {
        x: innerRadius * u.x + notchHalfWidth * v2.x,
        y: innerRadius * u.y + notchHalfWidth * v2.y
      };
      const enterNotch = {
        x: notchRadius * u.x + notchHalfWidth * v2.x,
        y: notchRadius * u.y + notchHalfWidth * v2.y
      };
      const exitNotch = {
        x: notchRadius * u.x - notchHalfWidth * v2.x,
        y: notchRadius * u.y - notchHalfWidth * v2.y
      };
      const exitInner = {
        x: innerRadius * u.x - notchHalfWidth * v2.x,
        y: innerRadius * u.y - notchHalfWidth * v2.y
      };
      if (i === notches - 1) {
        path2 += `M ${enterInner.x} ${enterInner.y} `;
      } else {
        path2 += `A ${innerRadius} ${innerRadius} 0 0 0 ${enterInner.x} ${enterInner.y} `;
      }
      path2 += `L ${enterNotch.x} ${enterNotch.y} `;
      path2 += `A ${notchRadius} ${notchRadius} 0 0 0 ${exitNotch.x} ${exitNotch.y} `;
      path2 += `L ${exitInner.x} ${exitInner.y} `;
    }
    const startTheta = (notches - 1) * (Math.PI / 6);
    const startU = { x: Math.cos(startTheta), y: Math.sin(startTheta) };
    const startV = { x: -Math.sin(startTheta), y: Math.cos(startTheta) };
    const startPt = {
      x: innerRadius * startU.x + notchHalfWidth * startV.x,
      y: innerRadius * startU.y + notchHalfWidth * startV.y
    };
    path2 += `A ${innerRadius} ${innerRadius} 0 0 0 ${startPt.x} ${startPt.y} Z`;
    return path2;
  }
  _resolveColor(index, styleConfig) {
    if (!styleConfig || !styleConfig.fillColors || styleConfig.fillColors.length === 0) {
      const defaults = ["#e2e8f0", "#cbd5e1"];
      return index === 0 ? "#334155" : defaults[index % 2];
    }
    const fills = styleConfig.fillColors;
    if (fills.length === 1) return fills[0];
    if (fills.length === 2) return fills[index % 2];
    if (index === 0) return fills[2];
    return fills[(index - 1) % 2];
  }
  _resolveOutline(index, styleConfig) {
    if (styleConfig && styleConfig.outlineColor) return styleConfig.outlineColor;
    return index === 0 ? "#1e293b" : "#94a3b8";
  }
  _resolveOpacity(index, styleConfig) {
    if (styleConfig && styleConfig.layerOpacities && styleConfig.layerOpacities[index] !== void 0) {
      return styleConfig.layerOpacities[index];
    }
    if (styleConfig && styleConfig.layerOpacity !== void 0) {
      return index === 0 && styleConfig.selectedOpacity !== void 0 ? styleConfig.selectedOpacity : styleConfig.layerOpacity;
    }
    return 1;
  }
  _formatNumber(value) {
    const multiplier = 10 ** this.coordinatePrecision;
    const rounded = Math.round(Number.parseFloat(value) * multiplier) / multiplier;
    return Object.is(rounded, -0) ? "0" : String(rounded);
  }
  _minifySvg(svg) {
    return svg.replace(/-?\d+\.\d+/g, (value) => this._formatNumber(value)).replace(/\sclass="[^"]*"/g, "").replace(/\s\/>/g, "/>").replace(/>\s+</g, "><");
  }
  _minifyFragment(svg) {
    return svg.replace(/-?\d+\.\d+/g, (value) => this._formatNumber(value)).replace(/\s\/>/g, "/>").replace(/>\s+</g, "><");
  }
  calculateStack(teethArray, options = {}) {
    const sortedTeeth = [...teethArray].sort((a, b) => b - a);
    const cogWidth = options.cogWidth ?? 1.2;
    const cogPitch = options.cogPitch ?? 3;
    const stackWidth = sortedTeeth.length === 0 ? 0 : (sortedTeeth.length - 1) * cogPitch + cogWidth;
    const lockringWidth = options.lockringWidth ?? 1;
    return {
      sortedCogs: sortedTeeth,
      cogWidth,
      cogPitch,
      stackWidth,
      lockringX: stackWidth + 0.2,
      lockringWidth,
      largestRadius: sortedTeeth.length ? this._getOuterRadius(sortedTeeth[0]) : 0,
      smallestRadius: sortedTeeth.length ? this._getOuterRadius(sortedTeeth[sortedTeeth.length - 1]) : 0,
      cogs: sortedTeeth.map((teeth, index) => ({
        teeth,
        index,
        x: index * cogPitch,
        centerX: index * cogPitch + cogWidth / 2,
        width: cogWidth,
        pitchRadius: this._getPitchRadius(teeth),
        outerRadius: this._getOuterRadius(teeth)
      }))
    };
  }
  renderFrontGroup(teethArray, styleConfig = {}) {
    const sortedTeeth = [...teethArray].sort((a, b) => b - a);
    if (sortedTeeth.length === 0) return "";
    const showText = styleConfig.showText !== false;
    const textColor = styleConfig.textColor || null;
    const textAngles = new Array(sortedTeeth.length);
    const smallestTeeth = sortedTeeth[sortedTeeth.length - 1];
    const firstStep = 2 * Math.PI / smallestTeeth;
    let prevAngle = Math.round(-Math.PI / 2 / firstStep) * firstStep;
    textAngles[sortedTeeth.length - 1] = prevAngle;
    const minGap = 2 * (Math.PI / 180);
    for (let i = sortedTeeth.length - 2; i >= 0; i--) {
      const teeth = sortedTeeth[i];
      const step = 2 * Math.PI / teeth;
      let nextToothIndex = Math.floor(prevAngle / step) + 1;
      let exactAngle = nextToothIndex * step;
      while (exactAngle <= prevAngle + minGap) {
        nextToothIndex++;
        exactAngle = nextToothIndex * step;
      }
      textAngles[i] = exactAngle;
      prevAngle = exactAngle;
    }
    let svg = '<g class="cassette-front-group">';
    sortedTeeth.forEach((teeth, index) => {
      const fill = this._resolveColor(index, styleConfig);
      const stroke = this._resolveOutline(index, styleConfig);
      const opacity = this._resolveOpacity(index, styleConfig);
      let computedTextColor = textColor;
      if (!computedTextColor) {
        const isDefaultLargestCog = index === 0 && (!styleConfig.fillColors || styleConfig.fillColors.length === 0);
        computedTextColor = isDefaultLargestCog ? "#94a3b8" : "#64748b";
      }
      svg += '<g class="cog-layer">';
      svg += `<path d="${this._generateCogPath(teeth)}" fill="${fill}" stroke="${stroke}" `;
      svg += `stroke-width="0.5" fill-rule="evenodd" opacity="${opacity}"/>`;
      if (showText) {
        const textRadius = this._getOuterRadius(teeth) - this.pitch * 0.19;
        const exactAngle = textAngles[index];
        const textX = textRadius * Math.cos(exactAngle);
        const textY = textRadius * Math.sin(exactAngle);
        let textRotation = exactAngle * 180 / Math.PI + 90;
        const normalizedAngle = (exactAngle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
        if (normalizedAngle > Math.PI / 3 && normalizedAngle < 4 * Math.PI / 3) textRotation += 180;
        const styleStr = !textColor ? "mix-blend-mode: difference; fill: white;" : `fill: ${computedTextColor};`;
        svg += `<text x="${textX}" y="${textY}" font-size="2.4" `;
        svg += 'font-family="monospace" font-weight="bold" text-anchor="middle" ';
        svg += 'dominant-baseline="central" opacity="0.9" ';
        svg += `style="pointer-events: none; user-select: none; ${styleStr}" `;
        svg += `transform="rotate(${textRotation}, ${textX}, ${textY})">${teeth}T</text>`;
      }
      svg += "</g>";
    });
    svg += '<g class="lockring-group">';
    svg += `<path d="${this._generateLockringPath()}" fill="#111827" stroke="#374151" `;
    svg += 'stroke-width="0.5" fill-rule="evenodd"/>';
    svg += "</g></g>";
    return this._minifyFragment(svg);
  }
  renderSideGroup(teethArray, direction = "ltr", styleConfig = {}) {
    const stack = this.calculateStack(teethArray, styleConfig);
    if (stack.sortedCogs.length === 0) return "";
    const displayCogs = direction === "ltr" ? stack.cogs : [...stack.cogs].reverse();
    const maxRadius = stack.largestRadius;
    const freehubRadius = styleConfig.freehubRadius ?? 9.5;
    const showText = styleConfig.showText !== false;
    const textColor = styleConfig.textColor || "#64748b";
    let svg = '<g class="cassette-side-group">';
    svg += `<rect x="-1" y="-${freehubRadius}" width="${stack.stackWidth + 2}" `;
    svg += `height="${freehubRadius * 2}" fill="#475569" rx="0.5"/>`;
    displayCogs.forEach((cog, displayIndex) => {
      const trueIndex = stack.sortedCogs.indexOf(cog.teeth);
      const xOffset = direction === "ltr" ? cog.x : displayIndex * stack.cogPitch;
      const fill = this._resolveColor(trueIndex, styleConfig);
      const stroke = this._resolveOutline(trueIndex, styleConfig);
      svg += '<g class="cassette-cog-side">';
      svg += `<rect x="${xOffset}" y="-${cog.outerRadius}" width="${stack.cogWidth}" height="${cog.outerRadius * 2}" `;
      svg += `fill="${fill}" stroke="${stroke}" stroke-width="0.3" rx="0.2"/>`;
      if (showText) {
        const tx = xOffset + stack.cogWidth / 2;
        const ty = Math.min(maxRadius + 4, cog.outerRadius + 4);
        svg += `<text x="${tx}" y="${ty}" font-size="2.5" fill="${textColor}" `;
        svg += 'font-family="monospace" text-anchor="middle" font-weight="bold" ';
        svg += 'style="pointer-events: none; user-select: none;" ';
        svg += `transform="rotate(90 ${tx} ${ty})">${cog.teeth}T</text>`;
      }
      svg += "</g>";
    });
    const lockringX = direction === "ltr" ? stack.lockringX : -1.2;
    svg += `<rect class="cassette-lockring-side" x="${lockringX}" y="-11.8" width="${stack.lockringWidth}" height="23.6" fill="#111827" rx="0.2"/>`;
    svg += "</g>";
    return this._minifyFragment(svg);
  }
  renderFront(teethArray, styleConfig = {}) {
    const sortedTeeth = [...teethArray].sort((a, b) => b - a);
    if (sortedTeeth.length === 0) return "";
    const maxRadius = this._getOuterRadius(sortedTeeth[0]);
    const viewSize = Math.ceil(maxRadius + this.pitch);
    const showText = styleConfig.showText !== false;
    const textColor = styleConfig.textColor || null;
    const textAngles = new Array(sortedTeeth.length);
    const smallestTeeth = sortedTeeth[sortedTeeth.length - 1];
    const firstStep = 2 * Math.PI / smallestTeeth;
    let prevAngle = Math.round(-Math.PI / 2 / firstStep) * firstStep;
    textAngles[sortedTeeth.length - 1] = prevAngle;
    const minGap = 2 * (Math.PI / 180);
    for (let i = sortedTeeth.length - 2; i >= 0; i--) {
      const teeth = sortedTeeth[i];
      const step = 2 * Math.PI / teeth;
      let nextToothIndex = Math.floor(prevAngle / step) + 1;
      let exactAngle = nextToothIndex * step;
      while (exactAngle <= prevAngle + minGap) {
        nextToothIndex++;
        exactAngle = nextToothIndex * step;
      }
      textAngles[i] = exactAngle;
      prevAngle = exactAngle;
    }
    let svg = '<svg xmlns="http://www.w3.org/2000/svg" ';
    svg += `viewBox="-${viewSize} -${viewSize} ${viewSize * 2} ${viewSize * 2}" `;
    svg += 'style="width: 100%; height: 100%; max-height: 400px; display: block;">';
    sortedTeeth.forEach((teeth, index) => {
      const fill = this._resolveColor(index, styleConfig);
      const stroke = this._resolveOutline(index, styleConfig);
      const opacity = this._resolveOpacity(index, styleConfig);
      let computedTextColor = textColor;
      if (!computedTextColor) {
        const isDefaultLargestCog = index === 0 && (!styleConfig.fillColors || styleConfig.fillColors.length === 0);
        computedTextColor = isDefaultLargestCog ? "#94a3b8" : "#64748b";
      }
      const pathD = this._generateCogPath(teeth);
      svg += '<g class="cog-layer">';
      svg += `<path d="${pathD}" fill="${fill}" stroke="${stroke}" `;
      svg += `stroke-width="0.5" fill-rule="evenodd" opacity="${opacity}" />`;
      if (showText) {
        const textRadius = this._getOuterRadius(teeth) - this.pitch * 0.19;
        const exactAngle = textAngles[index];
        const textX = textRadius * Math.cos(exactAngle);
        const textY = textRadius * Math.sin(exactAngle);
        let textRotation = exactAngle * 180 / Math.PI + 90;
        const normalizedAngle = (exactAngle % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
        if (normalizedAngle > Math.PI / 3 && normalizedAngle < 4 * Math.PI / 3) {
          textRotation += 180;
        }
        const styleStr = !textColor ? "mix-blend-mode: difference; fill: white;" : `fill: ${computedTextColor};`;
        svg += `<text x="${textX}" y="${textY}" font-size="2.4" `;
        svg += 'font-family="monospace" font-weight="bold" text-anchor="middle" ';
        svg += 'dominant-baseline="central" opacity="0.9" ';
        svg += `style="pointer-events: none; user-select: none; ${styleStr}" `;
        svg += `transform="rotate(${textRotation}, ${textX}, ${textY})">${teeth}T</text>`;
      }
      svg += "</g>";
    });
    const lockringD = this._generateLockringPath();
    svg += '<g class="lockring-group">';
    svg += `<path d="${lockringD}" fill="#111827" stroke="#374151" `;
    svg += 'stroke-width="0.5" fill-rule="evenodd" />';
    if (showText) {
      svg += '<text x="0" y="-10.6" dominant-baseline="central" font-size="1.1" ';
      svg += 'fill="#d1d5db" text-anchor="middle" font-weight="bold" ';
      svg += 'font-family="sans-serif" style="pointer-events: none;">LOCK</text>';
      svg += '<text x="0" y="10.6" dominant-baseline="central" font-size="0.9" ';
      svg += 'fill="#9ca3af" text-anchor="middle" font-family="sans-serif" ';
      svg += 'style="pointer-events: none;">40 N.m</text>';
    }
    svg += "</g></svg>";
    return this._minifySvg(svg);
  }
  renderSide(teethArray, direction = "ltr", styleConfig = {}) {
    const sortedTeeth = [...teethArray].sort((a, b) => b - a);
    if (sortedTeeth.length === 0) return "";
    const displayTeeth = direction === "ltr" ? sortedTeeth : [...sortedTeeth].reverse();
    const cogWidth = 1.2;
    const stepWidth = 3;
    const totalWidth = displayTeeth.length * stepWidth;
    const maxRadius = this._getOuterRadius(sortedTeeth[0]);
    const viewHeight = Math.ceil(maxRadius + this.pitch);
    const freehubRadius = 9.5;
    const showText = styleConfig.showText !== false;
    const textColor = styleConfig.textColor || "#64748b";
    let carrierPath = "M 0 0 ";
    displayTeeth.forEach((teeth, i) => {
      const r = this._getPitchRadius(teeth) - 2;
      const x = i * stepWidth + cogWidth / 2;
      carrierPath += `L ${x} ${-r} `;
    });
    carrierPath += `L ${(displayTeeth.length - 1) * stepWidth} 0 Z`;
    let carrierPathBottom = "M 0 0 ";
    displayTeeth.forEach((teeth, i) => {
      const r = this._getPitchRadius(teeth) - 2;
      const x = i * stepWidth + cogWidth / 2;
      carrierPathBottom += `L ${x} ${r} `;
    });
    carrierPathBottom += `L ${(displayTeeth.length - 1) * stepWidth} 0 Z`;
    let svg = '<svg xmlns="http://www.w3.org/2000/svg" ';
    svg += `viewBox="-10 -${viewHeight} ${totalWidth + 20} ${viewHeight * 2}" `;
    svg += 'style="width: 100%; height: 100%; max-height: 300px; display: block;">';
    svg += `<path d="${carrierPath}" fill="#cbd5e1" opacity="0.6" />`;
    svg += `<path d="${carrierPathBottom}" fill="#cbd5e1" opacity="0.6" />`;
    svg += `<rect x="-1" y="-${freehubRadius}" width="${totalWidth + 2}" `;
    svg += `height="${freehubRadius * 2}" fill="#475569" rx="0.5" />`;
    displayTeeth.forEach((teeth, index) => {
      const trueIndex = sortedTeeth.indexOf(teeth);
      const r = this._getOuterRadius(teeth);
      const height = r * 2;
      const xOffset = index * stepWidth;
      const fill = this._resolveColor(trueIndex, styleConfig);
      const stroke = this._resolveOutline(trueIndex, styleConfig);
      svg += "<g>";
      svg += `<rect x="${xOffset}" y="-${r}" width="${cogWidth}" height="${height}" `;
      svg += `fill="${fill}" stroke="${stroke}" stroke-width="0.3" rx="0.2" />`;
      if (showText) {
        const tx = xOffset + cogWidth / 2;
        const ty = r + 4;
        svg += `<text x="${tx}" y="${ty}" font-size="2.5" fill="${textColor}" `;
        svg += 'font-family="monospace" text-anchor="middle" font-weight="bold" ';
        svg += 'style="pointer-events: none; user-select: none;" ';
        svg += `transform="rotate(90 ${tx} ${ty})">${teeth}T</text>`;
      }
      svg += "</g>";
    });
    const lockringX = direction === "ltr" ? totalWidth - stepWidth + cogWidth + 0.2 : -0.2 - 1;
    svg += `<rect x="${lockringX}" y="-11.8" width="1" height="23.6" fill="#111827" rx="0.2" />`;
    svg += "</svg>";
    return this._minifySvg(svg);
  }
};
var ChainringSVGGenerator = class {
  constructor(pitch = 10) {
    this.pitch = pitch;
    this.geometry = new SprocketGeometry(pitch);
    this.coordinatePrecision = 3;
  }
  _p2c(radius, angle) {
    return this.geometry.p2c(radius, angle);
  }
  _getPitchRadius(teeth) {
    return this.geometry.getPitchRadius(teeth);
  }
  _getOuterRadius(teeth) {
    return this.geometry.getOuterRadius(teeth);
  }
  _generateChainringPath(teeth) {
    const innerHoleRadius = Math.max(15, this._getPitchRadius(teeth) - this.pitch * 1.5);
    return this.geometry.generateSprocketPath(teeth, innerHoleRadius);
  }
  _formatNumber(value) {
    const multiplier = 10 ** this.coordinatePrecision;
    const rounded = Math.round(Number.parseFloat(value) * multiplier) / multiplier;
    return Object.is(rounded, -0) ? "0" : String(rounded);
  }
  _minifySvg(svg) {
    return svg.replace(/-?\d+\.\d+/g, (value) => this._formatNumber(value)).replace(/\s\/>/g, "/>").replace(/>\s+</g, "><");
  }
  render(teeth, styleConfig = {}) {
    const maxRadius = this._getOuterRadius(teeth);
    const viewSize = Math.ceil(maxRadius + this.pitch);
    const showText = styleConfig.showText !== false;
    const fill = styleConfig.fillColor || "#1e293b";
    const stroke = styleConfig.outlineColor || "#0f172a";
    const textColor = styleConfig.textColor || "#94a3b8";
    let svg = '<svg xmlns="http://www.w3.org/2000/svg" ';
    svg += `viewBox="-${viewSize} -${viewSize} ${viewSize * 2} ${viewSize * 2}" `;
    svg += 'style="width: 100%; height: 100%; display: block;">';
    const pathD = this._generateChainringPath(teeth);
    svg += `<g><path d="${pathD}" fill="${fill}" stroke="${stroke}" `;
    svg += 'stroke-width="0.5" fill-rule="evenodd"/>';
    if (showText) {
      const textRadius = this._getOuterRadius(teeth) - this.pitch * 0.17;
      const step = 2 * Math.PI / teeth;
      const exactAngle = Math.round(-Math.PI / 2 / step) * step;
      const textX = textRadius * Math.cos(exactAngle);
      const textY = textRadius * Math.sin(exactAngle);
      const textRotation = exactAngle * 180 / Math.PI + 90;
      svg += `<text x="${textX}" y="${textY}" font-size="2.4" `;
      svg += 'font-family="monospace" font-weight="bold" text-anchor="middle" ';
      svg += `dominant-baseline="central" fill="${textColor}" opacity="0.9" `;
      svg += 'style="pointer-events: none; user-select: none;" ';
      svg += `transform="rotate(${textRotation}, ${textX}, ${textY})">${teeth}T</text>`;
    }
    svg += "</g></svg>";
    return this._minifySvg(svg);
  }
};
var ChainSVGGenerator = class {
  constructor(config = {}) {
    this.coordinatePrecision = 3;
    this.config = {
      pitch: 100,
      outerRadius: 34,
      outerWaist: 25,
      innerRadius: 32,
      innerWaist: 24,
      rollerRadius: 30,
      pinRadius: 14,
      outerColor: "#cbd5e1",
      innerColor: "#94a3b8",
      pinColor: "#f8fafc",
      rollerColor: "#e2e8f0",
      rollerHoleColor: "#0f172a",
      strokeColor: "#0f172a",
      strokeWidth: 3,
      showPins: true,
      showRollers: false,
      flatTop: false,
      ...config
    };
  }
  getFlatTopPlatePath(radius, waist) {
    const halfPitch = this.config.pitch / 2;
    return [
      `M ${-halfPitch} ${-radius}`,
      `L ${halfPitch} ${-radius}`,
      `A ${radius} ${radius} 0 0 1 ${halfPitch} ${radius}`,
      `C ${this.config.pitch / 3} ${radius}, ${this.config.pitch / 6} ${waist}, 0 ${waist}`,
      `C ${-this.config.pitch / 6} ${waist}, ${-this.config.pitch / 3} ${radius}, ${-halfPitch} ${radius}`,
      `A ${radius} ${radius} 0 0 1 ${-halfPitch} ${-radius}`,
      "Z"
    ].join(" ");
  }
  getPlatePath(radius, waist) {
    const p = this.config.pitch;
    return [
      `M ${-p / 2} ${-radius}`,
      `C ${-p / 3} ${-radius}, ${-p / 6} ${-waist}, 0 ${-waist}`,
      `C ${p / 6} ${-waist}, ${p / 3} ${-radius}, ${p / 2} ${-radius}`,
      `A ${radius} ${radius} 0 0 1 ${p / 2} ${radius}`,
      `C ${p / 3} ${radius}, ${p / 6} ${waist}, 0 ${waist}`,
      `C ${-p / 6} ${waist}, ${-p / 3} ${radius}, ${-p / 2} ${radius}`,
      `A ${radius} ${radius} 0 0 1 ${-p / 2} ${-radius}`,
      "Z"
    ].join(" ");
  }
  getLinkPlatePath(radius, waist) {
    return this.config.flatTop ? this.getFlatTopPlatePath(radius, waist) : this.getPlatePath(radius, waist);
  }
  getInnerLinkSVG(x, y, angleDeg) {
    const {
      innerRadius,
      innerWaist,
      rollerRadius,
      innerColor,
      rollerColor,
      rollerHoleColor,
      strokeColor,
      strokeWidth
    } = this.config;
    const p = this.config.pitch;
    const path2 = this.getLinkPlatePath(innerRadius, innerWaist);
    let svg = `<g transform="translate(${x}, ${y}) rotate(${angleDeg})">`;
    svg += `<path d="${path2}" fill="${innerColor}" stroke="${strokeColor}" `;
    svg += `stroke-width="${strokeWidth}" stroke-linejoin="round"/>`;
    if (this.config.showRollers) {
      svg += `<circle cx="${-p / 2}" cy="0" r="${rollerRadius}" `;
      svg += `fill="${rollerColor}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>`;
      svg += `<circle cx="${p / 2}" cy="0" r="${rollerRadius}" `;
      svg += `fill="${rollerColor}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>`;
      svg += `<circle cx="${-p / 2}" cy="0" r="${rollerRadius * 0.4}" fill="${rollerHoleColor}"/>`;
      svg += `<circle cx="${p / 2}" cy="0" r="${rollerRadius * 0.4}" fill="${rollerHoleColor}"/>`;
    }
    svg += "</g>";
    return svg;
  }
  getOuterLinkSVG(x, y, angleDeg) {
    const { outerRadius, outerWaist, outerColor, strokeColor, strokeWidth } = this.config;
    const path2 = this.getLinkPlatePath(outerRadius, outerWaist);
    let svg = `<g transform="translate(${x}, ${y}) rotate(${angleDeg})">`;
    svg += `<path d="${path2}" fill="${outerColor}" stroke="${strokeColor}" `;
    svg += `stroke-width="${strokeWidth}" stroke-linejoin="round"/>`;
    svg += "</g>";
    return svg;
  }
  generateAngles(type, linkCount) {
    const angles = [];
    let currentAngle = 0;
    for (let i = 0; i < linkCount; i++) {
      if (type === "straight") {
        currentAngle = 0;
      } else if (type === "curve") {
        currentAngle += 5;
      } else if (type === "wave") {
        currentAngle = Math.sin(i * 0.4) * 45;
      } else if (type === "wrap") {
        if (i > Math.floor(linkCount * 0.2) && i < Math.floor(linkCount * 0.8)) {
          currentAngle += 15;
        }
      } else if (type === "loop") {
        currentAngle += 360 / linkCount;
      }
      angles.push(currentAngle);
    }
    return angles;
  }
  generateStrandSVG(linkAngles, startX = 0, startY = 0, startWithOuter = true) {
    let currentPivotX = startX;
    let currentPivotY = startY;
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    const innerLinks = [];
    const outerLinks = [];
    const pivotPoints = [{ x: currentPivotX, y: currentPivotY }];
    const updateBounds = (x, y) => {
      minX = Math.min(minX, x);
      maxX = Math.max(maxX, x);
      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
    };
    for (let i = 0; i < linkAngles.length; i++) {
      const angleDeg = linkAngles[i];
      const angleRad = angleDeg * Math.PI / 180;
      const centerX = currentPivotX + this.config.pitch / 2 * Math.cos(angleRad);
      const centerY = currentPivotY + this.config.pitch / 2 * Math.sin(angleRad);
      const isOuter = startWithOuter ? i % 2 === 0 : i % 2 !== 0;
      updateBounds(currentPivotX, currentPivotY);
      updateBounds(centerX, centerY);
      if (isOuter) {
        outerLinks.push(this.getOuterLinkSVG(centerX, centerY, angleDeg));
      } else {
        innerLinks.push(this.getInnerLinkSVG(centerX, centerY, angleDeg));
      }
      currentPivotX += this.config.pitch * Math.cos(angleRad);
      currentPivotY += this.config.pitch * Math.sin(angleRad);
      updateBounds(currentPivotX, currentPivotY);
      pivotPoints.push({ x: currentPivotX, y: currentPivotY });
    }
    const padding = this.config.outerRadius * 2;
    minX -= padding;
    maxX += padding;
    minY -= padding;
    maxY += padding;
    let svg = '<svg xmlns="http://www.w3.org/2000/svg" ';
    svg += `viewBox="${minX} ${minY} ${maxX - minX} ${maxY - minY}" `;
    svg += 'width="100%" height="100%"><g>';
    svg += `<g>${innerLinks.join("")}</g><g>${outerLinks.join("")}</g>`;
    svg += this.getPinsSVG(pivotPoints);
    svg += "</g></svg>";
    return this._minifySvg(svg);
  }
  getPinsSVG(pivotPoints) {
    if (!this.config.showPins) {
      return "";
    }
    const { pinRadius, pinColor, strokeColor, strokeWidth } = this.config;
    const pins = pivotPoints.map((point) => {
      let svg = `<circle cx="${point.x}" cy="${point.y}" r="${pinRadius}" `;
      svg += `fill="${pinColor}" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>`;
      return svg;
    });
    return `<g>${pins.join("")}</g>`;
  }
  render(linkCount, pathType = "straight", options = {}) {
    const startWithOuter = options.startLink !== "inner";
    return this.generateStrandSVG(this.generateAngles(pathType, linkCount), 0, 0, startWithOuter);
  }
  _formatNumber(value) {
    const multiplier = 10 ** this.coordinatePrecision;
    const rounded = Math.round(Number.parseFloat(value) * multiplier) / multiplier;
    return Object.is(rounded, -0) ? "0" : String(rounded);
  }
  _minifySvg(svg) {
    return svg.replace(/-?\d+\.\d+/g, (value) => this._formatNumber(value)).replace(/\s\/>/g, "/>").replace(/>\s+</g, "><");
  }
};
var DrivetrainSVGGenerator = class {
  constructor(config = {}) {
    this.pitch = config.pitch || 12.7;
    this.geometry = new SprocketGeometry(this.pitch);
    this.clearanceTolerance = config.clearanceTolerance || this.pitch * 0.03;
    this.inwardTolerance = config.inwardTolerance || 0.015;
    this.coordinatePrecision = 3;
  }
  render(options) {
    const layout = this._buildLayout(options);
    const style = this._buildStyle(options.styleConfig || {});
    if (options.animation && options.animation.enabled) {
      return this._renderAnimatedSvg(layout, style, options);
    }
    let svg = this._renderSvgOpen(layout);
    svg += this._renderCassette(layout, style, options);
    svg += this._renderChainring(layout, style, options);
    svg += this._renderChain(layout.chainPins, style);
    svg += this._renderLabels(layout, style, options);
    svg += "</svg>";
    return this._minifySvg(svg);
  }
  calculateLayout(options) {
    const layout = this._buildLayout(options);
    const animation = options.animation && options.animation.enabled ? this._buildAnimationConfig(layout, options) : null;
    return { ...layout, animation };
  }
  _buildLayout(options) {
    const rearRadius = this.geometry.getPitchRadius(options.selectedCog);
    const frontRadius = this.geometry.getPitchRadius(options.chainring);
    const solution = this._solvePitchLockedLayout(options, rearRadius, frontRadius);
    const rearCenter = { x: 0, y: 0 };
    const frontCenter = { x: solution.centerDistance, y: 0 };
    const rearRotation = solution.rearBottomAngle - 0.5 * this.geometry.getToothAngle(options.selectedCog);
    const frontRotation = solution.frontTopAngle - 0.5 * this.geometry.getToothAngle(options.chainring);
    const rearBottom = this.geometry.getValleyCenter(
      options.selectedCog,
      0,
      rearRotation,
      rearCenter
    );
    const rearTop = this.geometry.getValleyCenter(
      options.selectedCog,
      solution.rearWrapCount,
      rearRotation,
      rearCenter
    );
    const frontTop = this.geometry.getValleyCenter(
      options.chainring,
      0,
      frontRotation,
      frontCenter
    );
    const frontBottom = this.geometry.getValleyCenter(
      options.chainring,
      solution.frontWrapCount,
      frontRotation,
      frontCenter
    );
    return {
      rearCenter,
      frontCenter,
      requestedCenterDistance: options.chainstay,
      effectiveCenterDistance: solution.centerDistance,
      rearRadius,
      frontRadius,
      rearRotation,
      frontRotation,
      rearTop,
      rearBottom,
      frontTop,
      frontBottom,
      straightLinkCount: solution.straightLinkCount,
      rearWrapCount: solution.rearWrapCount,
      frontWrapCount: solution.frontWrapCount,
      chainPins: this._buildClosedChainPins({
        selectedCog: options.selectedCog,
        chainring: options.chainring,
        rearCenter,
        frontCenter,
        rearRotation,
        frontRotation,
        rearWrapCount: solution.rearWrapCount,
        frontWrapCount: solution.frontWrapCount,
        straightLinkCount: solution.straightLinkCount
      })
    };
  }
  _solvePitchLockedLayout(options, rearRadius, frontRadius) {
    const targetCenterDistance = options.chainstay;
    const frontToothAngle = this.geometry.getToothAngle(options.chainring);
    const rearToothAngle = this.geometry.getToothAngle(options.selectedCog);
    const radiusDelta = frontRadius - rearRadius;
    const targetStraightLength = Math.sqrt(Math.max(0, targetCenterDistance ** 2 - radiusDelta ** 2));
    const targetStraightLinks = Math.max(1, Math.round(targetStraightLength / this.pitch));
    const targetFrontWrap = this._getTargetFrontWrapCount(options, targetCenterDistance);
    const targetRearWrap = this._getTargetRearWrapCount(options, targetCenterDistance);
    let best = null;
    for (let straightLinkCount = Math.max(1, targetStraightLinks - 12); straightLinkCount <= targetStraightLinks + 12; straightLinkCount++) {
      const straightLength = straightLinkCount * this.pitch;
      for (let frontWrapCount = 2; frontWrapCount < options.chainring - 1; frontWrapCount++) {
        if (!this._isWrapCountAllowed(frontWrapCount, targetFrontWrap, frontRadius, rearRadius)) {
          continue;
        }
        const frontDelta = frontWrapCount * frontToothAngle;
        if (frontDelta <= 0 || frontDelta >= Math.PI * 1.85) continue;
        for (let rearWrapCount = 2; rearWrapCount < options.selectedCog - 1; rearWrapCount++) {
          if (!this._isWrapCountAllowed(rearWrapCount, targetRearWrap, rearRadius, frontRadius)) {
            continue;
          }
          if (!this._hasEvenLinkCount(straightLinkCount, frontWrapCount, rearWrapCount)) {
            continue;
          }
          const rearDelta = rearWrapCount * rearToothAngle;
          if (rearDelta <= 0 || rearDelta >= Math.PI * 1.85) continue;
          const frontHalf = frontDelta / 2;
          const rearHalf = rearDelta / 2;
          const verticalOffset = rearRadius * Math.sin(rearHalf) - frontRadius * Math.sin(frontHalf);
          const horizontalSpan = Math.sqrt(Math.max(0, straightLength ** 2 - verticalOffset ** 2));
          const centerDistance = horizontalSpan - frontRadius * Math.cos(frontHalf) - rearRadius * Math.cos(rearHalf);
          if (!Number.isFinite(centerDistance) || centerDistance < 150 || centerDistance > 800) {
            continue;
          }
          const candidateGeometry = this._buildCandidateGeometry({
            centerDistance,
            frontRadius,
            rearRadius,
            frontHalf,
            rearHalf
          });
          const clearance = this._measureCandidateClearance(candidateGeometry);
          if (!clearance.valid) {
            continue;
          }
          const score = this._scoreLayoutCandidate({
            centerDistance,
            targetCenterDistance,
            frontWrapCount,
            rearWrapCount,
            targetFrontWrap,
            targetRearWrap,
            verticalOffset,
            clearance
          });
          if (!best || score < best.score) {
            best = {
              score,
              centerDistance,
              straightLinkCount,
              frontWrapCount,
              rearWrapCount,
              frontTopAngle: -frontHalf,
              frontBottomAngle: frontHalf,
              rearBottomAngle: Math.PI - rearHalf,
              rearTopAngle: Math.PI + rearHalf
            };
          }
        }
      }
    }
    return best || this._fallbackLayout(options, rearRadius, frontRadius);
  }
  _getTargetFrontWrapCount(options, targetCenterDistance) {
    const targetAngle = this._getTargetWrapAngles(options, targetCenterDistance).front;
    return Math.round(targetAngle / this.geometry.getToothAngle(options.chainring));
  }
  _getTargetRearWrapCount(options, targetCenterDistance) {
    const targetAngle = this._getTargetWrapAngles(options, targetCenterDistance).rear;
    return Math.round(targetAngle / this.geometry.getToothAngle(options.selectedCog));
  }
  _getTargetWrapAngles(options, targetCenterDistance) {
    const rearRadius = this.geometry.getPitchRadius(options.selectedCog);
    const frontRadius = this.geometry.getPitchRadius(options.chainring);
    const radiusDelta = Math.abs(frontRadius - rearRadius);
    const tangentAngle = Math.asin(Math.max(-0.95, Math.min(0.95, radiusDelta / targetCenterDistance)));
    const smallWrap = Math.PI - 2 * tangentAngle;
    const largeWrap = Math.PI + 2 * tangentAngle;
    return frontRadius >= rearRadius ? { front: largeWrap, rear: smallWrap } : { front: smallWrap, rear: largeWrap };
  }
  _isWrapCountAllowed(wrapCount, targetWrapCount, sprocketRadius, otherRadius) {
    const overwrapAllowance = sprocketRadius < otherRadius ? 1 : 4;
    return wrapCount <= targetWrapCount + overwrapAllowance;
  }
  _hasEvenLinkCount(straightLinkCount, frontWrapCount, rearWrapCount) {
    return (straightLinkCount * 2 + frontWrapCount + rearWrapCount) % 2 === 0;
  }
  _scoreLayoutCandidate(candidate) {
    const centerError = Math.abs(candidate.centerDistance - candidate.targetCenterDistance);
    const frontWrapError = Math.abs(candidate.frontWrapCount - candidate.targetFrontWrap);
    const rearWrapError = Math.abs(candidate.rearWrapCount - candidate.targetRearWrap);
    const smoothness = Math.abs(candidate.verticalOffset);
    const inwardPenalty = candidate.clearance.maxInward * 800;
    const clearanceReward = Math.min(candidate.clearance.minClearance, this.pitch * 0.75) * 0.6;
    const wrapReward = Math.min(candidate.frontWrapCount, candidate.targetFrontWrap + 2) * 0.35 + Math.min(candidate.rearWrapCount, candidate.targetRearWrap + 2) * 0.35;
    return centerError * 10 + frontWrapError * 6 + rearWrapError * 6 + smoothness * 0.2 + inwardPenalty - clearanceReward - wrapReward;
  }
  _buildCandidateGeometry(candidate) {
    const rearCenter = { x: 0, y: 0 };
    const frontCenter = { x: candidate.centerDistance, y: 0 };
    return {
      rearCenter,
      frontCenter,
      rearRadius: candidate.rearRadius,
      frontRadius: candidate.frontRadius,
      rearTop: this._pointOnCircle(rearCenter, candidate.rearRadius, Math.PI + candidate.rearHalf),
      rearBottom: this._pointOnCircle(rearCenter, candidate.rearRadius, Math.PI - candidate.rearHalf),
      frontTop: this._pointOnCircle(frontCenter, candidate.frontRadius, -candidate.frontHalf),
      frontBottom: this._pointOnCircle(frontCenter, candidate.frontRadius, candidate.frontHalf)
    };
  }
  _measureCandidateClearance(candidate) {
    const checks = [
      this._measureSprocketSegmentClearance(
        candidate.rearTop,
        candidate.frontTop,
        candidate.rearCenter,
        candidate.rearRadius
      ),
      this._measureSprocketSegmentClearance(
        candidate.frontTop,
        candidate.rearTop,
        candidate.frontCenter,
        candidate.frontRadius
      ),
      this._measureSprocketSegmentClearance(
        candidate.frontBottom,
        candidate.rearBottom,
        candidate.frontCenter,
        candidate.frontRadius
      ),
      this._measureSprocketSegmentClearance(
        candidate.rearBottom,
        candidate.frontBottom,
        candidate.rearCenter,
        candidate.rearRadius
      )
    ];
    const minClearance = Math.min(...checks.map((check) => check.clearance));
    const maxInward = Math.max(...checks.map((check) => check.inward));
    return {
      valid: checks.every((check) => check.valid),
      minClearance,
      maxInward
    };
  }
  _measureSprocketSegmentClearance(start, end, center, radius) {
    const vector = {
      x: end.x - start.x,
      y: end.y - start.y
    };
    const length = Math.hypot(vector.x, vector.y);
    const unit = {
      x: vector.x / length,
      y: vector.y / length
    };
    const radial = {
      x: (start.x - center.x) / radius,
      y: (start.y - center.y) / radius
    };
    const outwardVelocity = unit.x * radial.x + unit.y * radial.y;
    const inward = Math.max(0, -outwardVelocity);
    const trimmedDistance = this._distanceFromPointToTrimmedSegment(center, start, end, this.pitch * 0.65);
    const clearance = trimmedDistance - radius;
    return {
      valid: inward <= this.inwardTolerance && clearance >= -this.clearanceTolerance,
      clearance,
      inward
    };
  }
  _distanceFromPointToTrimmedSegment(point, start, end, trimDistance) {
    const vector = {
      x: end.x - start.x,
      y: end.y - start.y
    };
    const lengthSquared = vector.x ** 2 + vector.y ** 2;
    const length = Math.sqrt(lengthSquared);
    if (length === 0) {
      return Math.hypot(point.x - start.x, point.y - start.y);
    }
    const rawT = ((point.x - start.x) * vector.x + (point.y - start.y) * vector.y) / lengthSquared;
    const trimT = Math.min(0.45, trimDistance / length);
    const t = Math.max(trimT, Math.min(1 - trimT, rawT));
    const closest = {
      x: start.x + vector.x * t,
      y: start.y + vector.y * t
    };
    return Math.hypot(point.x - closest.x, point.y - closest.y);
  }
  _fallbackLayout(options, rearRadius, frontRadius) {
    const radiusDelta = frontRadius - rearRadius;
    const targetStraightLength = Math.sqrt(Math.max(0, options.chainstay ** 2 - radiusDelta ** 2));
    const straightLinkCount = Math.max(1, Math.round(targetStraightLength / this.pitch));
    const frontWrapCount = Math.max(2, Math.round(options.chainring / 2));
    let rearWrapCount = Math.max(2, Math.round(options.selectedCog / 2));
    if (!this._hasEvenLinkCount(straightLinkCount, frontWrapCount, rearWrapCount)) {
      rearWrapCount += rearWrapCount < options.selectedCog - 2 ? 1 : -1;
    }
    const frontHalf = frontWrapCount * this.geometry.getToothAngle(options.chainring) / 2;
    const rearHalf = rearWrapCount * this.geometry.getToothAngle(options.selectedCog) / 2;
    return {
      centerDistance: options.chainstay,
      straightLinkCount,
      frontWrapCount,
      rearWrapCount,
      frontTopAngle: -frontHalf,
      frontBottomAngle: frontHalf,
      rearBottomAngle: Math.PI - rearHalf,
      rearTopAngle: Math.PI + rearHalf
    };
  }
  _buildClosedChainPins(config) {
    const pins = [];
    const rearBottom = this.geometry.getValleyCenter(config.selectedCog, 0, config.rearRotation, config.rearCenter);
    const rearTop = this.geometry.getValleyCenter(
      config.selectedCog,
      config.rearWrapCount,
      config.rearRotation,
      config.rearCenter
    );
    const frontTop = this.geometry.getValleyCenter(config.chainring, 0, config.frontRotation, config.frontCenter);
    const frontBottom = this.geometry.getValleyCenter(
      config.chainring,
      config.frontWrapCount,
      config.frontRotation,
      config.frontCenter
    );
    this._appendLinePins(pins, rearTop, frontTop, config.straightLinkCount, true);
    for (let i = 1; i <= config.frontWrapCount; i++) {
      pins.push({
        ...this.geometry.getValleyCenter(config.chainring, i, config.frontRotation, config.frontCenter),
        source: "chainring-wrap"
      });
    }
    this._appendLinePins(pins, frontBottom, rearBottom, config.straightLinkCount, false);
    for (let i = 1; i < config.rearWrapCount; i++) {
      pins.push({
        ...this.geometry.getValleyCenter(config.selectedCog, i, config.rearRotation, config.rearCenter),
        source: "cassette-wrap"
      });
    }
    return pins;
  }
  _appendLinePins(pins, start, end, linkCount, includeStart) {
    const firstStep = includeStart ? 0 : 1;
    for (let i = firstStep; i <= linkCount; i++) {
      const t = i / linkCount;
      pins.push({
        x: start.x + (end.x - start.x) * t,
        y: start.y + (end.y - start.y) * t,
        source: "straight"
      });
    }
  }
  _buildStyle(styleConfig) {
    const fills = styleConfig.fillColors || [];
    return {
      cassetteFill: fills[0] || "#cbd5e1",
      cassetteAltFill: fills[1] || "#e2e8f0",
      selectedFill: fills[2] || "#334155",
      chainringFill: fills[2] || fills[0] || "#1e293b",
      outlineColor: styleConfig.outlineColor || "#0f172a",
      textColor: styleConfig.textColor || "#64748b",
      chainOuter: styleConfig.chainOuter || "#cbd5e1",
      chainInner: styleConfig.chainInner || "#94a3b8",
      chainPin: styleConfig.chainPin || "#f8fafc",
      cassetteOpacity: styleConfig.layerOpacity !== void 0 ? styleConfig.layerOpacity : 0.35,
      selectedOpacity: styleConfig.selectedOpacity !== void 0 ? styleConfig.selectedOpacity : 1,
      flatTopChain: styleConfig.flatTopChain === true
    };
  }
  _renderAnimatedSvg(layout, style, options) {
    const animation = this._buildAnimationConfig(layout, options);
    let svg = this._renderSvgOpen(layout);
    svg += this._renderAnimatedDefs(layout, style, options);
    svg += this._renderAnimatedCassette(layout, style, options, animation);
    svg += this._renderAnimatedChainring(layout, style, options, animation);
    svg += this._renderAnimatedChain(layout.chainPins, animation);
    svg += this._renderLabels(layout, style, options);
    svg += "</svg>";
    return this._minifySvg(svg);
  }
  _buildAnimationConfig(layout, options) {
    const frontRpm = options.animation.rpm;
    const cassetteRpm = frontRpm * options.chainring / options.selectedCog;
    const frontDuration = 60 / frontRpm;
    const cassetteDuration = 60 / cassetteRpm;
    const chainPathLength = this._measureChainTrackLength(layout, options);
    const chainDistancePerFrontRevolution = options.chainring * this.pitch;
    const chainDuration = chainPathLength / (chainDistancePerFrontRevolution * (frontRpm / 60));
    return {
      frontRpm,
      cassetteRpm,
      frontDuration,
      cassetteDuration,
      chainDuration,
      chainPathId: "drivetrain-chain-path",
      outerLinkId: "drivetrain-link-outer",
      innerLinkId: "drivetrain-link-inner",
      pinId: "drivetrain-chain-pin"
    };
  }
  _renderAnimatedDefs(layout, style, options) {
    let svg = "<defs>";
    svg += `<path id="drivetrain-chain-path" d="${this._buildChainTrackPath(layout)}"/>`;
    svg += this._renderAnimatedLinkDef("drivetrain-link-outer", "outer", style);
    svg += this._renderAnimatedLinkDef("drivetrain-link-inner", "inner", style);
    svg += this._renderAnimatedPinDef("drivetrain-chain-pin", style);
    svg += "</defs>";
    return svg;
  }
  _renderAnimatedLinkDef(id, type, style) {
    const isOuter = type === "outer";
    const radius = this.pitch * (isOuter ? 0.34 : 0.32);
    const waist = this.pitch * (isOuter ? 0.25 : 0.24);
    const fill = isOuter ? style.chainOuter : style.chainInner;
    let svg = `<g id="${id}">`;
    svg += `<path d="${this._getChainPlatePath(radius, waist, style)}" fill="${fill}" stroke="${style.outlineColor}" `;
    svg += 'stroke-width="0.45" stroke-linejoin="round"/>';
    svg += "</g>";
    return svg;
  }
  _renderAnimatedPinDef(id, style) {
    const pinRadius = this.pitch * 0.13;
    let svg = `<circle id="${id}" cx="0" cy="0" r="${pinRadius}" `;
    svg += `fill="${style.chainPin}" stroke="${style.outlineColor}" stroke-width="0.45"/>`;
    return svg;
  }
  _renderAnimatedCassette(layout, style, options, animation) {
    const sortedCogs = [...options.cogs].sort((a, b) => b - a);
    const from = this._radToDeg(layout.rearRotation);
    const to = from + 360;
    let svg = `<g transform="translate(${layout.rearCenter.x} ${layout.rearCenter.y})">`;
    svg += "<g>";
    svg += `<animateTransform attributeName="transform" type="rotate" from="${from}" to="${to}" `;
    svg += `dur="${animation.cassetteDuration}s" repeatCount="indefinite"/>`;
    sortedCogs.forEach((teeth, index) => {
      const isSelected = teeth === options.selectedCog;
      const fill = isSelected ? style.selectedFill : index % 2 === 0 ? style.cassetteFill : style.cassetteAltFill;
      const opacity = isSelected ? style.selectedOpacity : style.cassetteOpacity;
      const path2 = this.geometry.generateSprocketPath(
        teeth,
        Math.min(11, this.geometry.getPitchRadius(teeth) * 0.45)
      );
      svg += `<path d="${path2}" fill="${fill}" stroke="${style.outlineColor}" `;
      svg += `stroke-width="0.55" fill-rule="evenodd" opacity="${opacity}"/>`;
    });
    svg += "</g></g>";
    return svg;
  }
  _renderAnimatedChainring(layout, style, options, animation) {
    const innerHoleRadius = Math.max(18, layout.frontRadius - this.pitch * 1.5);
    const path2 = this.geometry.generateSprocketPath(options.chainring, innerHoleRadius);
    const from = this._radToDeg(layout.frontRotation);
    const to = from + 360;
    let svg = `<g transform="translate(${layout.frontCenter.x} ${layout.frontCenter.y})">`;
    svg += "<g>";
    svg += `<animateTransform attributeName="transform" type="rotate" from="${from}" to="${to}" `;
    svg += `dur="${animation.frontDuration}s" repeatCount="indefinite"/>`;
    svg += `<path d="${path2}" fill="${style.chainringFill}" stroke="${style.outlineColor}" `;
    svg += 'stroke-width="0.7" fill-rule="evenodd"/>';
    svg += "</g></g>";
    return svg;
  }
  _renderAnimatedChain(pins, animation) {
    const innerLinks = [];
    const outerLinks = [];
    const pinsSvg = [];
    pins.forEach((point, index) => {
      const next = pins[(index + 1) % pins.length];
      const length = Math.hypot(next.x - point.x, next.y - point.y);
      if (length < this.pitch * 0.35 || length > this.pitch * 1.75) {
        return;
      }
      const linkId = index % 2 === 0 ? animation.outerLinkId : animation.innerLinkId;
      const linkBegin = -(animation.chainDuration * (index + 0.5) / pins.length);
      const pinBegin = -(animation.chainDuration * index / pins.length);
      const linkSvg = this._renderAnimatedUse(linkId, animation, linkBegin, true);
      const pinSvg = this._renderAnimatedUse(animation.pinId, animation, pinBegin, false);
      if (index % 2 === 0) {
        outerLinks.push(linkSvg);
      } else {
        innerLinks.push(linkSvg);
      }
      pinsSvg.push(pinSvg);
    });
    let svg = '<g id="inner-links">';
    svg += innerLinks.join("");
    svg += '</g><g id="outer-links">';
    svg += outerLinks.join("");
    svg += '</g><g id="pins">';
    svg += pinsSvg.join("");
    svg += "</g>";
    return svg;
  }
  _renderAnimatedUse(defId, animation, begin, rotate) {
    let svg = "<g>";
    svg += `<use href="#${defId}"/>`;
    svg += `<animateMotion dur="${animation.chainDuration}s" begin="${begin}s" `;
    svg += `repeatCount="indefinite"${rotate ? ' rotate="auto"' : ""}>`;
    svg += `<mpath href="#${animation.chainPathId}"/>`;
    svg += "</animateMotion>";
    svg += "</g>";
    return svg;
  }
  _buildChainTrackPath(layout) {
    const track = this._buildChainTrackGeometry(layout);
    return [
      `M ${track.rearTop.x} ${track.rearTop.y}`,
      `L ${track.frontTop.x} ${track.frontTop.y}`,
      this._buildArcCommand(layout.frontRadius, track.frontLargeArc, track.frontBottom),
      `L ${track.rearBottom.x} ${track.rearBottom.y}`,
      this._buildArcCommand(layout.rearRadius, track.rearLargeArc, track.rearTop),
      "Z"
    ].join(" ");
  }
  _buildArcCommand(radius, largeArc, end) {
    return `A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
  }
  _measureChainTrackLength(layout) {
    const track = this._buildChainTrackGeometry(layout);
    const topRun = Math.hypot(track.frontTop.x - track.rearTop.x, track.frontTop.y - track.rearTop.y);
    const bottomRun = Math.hypot(
      track.rearBottom.x - track.frontBottom.x,
      track.rearBottom.y - track.frontBottom.y
    );
    const frontArc = layout.frontRadius * track.frontArcAngle;
    const rearArc = layout.rearRadius * track.rearArcAngle;
    return topRun + frontArc + bottomRun + rearArc;
  }
  _buildChainTrackGeometry(layout) {
    const centerVector = {
      x: layout.frontCenter.x - layout.rearCenter.x,
      y: layout.frontCenter.y - layout.rearCenter.y
    };
    const centerDistance = Math.hypot(centerVector.x, centerVector.y);
    const radiusDelta = layout.rearRadius - layout.frontRadius;
    const normalX = Math.max(-0.999, Math.min(0.999, radiusDelta / centerDistance));
    const normalY = Math.sqrt(Math.max(0, 1 - normalX ** 2));
    const topNormal = { x: normalX, y: -normalY };
    const bottomNormal = { x: normalX, y: normalY };
    const rearTop = this._offsetPoint(layout.rearCenter, topNormal, layout.rearRadius);
    const frontTop = this._offsetPoint(layout.frontCenter, topNormal, layout.frontRadius);
    const frontBottom = this._offsetPoint(layout.frontCenter, bottomNormal, layout.frontRadius);
    const rearBottom = this._offsetPoint(layout.rearCenter, bottomNormal, layout.rearRadius);
    const frontArcAngle = this._normalizeCounterclockwiseDelta(
      Math.atan2(frontTop.y - layout.frontCenter.y, frontTop.x - layout.frontCenter.x),
      Math.atan2(frontBottom.y - layout.frontCenter.y, frontBottom.x - layout.frontCenter.x)
    );
    const rearArcAngle = this._normalizeCounterclockwiseDelta(
      Math.atan2(rearBottom.y - layout.rearCenter.y, rearBottom.x - layout.rearCenter.x),
      Math.atan2(rearTop.y - layout.rearCenter.y, rearTop.x - layout.rearCenter.x)
    );
    return {
      rearTop,
      frontTop,
      frontBottom,
      rearBottom,
      frontArcAngle,
      rearArcAngle,
      frontLargeArc: frontArcAngle > Math.PI ? 1 : 0,
      rearLargeArc: rearArcAngle > Math.PI ? 1 : 0
    };
  }
  _offsetPoint(point, unit, distance) {
    return {
      x: point.x + unit.x * distance,
      y: point.y + unit.y * distance
    };
  }
  _renderSvgOpen(layout) {
    const padding = 95;
    const minX = -layout.rearRadius - padding;
    const maxX = layout.effectiveCenterDistance + layout.frontRadius + padding;
    const maxRadius = Math.max(layout.rearRadius, layout.frontRadius);
    const minY = -maxRadius - padding;
    const maxY = maxRadius + padding;
    let svg = '<svg xmlns="http://www.w3.org/2000/svg" ';
    svg += `viewBox="${minX} ${minY} ${maxX - minX} ${maxY - minY}" `;
    svg += `data-effective-chainstay="${layout.effectiveCenterDistance}" `;
    svg += 'width="100%" height="100%">';
    return svg;
  }
  _renderCassette(layout, style, options) {
    const sortedCogs = [...options.cogs].sort((a, b) => b - a);
    let svg = "";
    sortedCogs.forEach((teeth, index) => {
      const isSelected = teeth === options.selectedCog;
      const fill = isSelected ? style.selectedFill : index % 2 === 0 ? style.cassetteFill : style.cassetteAltFill;
      const opacity = isSelected ? style.selectedOpacity : style.cassetteOpacity;
      const path2 = this.geometry.generateSprocketPath(
        teeth,
        Math.min(11, this.geometry.getPitchRadius(teeth) * 0.45)
      );
      svg += `<g transform="translate(${layout.rearCenter.x} ${layout.rearCenter.y}) `;
      svg += `rotate(${this._radToDeg(layout.rearRotation)})">`;
      svg += `<path d="${path2}" fill="${fill}" stroke="${style.outlineColor}" `;
      svg += `stroke-width="0.55" fill-rule="evenodd" opacity="${opacity}"/>`;
      svg += "</g>";
    });
    return svg;
  }
  _renderChainring(layout, style, options) {
    const innerHoleRadius = Math.max(18, layout.frontRadius - this.pitch * 1.5);
    const path2 = this.geometry.generateSprocketPath(options.chainring, innerHoleRadius);
    let svg = `<g transform="translate(${layout.frontCenter.x} ${layout.frontCenter.y}) `;
    svg += `rotate(${this._radToDeg(layout.frontRotation)})">`;
    svg += `<path d="${path2}" fill="${style.chainringFill}" stroke="${style.outlineColor}" `;
    svg += 'stroke-width="0.7" fill-rule="evenodd"/>';
    svg += "</g>";
    return svg;
  }
  _renderChain(pins, style) {
    const links = [];
    const innerLinks = [];
    const outerLinks = [];
    for (let i = 0; i < pins.length; i++) {
      const start = pins[i];
      const end = pins[(i + 1) % pins.length];
      const length = Math.hypot(end.x - start.x, end.y - start.y);
      if (length < this.pitch * 0.35 || length > this.pitch * 1.75) {
        continue;
      }
      const type = i % 2 === 0 ? "outer" : "inner";
      links.push({ type, svg: this._renderLinkPlate(start, end, type, style) });
    }
    links.forEach((link) => {
      if (link.type === "outer") {
        outerLinks.push(link.svg);
      } else {
        innerLinks.push(link.svg);
      }
    });
    let svg = `<g>${innerLinks.join("")}</g><g>${outerLinks.join("")}</g><g>`;
    pins.forEach((point) => {
      svg += this._renderPin(point, style);
    });
    svg += "</g>";
    return svg;
  }
  _renderLabels(layout, style, options) {
    if (!options.showText) {
      return "";
    }
    let svg = "";
    svg += this._renderLabel(layout.rearCenter.x, layout.rearRadius + 22, `${options.selectedCog}T`, style);
    svg += this._renderLabel(layout.frontCenter.x, layout.frontRadius + 24, `${options.chainring}T`, style);
    return svg;
  }
  _renderLinkPlate(start, end, type, style) {
    const centerX = (start.x + end.x) / 2;
    const centerY = (start.y + end.y) / 2;
    const angle = this._radToDeg(Math.atan2(end.y - start.y, end.x - start.x));
    const isOuter = type === "outer";
    const radius = this.pitch * (isOuter ? 0.34 : 0.32);
    const waist = this.pitch * (isOuter ? 0.25 : 0.24);
    const fill = isOuter ? style.chainOuter : style.chainInner;
    const path2 = this._getChainPlatePath(radius, waist, style);
    let svg = `<g transform="translate(${centerX} ${centerY}) rotate(${angle})">`;
    svg += `<path d="${path2}" fill="${fill}" stroke="${style.outlineColor}" `;
    svg += 'stroke-width="0.45" stroke-linejoin="round"/>';
    svg += "</g>";
    return svg;
  }
  _renderPin(point, style) {
    const pinRadius = this.pitch * 0.13;
    let svg = `<circle cx="${point.x}" cy="${point.y}" r="${pinRadius}" `;
    svg += `fill="${style.chainPin}" stroke="${style.outlineColor}" stroke-width="0.45"/>`;
    return svg;
  }
  _getPlatePath(radius, waist) {
    const halfPitch = this.pitch / 2;
    return [
      `M ${-halfPitch} ${-radius}`,
      `C ${-this.pitch / 3} ${-radius}, ${-this.pitch / 6} ${-waist}, 0 ${-waist}`,
      `C ${this.pitch / 6} ${-waist}, ${this.pitch / 3} ${-radius}, ${halfPitch} ${-radius}`,
      `A ${radius} ${radius} 0 0 1 ${halfPitch} ${radius}`,
      `C ${this.pitch / 3} ${radius}, ${this.pitch / 6} ${waist}, 0 ${waist}`,
      `C ${-this.pitch / 6} ${waist}, ${-this.pitch / 3} ${radius}, ${-halfPitch} ${radius}`,
      `A ${radius} ${radius} 0 0 1 ${-halfPitch} ${-radius}`,
      "Z"
    ].join(" ");
  }
  _getFlatTopPlatePath(radius, waist) {
    const halfPitch = this.pitch / 2;
    return [
      `M ${-halfPitch} ${-radius}`,
      `L ${halfPitch} ${-radius}`,
      `A ${radius} ${radius} 0 0 1 ${halfPitch} ${radius}`,
      `C ${this.pitch / 3} ${radius}, ${this.pitch / 6} ${waist}, 0 ${waist}`,
      `C ${-this.pitch / 6} ${waist}, ${-this.pitch / 3} ${radius}, ${-halfPitch} ${radius}`,
      `A ${radius} ${radius} 0 0 1 ${-halfPitch} ${-radius}`,
      "Z"
    ].join(" ");
  }
  _getChainPlatePath(radius, waist, style) {
    return style.flatTopChain ? this._getFlatTopPlatePath(radius, waist) : this._getPlatePath(radius, waist);
  }
  _normalizeCounterclockwiseDelta(startAngle, endAngle) {
    let delta = endAngle - startAngle;
    while (delta < 0) delta += 2 * Math.PI;
    while (delta >= 2 * Math.PI) delta -= 2 * Math.PI;
    return delta;
  }
  _pointOnCircle(center, radius, angle) {
    return {
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle)
    };
  }
  _renderLabel(x, y, label, style) {
    let svg = `<text x="${x}" y="${y}" font-size="12" fill="${style.textColor}" `;
    svg += 'font-family="monospace" font-weight="bold" text-anchor="middle" ';
    svg += `dominant-baseline="central">${label}</text>`;
    return svg;
  }
  _radToDeg(angle) {
    return angle * 180 / Math.PI;
  }
  _formatNumber(value) {
    const multiplier = 10 ** this.coordinatePrecision;
    const rounded = Math.round(Number.parseFloat(value) * multiplier) / multiplier;
    return Object.is(rounded, -0) ? "0" : String(rounded);
  }
  _minifySvg(svg) {
    return svg.replace(/-?\d+\.\d+/g, (value) => this._formatNumber(value)).replace(/\s\/>/g, "/>").replace(/>\s+</g, "><");
  }
};
var stylePresets = {
  classicSteel: {
    fillColors: ["#d7dee8", "#eef2f7", "#3f4652"],
    outlineColor: "#5f6b7a",
    textColor: "#334155",
    chainOuter: "#cfd6df",
    chainInner: "#9aa7b8",
    chainPin: "#f8fafc"
  },
  blackGold: {
    fillColors: ["#eab308", "#fef08a", "#111827"],
    outlineColor: "#ca8a04",
    textColor: "#0f172a",
    chainOuter: "#facc15",
    chainInner: "#a16207",
    chainPin: "#111827"
  },
  oilSlick: {
    fillColors: ["#22d3ee", "#a78bfa", "#f472b6"],
    outlineColor: "#0f172a",
    textColor: "#111827",
    chainOuter: "#67e8f9",
    chainInner: "#c084fc",
    chainPin: "#fef3c7"
  },
  blueprint: {
    fillColors: ["#dbeafe", "#93c5fd", "#1d4ed8"],
    outlineColor: "#1e40af",
    textColor: "#1e3a8a",
    chainOuter: "#bfdbfe",
    chainInner: "#60a5fa",
    chainPin: "#eff6ff"
  },
  raceRed: {
    fillColors: ["#f87171", "#fecaca", "#991b1b"],
    outlineColor: "#7f1d1d",
    textColor: "#450a0a",
    chainOuter: "#fee2e2",
    chainInner: "#ef4444",
    chainPin: "#ffffff"
  },
  ghostStack: {
    fillColors: ["#94a3b8", "#e2e8f0", "#0f172a"],
    outlineColor: "#334155",
    textColor: "#0f172a",
    layerOpacity: 0.28,
    selectedOpacity: 0.88,
    chainOuter: "#cbd5e1",
    chainInner: "#94a3b8",
    chainPin: "#ffffff"
  },
  xrayCassette: {
    fillColors: ["#67e8f9", "#cffafe", "#0e7490"],
    outlineColor: "#155e75",
    textColor: "#164e63",
    layerOpacity: 0.2,
    selectedOpacity: 0.72,
    chainOuter: "#a5f3fc",
    chainInner: "#22d3ee",
    chainPin: "#ecfeff"
  }
};
var drivetrainPresets = {
  compactRoad: {
    chainring: 50,
    cogs: [11, 12, 13, 14, 15, 17, 19, 21, 24, 28, 32],
    selectedCog: 17,
    chainstay: 410,
    showText: true
  },
  gravelWideRange: {
    chainring: 40,
    cogs: [10, 12, 14, 16, 18, 21, 24, 28, 33, 39, 45, 51],
    selectedCog: 24,
    chainstay: 430,
    showText: true
  },
  mtbTenFiftyTwo: {
    chainring: 32,
    cogs: [10, 12, 14, 16, 18, 21, 24, 28, 32, 36, 42, 52],
    selectedCog: 36,
    chainstay: 435,
    showText: true
  },
  trackFixie: {
    chainring: 48,
    cogs: [17],
    selectedCog: 17,
    chainstay: 390,
    showText: true
  },
  touringTripleInspired: {
    chainring: 26,
    cogs: [11, 13, 15, 17, 20, 23, 26, 30, 34, 40],
    selectedCog: 30,
    chainstay: 455,
    showText: true
  }
};
function resolveStylePreset(style) {
  if (!style) return {};
  if (typeof style === "string") return { ...stylePresets[style] || {} };
  return { ...style };
}
function resolveDrivetrainPreset(preset) {
  if (!preset) return {};
  if (typeof preset === "string") return { ...drivetrainPresets[preset] || {} };
  return { ...preset };
}
function chainringStyle(options = {}) {
  const styleConfig = {
    ...resolveStylePreset(options.style),
    ...options.styleConfig || {}
  };
  const fillColors = styleConfig.fillColors || [];
  return {
    ...styleConfig,
    fillColor: styleConfig.fillColor || fillColors[2] || fillColors[0],
    outlineColor: styleConfig.outlineColor,
    textColor: styleConfig.textColor
  };
}
var BicycleDrivetrainSVG = class {
  constructor(config = {}) {
    this.config = config;
    this.cassetteGenerator = new CassetteSVGGenerator(config.pitch);
    this.chainringGenerator = new ChainringSVGGenerator(config.pitch);
    this.drivetrainGenerator = new DrivetrainSVGGenerator(config);
  }
  cassette(cogs, options = {}) {
    const view = options.view || "front";
    const styleConfig = {
      ...resolveStylePreset(options.style),
      ...options.styleConfig || {}
    };
    return view === "side" ? this.cassetteGenerator.renderSide(cogs, options.direction || "ltr", styleConfig) : this.cassetteGenerator.renderFront(cogs, styleConfig);
  }
  cassetteStack(cogs, options = {}) {
    return this.cassetteGenerator.calculateStack(cogs, options);
  }
  cassetteGroup(cogs, options = {}) {
    const view = options.view || "front";
    const styleConfig = {
      ...resolveStylePreset(options.style),
      ...options.styleConfig || {}
    };
    return view === "side" ? this.cassetteGenerator.renderSideGroup(cogs, options.direction || "ltr", styleConfig) : this.cassetteGenerator.renderFrontGroup(cogs, styleConfig);
  }
  chainring(teeth, options = {}) {
    return this.chainringGenerator.render(teeth, chainringStyle(options));
  }
  chain(linkCount, pathType = "straight", options = {}) {
    const styleConfig = {
      ...resolveStylePreset(options.style),
      ...options.styleConfig || {}
    };
    const chainConfig = {
      outerColor: styleConfig.chainOuter || styleConfig.outerColor,
      innerColor: styleConfig.chainInner || styleConfig.innerColor,
      pinColor: styleConfig.chainPin || styleConfig.pinColor,
      rollerColor: styleConfig.rollerColor,
      rollerHoleColor: styleConfig.rollerHoleColor,
      strokeColor: styleConfig.outlineColor || styleConfig.strokeColor,
      showPins: options.showPins,
      showRollers: options.showRollers,
      flatTop: options.flatTop
    };
    Object.keys(chainConfig).forEach((key) => {
      if (chainConfig[key] === void 0) delete chainConfig[key];
    });
    return new ChainSVGGenerator(chainConfig).render(linkCount, pathType, {
      startLink: options.startLink
    });
  }
  drivetrain(options = {}) {
    const { preset, style, styleConfig, ...rest } = options;
    return this.drivetrainGenerator.render({
      ...resolveDrivetrainPreset(preset),
      ...rest,
      styleConfig: {
        ...resolveStylePreset(style),
        ...styleConfig || {}
      }
    });
  }
  drivetrainLayout(options = {}) {
    const { preset, style, styleConfig, ...rest } = options;
    return this.drivetrainGenerator.calculateLayout({
      ...resolveDrivetrainPreset(preset),
      ...rest,
      styleConfig: {
        ...resolveStylePreset(style),
        ...styleConfig || {}
      }
    });
  }
};
function renderDrivetrainSvg(options = {}) {
  return new BicycleDrivetrainSVG(options.generatorConfig).drivetrain(options);
}
function calculateCassetteStack(cogs, options = {}) {
  return new BicycleDrivetrainSVG(options.generatorConfig).cassetteStack(cogs, options);
}
function renderCassetteGroup(cogs, options = {}) {
  return new BicycleDrivetrainSVG(options.generatorConfig).cassetteGroup(cogs, options);
}
function calculateDrivetrainLayout(options = {}) {
  return new BicycleDrivetrainSVG(options.generatorConfig).drivetrainLayout(options);
}

// src/index.js
function fmt2(value) {
  return Number.isFinite(value) ? Number(value.toFixed(3)).toString() : String(value);
}
function attrs2(attributes = {}) {
  return Object.entries(attributes).filter(([, value]) => value !== void 0 && value !== null && value !== false).map(([key, value]) => value === true ? key : `${key}="${String(value)}"`).join(" ");
}
function tag2(name, attributes = {}, content = "") {
  const attributeText = attrs2(attributes);
  const open = attributeText ? `<${name} ${attributeText}` : `<${name}`;
  return content === null ? `${open}/>` : `${open}>${content}</${name}>`;
}
function svgDocument2(viewBox, content, attributes = {}) {
  return tag2("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    height: "100%",
    viewBox,
    preserveAspectRatio: "xMidYMid meet",
    ...attributes
  }, content);
}
function extractSvgContent(svg) {
  return svg.replace(/^<svg\b[^>]*>/, "").replace(/<\/svg>$/, "");
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
      hubPosition: "rear",
      ...options.hub || {}
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
      ...cassette.styleConfig || {}
    },
    generatorConfig: {
      pitch: cassette.pitch || options.drivetrain?.pitch || 12.7
    }
  };
}
function calculateRearAssemblyLayout(options = {}) {
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
  const cassetteEndX = cassetteStartX + lockringEndX * cassetteScaleX;
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
function renderRearAssemblySvg(options = {}) {
  const view = options.view || "side";
  const layout = calculateRearAssemblyLayout(options);
  const cogs = cassetteCogs(options);
  const cassetteGroup = renderCassetteGroup(cogs, {
    ...drivetrainStyleOptions(options),
    view: view === "side" ? "side" : "front",
    direction: "ltr"
  });
  if (view === "driveFace") {
    const wheel2 = renderWheelFaceGroup({
      ...wheelOptions(options),
      view: { wheelFaceSide: "right", hubFaceSide: "right" }
    });
    const cassette2 = tag2("g", { class: "assembly-cassette-face" }, cassetteGroup);
    return svgDocument2(layout.faceViewBox.map(fmt2).join(" "), [
      tag2("g", { transform: "translate(-350 -350)" }, wheel2),
      cassette2
    ].join(""), { class: "bicycle-assembly-svg bicycle-assembly-drive-face" });
  }
  const wheel = renderWheelSideGroup(wheelOptions(options));
  const cassette = tag2("g", {
    class: "assembly-cassette-side",
    transform: `translate(${fmt2(layout.cassette.mountStartX)} 0) scale(${fmt2(layout.cassette.scaleX)} 1)`
  }, cassetteGroup);
  return svgDocument2(layout.sideViewBox.map(fmt2).join(" "), [
    tag2("g", { transform: "translate(-100 -375)" }, wheel),
    cassette
  ].join(""), { class: "bicycle-assembly-svg bicycle-assembly-side" });
}
function renderWheelDrivetrainSvg(options = {}) {
  const drivetrain = {
    preset: "mtbTenFiftyTwo",
    ...options.drivetrain || {},
    animation: {
      enabled: true,
      rpm: 8,
      ...options.animation || {},
      ...options.drivetrain?.animation || {}
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
    view: { wheelFaceSide: "right", hubFaceSide: "right" }
  });
  const wheelDuration = layout.animation?.cassetteDuration || 4;
  const wheelGroup = tag2("g", {
    class: "assembly-animated-rear-wheel",
    transform: `translate(${fmt2(layout.rearCenter.x)} ${fmt2(layout.rearCenter.y)}) rotate(${fmt2(radToDeg(layout.rearRotation))})`
  }, `${tag2("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: `${fmt2(radToDeg(layout.rearRotation))} 0 0`,
    to: `${fmt2(radToDeg(layout.rearRotation) + 360)} 0 0`,
    dur: `${fmt2(wheelDuration)}s`,
    repeatCount: "indefinite",
    additive: "sum"
  }, null)}${tag2("g", { transform: "translate(-350 -350)" }, wheel)}`);
  return svgDocument2(viewBox.map(fmt2).join(" "), [
    wheelGroup,
    tag2("g", { class: "assembly-drivetrain" }, extractSvgContent(drivetrainSvg))
  ].join(""), {
    class: "bicycle-assembly-svg bicycle-assembly-wheel-drivetrain",
    "data-cassette-rpm": fmt2(layout.animation?.cassetteRpm || 0),
    "data-wheel-duration": `${fmt2(wheelDuration)}s`
  });
}
var BicycleAssemblySVG = class {
  rearAssembly(options = {}) {
    return renderRearAssemblySvg(options);
  }
  wheelDrivetrain(options = {}) {
    return renderWheelDrivetrainSvg(options);
  }
  layout(options = {}) {
    return calculateRearAssemblyLayout(options);
  }
};
var index_default = BicycleAssemblySVG;
//# sourceMappingURL=index.cjs.map
