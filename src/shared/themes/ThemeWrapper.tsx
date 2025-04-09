import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { ThemeProvider } from 'styled-components';

import { SupportedTheme } from '../lib';

import { onChangeTheme, getCurrentTheme } from './helpers';
import { getTheme } from './helpers/helpers';
import { ThemeContext } from './ThemeContext';

export const ThemeWrapper = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<SupportedTheme>(() => getCurrentTheme());

  const currentTheme = useMemo(() => getTheme(theme), [theme]);

  const handleChangeTheme = useCallback((newTheme: SupportedTheme) => {
    setTheme(newTheme);
    onChangeTheme(newTheme);
  }, []);

  const themeContextValue = useMemo(
    () => ({ currentTheme: theme, onChangeTheme: handleChangeTheme }),
    [theme, handleChangeTheme],
  );

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={themeContextValue}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
