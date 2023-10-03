export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  image?: string;
}

export type SearchUser = Omit<User, "image"> & {
  image: string;
  followers: number;
  following: number;
};
