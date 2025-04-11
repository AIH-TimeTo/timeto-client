import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const pageWrapper = style({
  backgroundColor: themeVars.color.gray100,
  minHeight: ' calc(var(--vh) * 100)',
});

export const folderTitle = style({
  ...themeVars.fontStyles.head_20_semibold,
  color: themeVars.color.gray700,
});

export const HeaderButton = style({
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

export const emptySection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '40vh',
});

export const emptyText = style({
  ...themeVars.fontStyles.body_14_medium,
  color: themeVars.color.gray600,
});
