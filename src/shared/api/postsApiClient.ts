import { BASE_URL } from '@shared';

import { PostResponseType, PostsApiClientType } from '../types';

import { httpClient } from './httpClient';

const getPosts = async () => {
  const { data } = await httpClient.request<PostResponseType[]>({
    url: BASE_URL,
    method: 'GET',
  });

  return data;
};

const getPost = async (id: number) => {
  const { data } = await httpClient.request<PostResponseType>({
    url: `${BASE_URL}/${id}`,
    method: 'GET',
  });

  return data;
};

export const postsApiClient: PostsApiClientType = {
  getPosts,
  getPost,
};
