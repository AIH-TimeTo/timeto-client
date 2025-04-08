import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const goalGroupWrapper = style({
  ...themeVars.display.flexColumn,
  gap: '2.7rem',
  marginBottom: '4.9rem',
  padding: '0 2rem',
  marginTop: '3.2rem',
});

export const goalGroupHeader = style({
  ...themeVars.display.flexAlignCenter,
  justifyContent: 'space-between',
});

export const pinWithTitle = style({
  ...themeVars.display.flexAlignCenter,
  gap: '0.9rem',
});

export const title = style({
  ...themeVars.fontStyles.title_16_semibold,
});

export const kebabIcon = style({
  cursor: 'pointer',
});

export const folderList = style({
  ...themeVars.display.flexColumn,
  boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.04)',
  backgroundColor: themeVars.color.gray200,
  borderRadius: '1rem',
});

export const folderListDragging = style({
  ...themeVars.display.flexColumn,
  backgroundColor: themeVars.color.gray200,
  borderRadius: '1rem',
});
