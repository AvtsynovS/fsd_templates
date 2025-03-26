import { useQuery } from 'react-query';

import { postsApiClient } from '../api';

export const useGetPostsRequest = () => {
  const queryKey = 'posts';

  const { data: posts, isFetching: isLoading } = useQuery(
    [queryKey],
    () => postsApiClient.getPosts(),
    {
      retry: false,
      useErrorBoundary: false,
    },
  );

  return { posts, isLoading };
};

export const useGetPostRequest = (id: number) => {
  const queryKey = 'post';

  const { data: post, isFetching: isLoading } = useQuery(
    [queryKey, id],
    () => postsApiClient.getPost(id),
    {
      retry: false,
      useErrorBoundary: false,
      enabled: !!id,
    },
  );

  return { post, isLoading };
};
