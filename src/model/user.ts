export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  image?: string;
}

export interface ProfileUser {
  image: string;
  username: string;
  posts: number;
  followers: number;
  following: number;
  name: string;
}

export type SearchUser = Omit<User, "image"> & {
  image: string;
  followers: number;
  following: number;
};
