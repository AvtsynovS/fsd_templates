import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { Fallback, queryClient, ThemeWrapper } from '@shared';

import { store } from '../store';

type ProviderProps = {
  children: JSX.Element;
};

export const Providers = ({ children }: ProviderProps) => {
  return (
    <ThemeWrapper>
      <ErrorBoundary FallbackComponent={Fallback}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>{children}</Provider>
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeWrapper>
  );
};
