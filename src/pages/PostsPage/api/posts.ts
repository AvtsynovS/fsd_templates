import { Post } from '@entites';
import { BASE_URL, httpClient } from '@shared';

export const getAllPosts = async () => {
  const { data } = await httpClient.request<Post[]>({
    method: 'GET',
    url: BASE_URL,
    params: {
      _limit: 10,
    },
  });

  return data;
};

export const getPost = async (id: number) => {
  const { data } = await httpClient.request<Post>({
    method: 'GET',
    url: `${BASE_URL}/${id}`,
  });
  return data;
};

export const addPost = async (post: Omit<Post, 'id'>) => {
  const { data } = await httpClient.request<Post>({
    method: 'POST',
    url: BASE_URL,
    data: post,
  });

  return data;
};
