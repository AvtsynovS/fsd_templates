import { DefaultTheme } from 'styled-components';

import { spaces } from './config';

export const darkTheme: DefaultTheme = {
  colors: {
    primary: 'rgb(255, 255, 255)',
    secondary: 'rgb(255, 255, 255)',
    ghost: 'rgb(113, 113, 113)',
    link: 'rgb(27, 107, 236)',
    default: 'rgb(215, 215, 215)',
    success: 'rgb(9, 104, 27)',
    warning: 'rgb(164, 110, 10)',
    danger: 'rgb(168, 8, 8)',
    disabled: 'rgb(148, 148, 149)',
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
  },
  bgColors: {
    primary: 'rgb(3, 39, 72)',
    secondary: 'rgb(0, 0, 0)',
    default: 'rgb(50, 50, 50)',
    success: 'rgb(234, 248, 234)',
    warning: 'rgb(255, 248, 224)',
    danger: 'rgb(250, 231, 232)',
    disabled: 'rgb(233, 230, 230)',
  },
  borderColor: {
    primary: 'rgb(1, 28, 53)',
    secondary: 'rgb(100, 100, 100)',
    default: 'rgb(72, 72, 72)',
    success: 'rgb(19, 80, 19)',
    warning: 'rgb(92, 64, 13)',
    danger: 'rgb(76, 14, 16)',
    disabled: 'rgba(192, 192, 192, 0.72)',
  },
  bgButton: {
    primary: 'rgb(12, 65, 119)',
    secondary: 'rgb(155, 155, 155)',
    default: 'rgb(40, 40, 40)',
    success: 'rgb(234, 248, 234)',
    warning: 'rgb(255, 248, 224)',
    danger: 'rgb(250, 231, 232)',
    disabled: 'rgb(75, 75, 75)',
  },
  spaces: spaces,
};
