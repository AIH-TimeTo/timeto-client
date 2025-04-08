import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const pageWrapper = style({
  backgroundColor: themeVars.color.gray100,
});

export const folderTitle = style({
  ...themeVars.fontStyles.head_20_semibold,
  color: themeVars.color.gray700,
});

export const backButton = style({
  cursor: 'pointer',
});

export const goalName = style({
  ...themeVars.fontStyles.body_14_medium,
  textAlign: 'center',
  marginTop: '-0.9rem',
});

export const taskSection = style({
  marginTop: '3.8rem',
  padding: '0 2rem',
});
