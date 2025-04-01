import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const folderItemBase = style({
  height: '7.6rem',
  padding: '1.5rem 2rem',
  userSelect: 'none',
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
  ...themeVars.display.flexAlignCenter,
  gap: '1rem',
});

export const hamburger = style({
  cursor: 'grab',
  marginRight: '4rem',
});

export const textGroup = style({
  ...themeVars.display.flexColumn,
  gap: '0.9rem',
});

export const folderName = style({
  ...themeVars.fontStyles.title_16_medium,
});

export const taskCount = style({
  ...themeVars.fontStyles.body_12_medium,
  color: themeVars.color.gray600,
});
