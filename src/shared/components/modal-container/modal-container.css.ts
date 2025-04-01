import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const backdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.25)',
  justifyContent: 'center',
  ...themeVars.display.flexAlignCenter,
  zIndex: 1000,
});

export const container = style({
  width: 'calc(100% - 40px)',
  maxWidth: '36rem',
  height: '36rem',
  backgroundColor: themeVars.color.gray200,
  borderRadius: '1rem',
  padding: '2.8rem 2rem 3.2rem 2rem',
});
