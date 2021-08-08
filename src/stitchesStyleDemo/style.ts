import { css } from '@stitches/react';
import { theme } from '../styles';

// export type GetType<T> = T extends (args: infer P) => void ? P : never;
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// export type CSSProperties = GetType<typeof css>;
//
// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// export const makeCss = (style: CSSProperties) => {
//   return css(style) + ' lynx-ui';
// };

export default function styles({
  fontSize,
  backgroundColor = 'red'
}: {
  fontSize: number;
  backgroundColor: string;
}) {
  return {
    root: css({
      color: 'white',
      backgroundColor: backgroundColor,
      fontSize: fontSize + 'px',
      variants: {
        variant: {
          primary: {
            color: 'yellow'
          },
          secondary: {
            color: 'gray'
          }
        }
      }
    }),
    img: css({
      width: theme.space.small,
      height: theme.space.lager,
      backgroundColor: theme.colors.primary
    })
  };
}

export function makeStyles<T extends Record<string | number | symbol, any>>(styles: T) {
  const newStyles: Record<string, string> = {};

  Object.keys(styles).forEach((key) => {
    newStyles[key] = css(styles[key]).className;
  });

  return newStyles;
}
