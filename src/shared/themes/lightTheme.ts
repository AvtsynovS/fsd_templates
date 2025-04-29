import { DefaultTheme } from 'styled-components';

import { borders, spaces } from './config';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: 'rgb(30, 30, 30)',
    secondary: 'rgb(72, 72, 72)',
    ghost: 'rgb(113, 113, 113)',
    link: 'rgb(27, 107, 236)',
    default: 'rgb(40, 40, 42)',
    success: 'rgb(19, 189, 50)',
    warning: 'rgb(238, 119, 15)',
    error: 'rgb(219, 21, 21)',
    disabled: 'rgb(148, 148, 149)',
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
  },
  bg: {
    primary: 'rgb(40, 127, 215)',
    secondary: 'rgb(255, 255, 255)',
    default: 'rgb(246, 247, 248)',
    success: 'rgb(234, 248, 234)',
    warning: 'rgb(255, 248, 224)',
    error: 'rgb(250, 231, 232)',
    disabled: 'rgb(233, 230, 230)',
  },
  controls: {
    button: {
      bg: {
        primary: 'rgb(28, 99, 170)',
        secondary: 'rgb(255, 255, 255)',
        default: 'rgb(246, 247, 248)',
        success: 'rgb(234, 248, 234)',
        warning: 'rgb(255, 248, 224)',
        error: 'rgb(250, 231, 232)',
        disabled: 'rgb(233, 230, 230)',
      },
      color: {
        primary: 'rgb(255, 255, 255)',
        secondary: 'rgb(72, 72, 72)',
        ghost: 'rgb(113, 113, 113)',
        link: 'rgb(27, 107, 236)',
        success: 'rgb(9, 104, 27)',
        warning: 'rgb(164, 110, 10)',
        error: 'rgb(168, 8, 8)',
        default: 'rgb(40, 40, 42)',
        disabled: 'rgb(148, 148, 149)',
      },
      border: {
        default: '1px solid rgb(200, 200, 200)',
        primary: '1px solid rgb(22, 72, 123)',
        secondary: '1px solid rgb(100, 100, 100)',
        success: '1px solid rgb(19, 80, 19)',
        warning: '1px solid rgb(92, 64, 13)',
        error: '1px solid rgb(76, 14, 16)',
        disabled: '1px solid rgb(148, 148, 149)',
      },
    },
    switcher: {
      bg: {
        default: 'rgb(222, 148, 10)',
        disabled: 'rgb(233, 230, 230)',
      },
      color: {
        default: 'rgb(153,153,153)',
      },
      border: {
        default: '1px solid rgb(167, 112, 10)',
      },
    },
    input: {
      bg: {
        default: 'rgb(255, 255, 255)',
        hover: 'rgb(252, 252, 252)',
        focus: 'rgb(255, 255, 255)',
        disabled: 'rgb(240, 240, 240)',
      },
      color: {
        default: 'rgb(55, 55, 55)',
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
        default: 'rgb(41, 120, 215)',
      },
    },
    select: {
      bg: {
        default: 'rgb(255, 255, 255)',
        primary: 'rgb(28, 99, 170)',
        hover: 'rgb(252, 252, 252)',
        focus: 'rgb(255, 255, 255)',
        disabled: 'rgb(240, 240, 240)',
      },
      color: {
        default: 'rgb(55, 55, 55)',
        secondary: 'rgb(153, 153, 153)',
        disabled: 'rgb(148, 148, 149)',
      },
      border: {
        default: '1px solid rgb(137, 137, 137)',
        primary: '1px solid rgb(22, 72, 123)',
        secondary: '1px solid rgba(221, 221, 221, 0.6)',
        hover: `1px solid rgb(85, 85, 85)`,
        focus: `1px solid rgb(44, 44, 44)`,
        disabled: '1px solid rgb(148, 148, 149)',
      },
    },
  },
  spaces: spaces,
  borders: borders,
};
