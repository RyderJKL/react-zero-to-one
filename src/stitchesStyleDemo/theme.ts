import { createCss, TTheme, EmptyTheme, TMedias } from '@stitches/react';

export const { styled, css, theme } = createCss({
  theme: {
    colors: {
      primary: 'red'
    },
    space: {
      small: '2px',
      lager: '4px'
    }
  }
});

export type Styled = typeof styled;
