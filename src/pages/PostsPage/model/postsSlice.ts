import { createSlice } from '@reduxjs/toolkit';

import { PostType } from '@entities';

import { createPost, getPostById, getPosts } from './asyncThunks';

type PostsState = {
  posts: PostType[];
  currentPost: PostType | null;
  loading: boolean;
};

const initialState: PostsState = {
  posts: [],
  currentPost: null,
  loading: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(getPosts.pending, (state, action) => {
        console.log('Загрузка данных', action.meta.requestStatus);
        state.loading = true;
      })
      .addCase(getPosts.rejected, (state, action) => {
        console.log(`Error in ${action.type}. Message: ${action.payload}`);
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.currentPost = action.payload;
        state.loading = false;
      })
      .addCase(getPostById.pending, (state, action) => {
        console.log('Загрузка данных', action.meta.requestStatus);
        state.loading = true;
      })
      .addCase(getPostById.rejected, (state, action) => {
        console.log(`Error in ${action.type}. Message: ${action.payload}`);
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.loading = false;
      })
      .addCase(createPost.pending, (state, action) => {
        console.log('Загрузка данных', action.meta.requestStatus);
        state.loading = true;
      })
      .addCase(createPost.rejected, (state, action) => {
        console.log(`Error in ${action.type}. Message: ${action.payload}`);
      });
  },
});

export const postsReducer = postsSlice.reducer;
