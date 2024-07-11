// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { mergeConfig } = require("metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);

const {
  resolver: { assetExts, sourceExts },
} = defaultConfig;

const customConfig = {
  resolver: {
    assetExts: [...assetExts, "obj", "mtl", "fbx"],
    sourceExts: [...sourceExts, "cjs", "jsx", "ts", "tsx", "mjs"],
  },
};

const newConfig = mergeConfig(defaultConfig, customConfig);

module.exports = newConfig;
