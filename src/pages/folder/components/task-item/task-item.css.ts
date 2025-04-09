import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const wrapper = recipe({
  base: {
    ...themeVars.display.flexAlignCenter,
    justifyContent: 'space-between',
    padding: '1.5rem 2rem',
    backgroundColor: 'transparent',
    borderTop: '2px solid transparent',
  },
  variants: {
    isDone: {
      true: {},
    },
    isFirst: {
      true: {
        borderTop: 'none',
      },
    },
  },
});

export const levelBadge = recipe({
  base: {
    ...themeVars.display.flexAlignCenter,
    justifyContent: 'center',
    width: '2.4rem',
    height: '2.4rem',
    borderRadius: '0.3rem',
    ...themeVars.fontStyles.body_14_medium,
    color: themeVars.color.gray100,
    flexShrink: 0,
  },
  variants: {
    level: {
      HIGH: { backgroundColor: themeVars.color.gray700 },
      MIDDLE: { backgroundColor: themeVars.color.gray600 },
      LOW: { backgroundColor: themeVars.color.gray400 },
    },
    isDone: {
      true: {
        backgroundColor: themeVars.color.gray500,
      },
    },
  },
});

export const texts = style({
  ...themeVars.display.flexColumn,
  gap: '0.9rem',
  flex: 1,
  marginLeft: '4rem',
});

export const taskName = recipe({
  base: {
    ...themeVars.fontStyles.title_16_medium,
    color: themeVars.color.gray700,
  },
  variants: {
    isDone: {
      true: {
        color: themeVars.color.gray500,
      },
    },
  },
});

export const date = recipe({
  base: {
    ...themeVars.fontStyles.body_12_medium,
    color: themeVars.color.gray500,
  },
  variants: {
    isDone: {
      true: {
        color: themeVars.color.gray500,
      },
    },
  },
});

export const time = recipe({
  base: {
    ...themeVars.fontStyles.body_12_medium,
    color: themeVars.color.gray700,
    flexShrink: 0,
    width: '5.2rem',
    height: '2rem',
    borderRadius: '0.3rem',
    border: `1px solid ${themeVars.color.gray700}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    isDone: {
      true: {
        color: themeVars.color.gray500,
        border: `1px solid ${themeVars.color.gray500}`,
      },
    },
  },
});
