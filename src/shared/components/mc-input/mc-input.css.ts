import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',
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
  color: themeVars.color.gray700,
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

export const input = style({
  width: '100%',
  padding: '1.75rem 2rem',
  borderRadius: '1rem',
  boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.04)',
  backgroundColor: themeVars.color.gray100,
  border: 'none',
  outline: 'none',
  color: themeVars.color.gray700,
  ...themeVars.fontStyles.body_14_medium,

  selectors: {
    '&::placeholder': {
      color: themeVars.color.gray600,
    },
  },
});
