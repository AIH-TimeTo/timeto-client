import { globalStyle, style } from '@vanilla-extract/css';

import { themeVars } from './theme.css';

/* CSS Variables */
globalStyle(':root', {
  vars: {
    '--min-width': '375px',
    '--max-width': '430px',
    '--height': 'calc(var(--vh, 1vh) * 100)',
  },
});

/* HTML & Body Styles */
globalStyle('html, body', {
  position: 'relative',
  width: '100%',
  margin: '0',
  padding: '0',
  fontFamily: '"Pretendard", sans-serif',
  fontSize: '62.5%',
  scrollbarWidth: 'none',
  scrollBehavior: 'smooth',
  overflow: 'auto',
  WebkitOverflowScrolling: 'touch',
  touchAction: 'auto',
});

/* Scrollbar Hide */
globalStyle('::-webkit-scrollbar', {
  display: 'none',
});

globalStyle('*', {
  pointerEvents: 'auto',
});

export const rootStyle = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0 auto',
  minHeight: 'var(--height)',
  minWidth: 'var(--min-width)',
  maxWidth: 'var(--max-width)',
  backgroundColor: themeVars.color.gray200,
  boxShadow: '0px 0px 30px 0px rgba(0,0,0,0.25)',
});
