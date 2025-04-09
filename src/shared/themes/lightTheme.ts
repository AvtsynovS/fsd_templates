import { DefaultTheme } from 'styled-components';

import { space } from './config';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: 'rgb(30, 30, 30)',
    secondary: 'rgb(72, 72, 72)',
    ghost: 'rgb(113, 113, 113)',
    link: 'rgb(27, 107, 236)',
    default: 'rgb(40, 40, 42)',
    success: 'rgb(9, 104, 27)',
    warning: 'rgb(164, 110, 10)',
    danger: 'rgb(168, 8, 8)',
    disabled: 'rgb(148, 148, 149)',
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
  },
  bgColors: {
    primary: 'rgb(40, 127, 215)',
    secondary: 'rgb(255, 255, 255)',
    default: 'rgb(246, 247, 248)',
    success: 'rgb(234, 248, 234)',
    warning: 'rgb(255, 248, 224)',
    danger: 'rgb(250, 231, 232)',
    disabled: 'rgb(233, 230, 230)',
  },
  borderColor: {
    primary: 'rgb(22, 72, 123)',
    secondary: 'rgb(100, 100, 100)',
    default: 'rgb(200, 200, 200)',
    success: 'rgb(19, 80, 19)',
    warning: 'rgb(92, 64, 13)',
    danger: 'rgb(76, 14, 16)',
    disabled: 'rgba(192, 192, 192, 0.72)',
  },
  bgButton: {
    primary: 'rgb(28, 99, 170)',
    secondary: 'rgb(255, 255, 255)',
    default: 'rgb(246, 247, 248)',
    success: 'rgb(234, 248, 234)',
    warning: 'rgb(255, 248, 224)',
    danger: 'rgb(250, 231, 232)',
    disabled: 'rgb(233, 230, 230)',
  },
  space: space,
};
