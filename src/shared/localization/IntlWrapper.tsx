import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { IntlProvider } from 'react-intl';

import { SupportedLocales } from './config';
import { getCurrentLocale, getTranslate, onChangeLocale } from './helpers';
import { IntlContext } from './IntlContext';

export const IntlWrapper = ({ children }: PropsWithChildren) => {
  const [locale, setLocale] = useState<SupportedLocales>(() =>
    getCurrentLocale(),
  );

  const messages = useMemo(() => getTranslate(locale), [locale]);

  const handleChangeLocale = useCallback((newLocale: SupportedLocales) => {
    setLocale(newLocale);
    onChangeLocale(newLocale);
  }, []);

  const themeContextValue = useMemo(
    () => ({ currentLocale: locale, onChangeLocale: handleChangeLocale }),
    [locale, handleChangeLocale],
  );

  return (
    //  @ts-expect-error: React 18 type error
    <IntlProvider
      messages={messages}
      locale={locale}
      defaultLocale={SupportedLocales.EN}
    >
      <IntlContext.Provider value={themeContextValue}>
        {children}
      </IntlContext.Provider>
    </IntlProvider>
  );
};
