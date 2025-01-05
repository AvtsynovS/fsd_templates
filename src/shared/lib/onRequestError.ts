import { AxiosError } from 'axios';

export const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  switch (error.response?.status) {
    case 403:
      //handled - флаг обработанного промиса, чтобы не выводить уведомление об ошибке дважды
      return Promise.reject({ ...error, handled: true });
    case 500:
      return Promise.reject({ ...error, handled: true });
    default:
      console.error(`request error: [${JSON.stringify(error)}]`);
      return Promise.reject(error);
  }
};
