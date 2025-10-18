export interface Comment {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  text: string;
}

export interface Post {
  id: string;
  user: {
    name: string;
    avatar?: string;
  };
  content: string;
  comments: Comment[];
}
