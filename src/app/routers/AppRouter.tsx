import { BrowserRouter, Route, Routes } from 'react-router';

import { HomePage, BlogPage, PostsPage } from '@pages';
import { Fallback } from '@shared';

import { Layout } from '../Layout';

// TODO После настройки авторизации добавить приватный роутинг
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<Fallback />}>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="*" element={<Fallback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
