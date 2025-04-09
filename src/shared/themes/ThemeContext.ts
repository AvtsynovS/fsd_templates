import { createContext } from 'react';

import { SupportedTheme } from '../lib';

import { onChangeTheme } from './helpers/helpers';

type ThemeContextType = {
  currentTheme: SupportedTheme;
  onChangeTheme: (currentTheme: SupportedTheme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: SupportedTheme.LIGHT,
  onChangeTheme: (currentTheme: SupportedTheme) => onChangeTheme(currentTheme),
});
