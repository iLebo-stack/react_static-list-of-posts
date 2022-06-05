/// <reference types="react-scripts" />

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: User | undefined;
  comment: Comment | undefined;
}
