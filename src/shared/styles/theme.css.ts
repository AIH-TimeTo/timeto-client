import { createTheme } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import { color } from './tokens/color';
import { display } from './tokens/display';
import { fontStyles } from './tokens/font-styles';
import { typography } from './tokens/typography';

const tokens = {
  color: color,
  fontStyles: fontStyles,
  ...typography,
  display: display,
};

const properties = defineProperties({
  properties: tokens,
});
const sprinkles = createSprinkles(properties);

const [themeClass, themeVars] = createTheme(tokens);

export { sprinkles, themeClass, themeVars, tokens };
