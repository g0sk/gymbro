import {
  createMedia,
  Shorthands,
  createFont,
  createTamagui,
  createTokens,
} from "tamagui";

const interFont = createFont({
  family: "Inter, Helveitica, Arian, sansSerif",
  size: {
    10: 10,
    12: 12,
    14: 14,
    16: 16,
    20: 20,
    24: 24,
    32: 32,
  },
  lineHeight: {},
  weight: {},
  letterSpacing: {},
  face: {},
});

const palette = {};

//Tokens
const size = {};
export const tokens = createTokens({
  size,
  space: {...size},
  radius: {},
  zIndex: {},
  //Use palette
  color: {},
});

const config = createTamagui({
  fonts: {
    heading: interFont,
    body: interFont,
  },
  tokens,
  themes: {},
  shorthands: {
    f: "flex",
    m: "margin",
    mx: "marginHorizontal",
    my: "marginVertical",
    p: "padding",
    py: "paddingVertical",
    px: "paddingHorizontal",
    w: "width",
    h: "height",
  } as const,
  defaultProps: {},
});

type AppConfig = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}

  //Types for group styling props
  interface TypeOverride {
    groupNames(): "a" | "b" | "c";
  }
}

export default config;
