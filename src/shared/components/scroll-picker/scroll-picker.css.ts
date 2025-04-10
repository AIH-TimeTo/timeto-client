import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const scrollContainer = style({
  position: 'relative',
  height: '12rem',
  overflow: 'hidden',
  touchAction: 'pan-y',
  width: '6rem',
});

export const list = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  height: '100%',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch',
  scrollSnapType: 'y mandatory',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const item = style({
  height: '4rem',
  lineHeight: '4rem',
  textAlign: 'center',
  scrollSnapAlign: 'center',
  fontSize: themeVars.fontSize.titleSm,
  fontWeight: themeVars.fontWeight.medium,
  color: themeVars.color.gray600,
  transition: 'font-size 0.1s, color 0.1s',
});

export const selected = style({
  color: themeVars.color.gray700,
  fontSize: themeVars.fontSize.titleSm,
  fontWeight: themeVars.fontWeight.semiBold,
});
