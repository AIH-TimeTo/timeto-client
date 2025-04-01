import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const folderItemBase = style({
  height: '7.6rem',
  padding: '1.5rem 2rem',
  WebkitUserSelect: 'none',
});

export const only = style({
  borderRadius: '1rem',
});

export const first = style({
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
});

export const last = style({
  borderBottomLeftRadius: '1rem',
  borderBottomRightRadius: '1rem',
});

export const divider = style({
  borderTop: `1px solid ${themeVars.color.gray300}`,
});

export const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const hamburger = style({
  cursor: 'grab',
  marginRight: '4rem',
});

export const textGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.9rem',
});

export const folderName = style({
  ...themeVars.fontStyles.title_16_medium,
});

export const taskCount = style({
  ...themeVars.fontStyles.body_12_medium,
  color: themeVars.color.gray600,
});

export const colorMap = {
  RED01: style({ backgroundColor: themeVars.color.tbRed01 }),
  RED02: style({ backgroundColor: themeVars.color.tbRed02 }),
  PURPLE01: style({ backgroundColor: themeVars.color.tbPurple01 }),
  PURPLE02: style({ backgroundColor: themeVars.color.tbPurple02 }),
  GREEN01: style({ backgroundColor: themeVars.color.tbGreen01 }),
  GREEN02: style({ backgroundColor: themeVars.color.tbGreen02 }),
  BLUE01: style({ backgroundColor: themeVars.color.tbBlue01 }),
  BLUE02: style({ backgroundColor: themeVars.color.tbBlue02 }),
  BROWN01: style({ backgroundColor: themeVars.color.tbBrown01 }),
  BROWN02: style({ backgroundColor: themeVars.color.tbBrown02 }),
} as const;
