import { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { Fallback, IntlWrapper, queryClient, ThemeWrapper } from '@shared';

import { store } from '../store';

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeWrapper>
      <IntlWrapper>
        <ErrorBoundary FallbackComponent={Fallback}>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>{children}</Provider>
          </QueryClientProvider>
        </ErrorBoundary>
      </IntlWrapper>
    </ThemeWrapper>
  );
};
