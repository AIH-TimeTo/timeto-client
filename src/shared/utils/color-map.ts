import { themeVars } from '@shared/styles/theme.css';

export const tbColorMap = {
  RED01: themeVars.color.tbRed01,
  RED02: themeVars.color.tbRed02,
  PURPLE01: themeVars.color.tbPurple01,
  PURPLE02: themeVars.color.tbPurple02,
  GREEN01: themeVars.color.tbGreen01,
  GREEN02: themeVars.color.tbGreen02,
  BLUE01: themeVars.color.tbBlue01,
  BLUE02: themeVars.color.tbBlue02,
  BROWN01: themeVars.color.tbBrown01,
  BROWN02: themeVars.color.tbBrown02,
} as const;

export const gfColorMap = {
  RED01: themeVars.color.gfRed01,
  RED02: themeVars.color.gfRed02,
  PURPLE01: themeVars.color.gfPurple01,
  PURPLE02: themeVars.color.gfPurple02,
  GREEN01: themeVars.color.gfGreen01,
  GREEN02: themeVars.color.gfGreen02,
  BLUE01: themeVars.color.gfBlue01,
  BLUE02: themeVars.color.gfBlue02,
  BROWN01: themeVars.color.gfBrown01,
  BROWN02: themeVars.color.gfBrown02,
} as const;

export const fbColorMap = {
  RED01: themeVars.color.fbRed01,
  RED02: themeVars.color.fbRed02,
  PURPLE01: themeVars.color.fbPurple01,
  PURPLE02: themeVars.color.fbPurple02,
  GREEN01: themeVars.color.fbGreen01,
  GREEN02: themeVars.color.fbGreen02,
  BLUE01: themeVars.color.fbBlue01,
  BLUE02: themeVars.color.fbBlue02,
  BROWN01: themeVars.color.fbBrown01,
  BROWN02: themeVars.color.fbBrown02,
} as const;

export type TbColorKey = keyof typeof tbColorMap;
export type GfColorKey = keyof typeof gfColorMap;
export type FbColorKey = keyof typeof fbColorMap;
