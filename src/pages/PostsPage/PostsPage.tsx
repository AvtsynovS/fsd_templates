import { useEffect } from 'react';

import { FirstFeature } from '@features';

import {
  Button,
  useAppDispatch,
  useAppSelector,
  useGetPostsRequest,
} from '@shared';

import { createPost, getPostById, getPosts } from './model/asyncThunks';

export const PostsPage = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector(({ posts }) => posts.posts);
  // const currentPost = useAppSelector(({ posts }) => posts.currentPost);

  const { posts: responsePost } = useGetPostsRequest();

  console.log('responsePost', responsePost);

  const onCreatePost = () => {
    const post = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };

    dispatch(createPost(post));
  };

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getPostById(1));
  }, []);

  return (
    <>
      <div>FirstPage</div>
      <div>Порт: {process.env.REACT_APP_PORT}</div>
      <div>Версия: {process.env.npm_package_version}</div>
      <FirstFeature />
      <Button label="Создать пост" onClick={onCreatePost} />
      <div>
        <h3>Посты</h3>
        {posts.map(({ id, title, body }) => {
          return (
            <div key={id}>
              <h4>{title}</h4>
              <div>{body}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};
