import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';

import { Fallback } from '@shared';

import { store } from '../store';

type ProviderProps = {
  children: JSX.Element;
};

// TODO Пробросить тему
export const Providers = ({ children }: ProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Provider store={store}>{children}</Provider>
    </ErrorBoundary>
  );
};
