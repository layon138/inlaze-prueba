export interface Post {
  username: string;
  likes: number;
  title: string;
  description: string;
  date: string;
  userid: string;
  postid: number;
  createat: string;
}

export interface GeneratePost {
  edit: boolean;
  form: RequestPostCreate;
}

export interface RequestPostCreate {
  title: string;
  content: string;
  userId?: string;
  postId?: number;
}
