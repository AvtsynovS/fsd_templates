import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import { Fallback } from '@shared';

import { store } from '../store';

type ProviderProps = {
  children: JSX.Element;
};

// TODO Пробросить тему
export const Providers = ({ children }: ProviderProps) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{children}</Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
