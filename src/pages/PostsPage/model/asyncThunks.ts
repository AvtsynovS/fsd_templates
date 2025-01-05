import { createAsyncThunk } from '@reduxjs/toolkit';
import { addPost, getAllPosts, getPost } from '../api/posts';
import { Post } from '@entites';

export const getPosts = createAsyncThunk('posts', async (_, thunkAPI) => {
  try {
    const posts = await getAllPosts();
    return posts;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
    return thunkAPI.rejectWithValue('Произошла ошибка при загрузки постов');
  }
});

export const getPostById = createAsyncThunk(
  'postById',
  async (postId: number, thunkAPI) => {
    try {
      const post = await getPost(postId);
      return post;
    } catch (e) {
      return thunkAPI.rejectWithValue('Такого поста не существует');
    }
  },
);

export const createPost = createAsyncThunk(
  'createPost',
  async (post: Omit<Post, 'id'>, thunkAPI) => {
    try {
      const newPost = await addPost(post);
      return newPost;
    } catch (e) {
      return thunkAPI.rejectWithValue('Такого поста не существует');
    }
  },
);
