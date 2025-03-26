import { BrowserRouter, Route, Routes } from 'react-router';

import { HomePage, BlogPage, PostsPage } from '@pages';
import { Fallback } from '@shared';

import { Layout } from '../Layout';
import { ScrollToTop } from '../lib/ScrollToTop';

// TODO После настройки авторизации добавить приватный роутинг
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<Fallback />}>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Route>
        <Route path="*" element={<Fallback />} />
      </Routes>
    </BrowserRouter>
  );
};
