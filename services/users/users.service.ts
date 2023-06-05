import ApiService from '@/services/api.base.service';
import { UserModel } from './user.service.model';

const UsersService = {
  getUsers: async (): Promise<UserModel[]> => {
    const users = await ApiService.get<UserModel[]>('/users');
    return users;
  },

  deleteUser: async (id: number): Promise<UserModel[]> => {
    const users = await ApiService.get<UserModel[]>('/users');
    return users;
  },

  createUser: async (id: number): Promise<UserModel[]> => {
    const users = await ApiService.post<UserModel[]>('/users', { id });
    return users;
  },
};

export default UsersService;
