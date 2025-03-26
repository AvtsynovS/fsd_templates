import axios, { CreateAxiosDefaults } from 'axios';

import { BASE_URL } from '../config';
import { onRequestError } from '../lib';

export const getAxiosInstance = (config?: CreateAxiosDefaults) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: config?.headers || {
      'Content-type': 'application/json',
    },
    paramsSerializer: {
      encode: (param) => encodeURIComponent(param),
    },
    ...config,
  });

  axiosInstance.interceptors.request.use(
    async (config) => {
      // TODO добавить логику для получения токена авторизации
      const accessToken = '';

      if (accessToken !== '') {
        config.headers.set('Authorization', `Bearer ${accessToken}`);
      }

      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    onRequestError,
  );

  return axiosInstance;
};
