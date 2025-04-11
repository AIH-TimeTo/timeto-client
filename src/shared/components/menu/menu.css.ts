import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100dvh',
  backgroundColor: themeVars.color.gray100,
  zIndex: 1000,
  padding: '13.3rem 2rem 8.1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  overflowY: 'hidden',
});

export const closeButton = style({
  position: 'absolute',
  top: '6rem',
  right: '2rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

export const userInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const nickname = style({
  ...themeVars.fontStyles.head_20_semibold,
  color: themeVars.color.gray700,
});

export const email = style({
  ...themeVars.fontStyles.body_14_medium,
  color: themeVars.color.gray500,
});

export const menuList = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem',
});

export const menuButton = style({
  ...themeVars.fontStyles.title_16_medium,
  background: 'none',
  border: 'none',
  textAlign: 'left',
  padding: '2rem 0',
  cursor: 'pointer',
  color: themeVars.color.gray700,
  selectors: {
    '&:not(:last-child)': {
      borderBottom: `1px solid ${themeVars.color.gray300}`,
    },
  },
});

export const bottomMenu = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const bottomButton = style({
  ...themeVars.fontStyles.body_14_medium,
  background: 'none',
  border: 'none',
  textAlign: 'left',
  padding: 0,
  cursor: 'pointer',
  color: themeVars.color.gray700,
});

export const danger = style({
  color: themeVars.color.redDelete,
});
