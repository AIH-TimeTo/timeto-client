import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.4rem',
});

export const header = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '2.4rem',
});

export const backButton = style({
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const title = style({
  ...themeVars.fontStyles.title_16_semibold,
});

export const confirmButton = recipe({
  base: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    padding: 0,
    ...themeVars.fontStyles.body_14_medium,
    cursor: 'pointer',
    transition: 'color 0.2s ease',
  },
  variants: {
    active: {
      true: {
        color: themeVars.color.blueSave,
      },
      false: {
        color: themeVars.color.gray600,
        cursor: 'default',
      },
    },
  },
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '2.8rem',
  justifyContent: 'center',
  backgroundColor: themeVars.color.gray100,
  padding: '1.6rem 2.8rem',
  borderRadius: '1rem',
  boxShadow: '0px 0px 12px 0px rgba(1, 1, 1, 0.04)',
});

export const colorCircle = style({
  width: '2.8rem',
  height: '2.8rem',
  borderRadius: '50%',
  aspectRatio: '1 / 1',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
});
