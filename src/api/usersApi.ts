import { axiosInstance } from './axiosInstance';
import { User } from '../store/types';

export const usersApi = {
  getUsers(): Promise<{ data: User[] }> {
    return axiosInstance.get('react-test-api.json');
  },
};
