export interface FullPost {
  body: string;
  title: string;
  id: number;
  userId: number;
  user: User;
  comments: CommentInterface[];
}

export interface User {
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  id: number;
  address: Address;
}

export interface CommentInterface {
  body: string;
  email: string;
  name: string;
  id: number;
  postId: number;
}

export interface Post {
  body: string;
  title: string;
  id: number;
  userId: number;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

type Geo = {
  lat: string;
  lng: string;
};
