import { DefaultTheme } from 'styled-components';

import { borders, spaces } from './config';

export const darkTheme: DefaultTheme = {
  colors: {
    primary: 'rgb(255, 255, 255)',
    secondary: 'rgb(255, 255, 255)',
    ghost: 'rgb(113, 113, 113)',
    link: 'rgb(27, 107, 236)',
    default: 'rgb(215, 215, 215)',
    success: 'rgb(19, 168, 46)',
    warning: 'rgb(238, 119, 15)',
    error: 'rgb(219, 21, 21)',
    disabled: 'rgb(148, 148, 149)',
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
  },
  bg: {
    primary: 'rgb(3, 39, 72)',
    secondary: 'rgb(0, 0, 0)',
    default: 'rgb(50, 50, 50)',
    success: 'rgb(234, 248, 234)',
    warning: 'rgb(255, 248, 224)',
    error: 'rgb(250, 231, 232)',
    disabled: 'rgb(233, 230, 230)',
  },
  controls: {
    button: {
      bg: {
        primary: 'rgb(12, 65, 119)',
        secondary: 'rgb(155, 155, 155)',
        default: 'rgb(40, 40, 40)',
        success: 'rgb(234, 248, 234)',
        warning: 'rgb(255, 248, 224)',
        error: 'rgb(250, 231, 232)',
        disabled: 'rgb(75, 75, 75)',
      },
      color: {
        primary: 'rgb(255, 255, 255)',
        secondary: 'rgb(255, 255, 255)',
        ghost: 'rgb(113, 113, 113)',
        link: 'rgb(27, 107, 236)',
        success: 'rgb(9, 104, 27)',
        warning: 'rgb(164, 110, 10)',
        error: 'rgb(168, 8, 8)',
        default: 'rgb(215, 215, 215)',
        disabled: 'rgb(148, 148, 149)',
      },
      border: {
        default: '1px solid rgb(72, 72, 72)',
        primary: '1px solid rgb(1, 28, 53)',
        secondary: '1px solid rgb(100, 100, 100)',
        success: '1px solid rgb(19, 80, 19)',
        warning: '1px solid rgb(92, 64, 13)',
        error: '1px solid rgb(76, 14, 16)',
        disabled: '1px solid rgba(192, 192, 192, 0.72)',
      },
    },
    switcher: {
      bg: {
        default: `rgb(254,187,46)`,
        disabled: 'rgb(233, 230, 230)',
      },
      color: {
        default: 'rgb(153,153,153)',
      },
      border: {
        default: '1px solid rgb(240, 169, 15)',
      },
    },
    input: {
      bg: {
        default: 'rgb(75, 75, 75)',
        hover: 'rgb(70, 70, 70)',
        focus: 'rgb(100, 100, 100)',
        disabled: 'rgb(240, 240, 240)',
      },
      color: {
        default: 'rgba(225, 225, 225, 0.7)',
        disabled: 'rgb(148, 148, 149)',
      },
      border: {
        default: '1px solid rgb(137, 137, 137)',
        hover: `1px solid rgb(85, 85, 85)`,
        focus: `1px solid rgb(44, 44, 44)`,
        disabled: '1px solid rgb(148, 148, 149)',
      },
    },
    checkbox: {
      bg: {
        default: 'rgb(251, 177, 21)',
      },
    },
    select: {
      bg: {
        default: 'rgb(75, 75, 75)',
        primary: 'rgb(12, 65, 119)',
        hover: 'rgb(70, 70, 70)',
        focus: 'rgb(100, 100, 100)',
        disabled: 'rgb(240, 240, 240)',
      },
      color: {
        default: 'rgba(225, 225, 225, 0.7)',
        secondary: 'rgb(153, 153, 153)',
        disabled: 'rgb(148, 148, 149)',
      },
      border: {
        default: '1px solid rgb(137, 137, 137)',
        primary: '1px solid rgb(1, 28, 53)',
        secondary: '1px solid rgba(61, 61, 61, 0.8)',
        hover: `1px solid rgb(85, 85, 85)`,
        focus: `1px solid rgb(44, 44, 44)`,
        disabled: '1px solid rgb(148, 148, 149)',
      },
    },
  },
  spaces: spaces,
  borders: borders,
};
