import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const groupHeader = style({
  ...themeVars.display.flexAlignCenter,
  gap: '0.8rem',
  marginBottom: '2.5rem',
});

export const title = style({
  ...themeVars.fontStyles.body_14_semibold,
  color: themeVars.color.gray600,
});

export const addButton = style({
  marginLeft: 'auto',
  lineHeight: 1,
  cursor: 'pointer',
});

export const list = style({
  ...themeVars.display.flexColumn,
  borderRadius: '1.2rem',
  overflow: 'hidden',
  boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.04)',
  marginBottom: '4.9rem',
});
