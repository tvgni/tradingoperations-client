import { Role } from '@/utils/roles';

export interface UserModel {
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
  blocked: boolean;
  username: string;
  nickname: string;
  role: string;
  phone_number: string;
  user_id: string;
  invited: true;
  name: string;
}

export interface UserPagedModel {
  data: UserModel[];
  totalCount: number;
}

export interface UserCreateModel {
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
  blocked: boolean;
  username: string;
  nickname: string;
  role: Role;
  phone_number: string;
}
