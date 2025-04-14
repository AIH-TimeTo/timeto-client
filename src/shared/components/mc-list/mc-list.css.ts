import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const wrapper = style({
  ...themeVars.display.flexColumn,
  flex: 1,
  overflow: 'hidden',
  gap: '3.6rem',
});

export const header = style({
  ...themeVars.display.flexColumn,
  gap: '0.5rem',
});

export const titleRow = style({
  ...themeVars.display.flexAlignCenter,
  position: 'relative',
  justifyContent: 'center',
  height: '2.4rem',
});

export const backButton = style({
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  background: 'none',
  padding: 0,
});

export const title = style({
  ...themeVars.fontStyles.title_16_semibold,
});

export const subTitle = style({
  ...themeVars.fontStyles.body_12_medium,
  color: themeVars.color.gfRed01,
  textAlign: 'center',
});

export const list = style({
  ...themeVars.display.flexColumn,
  borderRadius: '1rem',
  boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.04)',
  overflowY: 'auto',
  flex: 1,
});

export const itemBase = {
  ...themeVars.display.flexAlignCenter,
  padding: '1.2rem 2rem',
  backgroundColor: themeVars.color.gray100,
  cursor: 'pointer',
};

export const item = style({
  ...itemBase,
  borderBottom: `1px solid ${themeVars.color.gray300}`,
});

export const itemTop = style({
  ...itemBase,
  borderBottom: `1px solid ${themeVars.color.gray300}`,
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
});

export const itemBottom = style({
  ...itemBase,
  borderBottomLeftRadius: '1rem',
  borderBottomRightRadius: '1rem',
});

export const leftIcon = style({
  marginRight: '1.2rem',
});

export const rightIcon = style({
  marginLeft: 'auto',
});

export const label = style({
  ...themeVars.display.flexAlignCenter,
  ...themeVars.fontStyles.body_14_medium,
  color: themeVars.color.gray700,
  height: '2.8rem',
  justifyContent: 'center',
});

export const rightArrow = style({
  color: themeVars.color.gray600,
  transform: 'rotate(180deg)',
});

export const itemSingle = style({
  ...itemBase,
  borderRadius: '1rem',
});
