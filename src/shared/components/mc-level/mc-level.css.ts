import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const header = style({
  ...themeVars.display.flexAlignJustifyCenter,
  position: 'relative',
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

export const levelContainer = style({
  ...themeVars.display.flexJustifyCenter,
  gap: '4rem',
  marginTop: '10.6rem',
});

export const levelButton = {
  default: style({
    padding: '1.2rem 2.4rem',
    borderRadius: '5rem',
    border: `1px solid ${themeVars.color.gray400}`,
    background: 'white',
    color: themeVars.color.gray600,
    ...themeVars.fontStyles.body_14_medium,
    cursor: 'pointer',
  }),
  selected: style({
    padding: '1.2rem 2.4rem',
    borderRadius: '5rem',
    background: themeVars.color.gray700,
    color: themeVars.color.gray100,
    border: `1px solid ${themeVars.color.gray700}`,
    ...themeVars.fontStyles.body_14_medium,
    cursor: 'pointer',
  }),
};
