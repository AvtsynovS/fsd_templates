import { combineReducers } from 'redux';
import { postsReducer } from '@pages';

export const rootReducer = combineReducers({
  posts: postsReducer,
});
