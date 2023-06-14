import ApiService from '@/services/api.base.service';
import { UserCreateModel, UserPagedModel } from './user.service.model';

const UsersService = {
  getUsers: async (page: number, perPage: number): Promise<UserPagedModel> => {
    const users = await ApiService.get<UserPagedModel>('/v1/users', {
      page,
      per_page: perPage,
    });
    return users;
  },

  createUser: async (user: UserCreateModel) => {
    return await ApiService.post('/v1/users', user);
  },

  deleteUser: async (id: string | null) => {
    return await ApiService.delete(`/v1/users/${id}`);
  },

  sendEmailChangePassword: async (email: string) => {
    return await ApiService.post('/v1/users/send-email-change-password', {
      email,
    });
  },
};

export default UsersService;
