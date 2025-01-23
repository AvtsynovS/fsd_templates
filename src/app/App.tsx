import { Providers } from './providers';
import { AppRouter } from './routers';

export const Application = () => {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
};
