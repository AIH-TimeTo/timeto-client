import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const wrapper = style({
  ...themeVars.display.flexAlignJustifyCenter,
  flexDirection: 'column',
  height: ' calc(var(--vh) * 100)',
  padding: '0 2rem',
  backgroundColor: themeVars.color.gray100,
});

export const loginButtonWrapper = style({
  ...themeVars.display.flexJustifyCenter,
  position: 'absolute',
  bottom: '6.6rem',
  left: 0,
  right: 0,
});
