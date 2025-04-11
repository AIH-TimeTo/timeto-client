import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const wrapper = style({
  width: '30rem',
  borderRadius: '1rem',
  backgroundColor: themeVars.color.gray100,
  paddingTop: '3.2rem',
  paddingBottom: '1.3rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '0.4rem',
});

export const title = style({
  ...themeVars.fontStyles.body_14_medium,
  color: themeVars.color.gray700,
});

export const description = style({
  ...themeVars.fontStyles.body_12_medium,
  color: themeVars.color.gray600,
});

export const buttonGroup = style({
  display: 'flex',
  gap: '10rem',
  marginTop: '2.4rem',
});

export const cancelButton = style({
  ...themeVars.fontStyles.body_12_medium,
  color: themeVars.color.gray700,
});

export const confirmButton = recipe({
  base: {
    ...themeVars.fontStyles.body_12_medium,
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    color: themeVars.color.redDelete,
  },
  variants: {
    color: {
      blue: {
        color: themeVars.color.blueSave,
      },
    },
  },
});

export const backdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: ' calc(var(--vh) * 100)',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
});
