export type Post = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export interface PostProps {
  post: Post;
}
