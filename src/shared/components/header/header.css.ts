import { style } from '@vanilla-extract/css';
import { themeVars } from '@shared/styles';

export const headerWrapper = style({
  ...themeVars.display.flexAlignCenter,
  justifyContent: 'space-between',
  height: '10rem',
  paddingTop: '6rem',
  paddingBottom: '1.6rem',
  paddingLeft: '2rem',
  paddingRight: '2rem',
});

export const left = style({
  ...themeVars.display.flexAlignCenter,
  justifyContent: 'flex-start',
  flex: 1,
});

export const center = style({
  ...themeVars.display.flexAlignCenter,
  justifyContent: 'center',
  textAlign: 'center',
  flex: 2,
});

export const right = style({
  ...themeVars.display.flexAlignCenter,
  justifyContent: 'flex-end',
  gap: '1.2rem',
  flex: 1,
});
