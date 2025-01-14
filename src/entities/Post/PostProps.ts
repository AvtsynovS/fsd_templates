export type PostType = {
  body: string;
  id: number;
  title: string;
  userId: number;
};

export interface PostProps {
  post: PostType;
}
