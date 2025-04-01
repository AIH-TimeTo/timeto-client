import { style } from '@vanilla-extract/css';
import { themeVars } from '@shared/styles';

export const goalGroupWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.7rem',
  marginBottom: '4.9rem',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  marginTop: '3.2rem',
});

export const goalGroupHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const pinWithTitle = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.9rem',
});

export const title = style({
  ...themeVars.fontStyles.title_16_semibold,
});

export const kebabIcon = style({
  cursor: 'pointer',
});

export const folderList = style({
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.04)',
  backgroundColor: themeVars.color.gray200,
  borderRadius: '1rem',
});

export const folderListDragging = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: themeVars.color.gray200,
  borderRadius: '1rem',
  // boxShadow 제거됨!
});


export const fontColorMap = {
  RED01: style({ color: themeVars.color.gfRed01 }),
  RED02: style({ color: themeVars.color.gfRed02 }),
  PURPLE01: style({ color: themeVars.color.gfPurple01 }),
  PURPLE02: style({ color: themeVars.color.gfPurple02 }),
  BLUE01: style({ color: themeVars.color.gfBlue01 }),
  BLUE02: style({ color: themeVars.color.gfBlue02 }),
  GREEN01: style({ color: themeVars.color.gfGreen01 }),
  GREEN02: style({ color: themeVars.color.gfGreen02 }),
  BROWN01: style({ color: themeVars.color.gfBrown01 }),
  BROWN02: style({ color: themeVars.color.gfBrown02 }),
} as const;
