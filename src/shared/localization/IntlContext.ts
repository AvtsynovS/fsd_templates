import { createContext } from 'react';

import { SupportedLocales } from './config';
import { onChangeLocale } from './helpers';

type IntlContextType = {
  currentLocale: SupportedLocales;
  onChangeLocale: (locale: SupportedLocales) => void;
};

export const IntlContext = createContext<IntlContextType>({
  currentLocale: SupportedLocales.EN,
  onChangeLocale: (locale: SupportedLocales) => onChangeLocale(locale),
});
