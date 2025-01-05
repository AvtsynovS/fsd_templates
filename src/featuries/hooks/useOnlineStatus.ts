import { useSyncExternalStore, useDebugValue } from 'react';

// «Статус пользователя» — иконка, которая при нажатии меняет статус пользователя,
// если надо временно отключить его учетку. Эта кнопка посложнее она диспатчит асинхронный Thunk,
// который отправляет запрос на сервер. Всю эту бизнес‑логику важно разместить именно на этом
// уровне по двум причинам. Первое — поддержание низкой связности. Второе в интерфейсе слайса мы
// экспортируем наш Thunk, на который может подписаться другой редьюсер из виджета или страницы.
// Чем ниже по структуре FSD мы будет располагать эти thunk, тем лучше.

// TODO Либо переделать, либо удалить
export function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true,
  );
  useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}

function subscribe(callback: any) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}
