import { style } from '@vanilla-extract/css';

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

export const confirmButton = style({
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'none',
  border: 'none',
  padding: 0,
  color: themeVars.color.blueSave,
  ...themeVars.fontStyles.body_14_medium,
  cursor: 'pointer',
});

export const pickerContainer = style({
  ...themeVars.display.flexAlignJustifyCenter,
  position: 'relative',
  marginTop: '7rem',
  height: '12rem',
});

export const pickerWrapper = style({
  ...themeVars.display.flexJustifyCenter,
  gap: '2rem',
  zIndex: 1,
});

export const highlight = style({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20rem',
  height: '4rem',
  borderTop: `1px solid ${themeVars.color.gray400}`,
  borderBottom: `1px solid ${themeVars.color.gray400}`,
  pointerEvents: 'none',
  zIndex: 0,
});
