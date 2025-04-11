import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const goalPageTitle = style({
  ...themeVars.fontStyles.head_20_semibold,
});

export const iconButtonPadding = style({
  padding: '0.6rem 0.4rem',
  cursor: 'pointer',
});
