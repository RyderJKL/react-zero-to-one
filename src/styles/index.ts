import { createCss } from '@stitches/react';

export const { theme, css } = createCss({
  theme: {
    colors: {
      primary: 'red'
    },
    space: {
      small: '2px',
      lager: '4px'
    }
  },
  prefix: 'lynx-ui'
});
