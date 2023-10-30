export type UserType = {
  id: string;
  name: string;
  email: string;
  age: number;
  address?: string;
  profileImageUrl?: string;
};

export interface UserSearchParams {
  _sort?: 'age' | 'name';
  _page: number;
  q?: string;
}
