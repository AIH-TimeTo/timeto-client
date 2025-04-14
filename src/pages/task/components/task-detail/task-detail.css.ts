import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const detailWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0 2rem',
  marginTop: '4rem',
  gap: '2.4rem',
  paddingBottom: '13rem',
});

export const fieldGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.7rem',
});

export const fieldLabel = style({
  ...themeVars.fontStyles.body_14_semibold,
  color: themeVars.color.gray600,
});

// 편집 input
export const inputField = style({
  width: '100%',
  padding: '1.5rem 2rem',
  borderRadius: '1rem',
  backgroundColor: themeVars.color.gray100,
  border: `1px solid ${themeVars.color.gray300}`,
  ...themeVars.fontStyles.body_14_medium,
  color: themeVars.color.gray700,
  marginTop: '0.4rem',
  marginBottom: '2.1rem',
  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
});

// 조회 input
export const textField = style({
  ...themeVars.fontStyles.title_16_medium,
  color: themeVars.color.gray700,
  padding: '1.2rem 2rem',
  backgroundColor: themeVars.color.gray100,
  borderRadius: '1rem',
  marginBottom: '2.3rem',
  boxShadow: '0px 0px 12px 0px rgba(0, 0, 0, 0.04)',
});

export const timeGroup = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '2.1rem',
});

export const timeInput = style({
  width: '6rem',
  padding: '1.2rem 0',
  borderRadius: '1rem',
  border: `1px solid ${themeVars.color.gray300}`,
  textAlign: 'center',
  backgroundColor: themeVars.color.gray100,
  ...themeVars.fontStyles.body_14_medium,
  cursor: 'pointer',
  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
});

export const timeUnit = style({
  ...themeVars.fontStyles.title_16_semibold,
  color: themeVars.color.gray700,
  marginRight: '2.8rem',
  marginLeft: '0.8rem',
});

export const levelGroup = style({
  display: 'flex',
  gap: '2rem',
  marginBottom: '2.1rem',
});

export const levelButton = style({
  border: `1px solid ${themeVars.color.gray300}`,
  borderRadius: '5rem',
  padding: '1.2rem 2.4rem',
  backgroundColor: themeVars.color.gray100,
  color: themeVars.color.gray600,
  cursor: 'pointer',
  ...themeVars.fontStyles.body_14_medium,
});

export const levelButtonActive = style({
  border: `1px solid ${themeVars.color.gray700}`,
  backgroundColor: themeVars.color.gray700,
  color: themeVars.color.gray100,
});

export const memoInput = style({
  width: '100%',
  minHeight: '17rem',
  padding: '1.2rem 2rem',
  borderRadius: '1rem',
  border: `1px solid ${themeVars.color.gray300}`,
  backgroundColor: themeVars.color.gray100,
  resize: 'none',
  ...themeVars.fontStyles.body_14_medium,
  selectors: {
    '&:focus': {
      outline: 'none',
    },
  },
});

export const memoText = style({
  ...themeVars.fontStyles.body_14_medium,
  color: themeVars.color.gray700,
  lineHeight: '1.6',
  whiteSpace: 'pre-line',
  padding: '1.6rem',
  backgroundColor: themeVars.color.gray100,
  borderRadius: '1rem',
});

export const memoPlaceholder = style({
  ...themeVars.fontStyles.body_14_medium,
  color: themeVars.color.gray400,
  lineHeight: '1.6',
  whiteSpace: 'pre-line',
  padding: '1.6rem',
  backgroundColor: themeVars.color.gray100,
  borderRadius: '1rem',
});

export const submitButton = style({
  width: '100%',
  height: '6rem',
  borderRadius: '1rem',
  border: 'none',
  backgroundColor: themeVars.color.gray700,
  color: themeVars.color.gray100,
  cursor: 'pointer',
  ...themeVars.fontStyles.title_16_semibold,
  selectors: {
    '&:disabled': {
      backgroundColor: themeVars.color.gray500,
      cursor: 'not-allowed',
    },
  },
});

export const fixedFooter = style({
  position: 'fixed',
  bottom: '1rem',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '43rem',
  padding: '0 2rem',
  zIndex: 10,
});
