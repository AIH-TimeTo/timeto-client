import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const pageWrapper = style({
  minHeight: ' calc(var(--vh) * 100)',
});

export const editBackground = style({
  backgroundColor: themeVars.color.gray100,
});

export const HeaderButton = style({
  cursor: 'pointer',
});

export const folderTitle = style({
  ...themeVars.fontStyles.head_20_semibold,
  color: themeVars.color.gray700,
  maxWidth: '25rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const goalName = style({
  ...themeVars.fontStyles.body_14_medium,
  textAlign: 'center',
  marginTop: '-0.9rem',
});
