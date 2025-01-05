import { useOnlineStatus } from '../hooks';

// TODO переделать пример фичи
export const FirstFeature = () => {
  const isOnline = useOnlineStatus();

  return <h3>{isOnline ? '✅ Online' : '❌ Disconnected'}</h3>;
};
