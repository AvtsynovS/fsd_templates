export type PostType = {
  id: number;
  body: string;
  title: string;
  userId: number;
};

export type PostResponseType = PostType;

export type PostsApiClientType = {
  getPosts: () => Promise<PostResponseType[]>;
  getPost: (id: number) => Promise<PostResponseType>;
};
