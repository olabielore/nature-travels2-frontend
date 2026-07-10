import { cookies } from 'next/headers';
import { api } from './api';
import { User } from '@/types/user';
import type { AxiosResponse } from 'axios';

const getCookieHeader = async () => {
  const cookieStore = await cookies();
  return cookieStore.toString();
};

export const checkSession = async (): Promise<AxiosResponse> => {
  const response = await api.post('/auth/refresh', {
    headers: {
      Cookie: await getCookieHeader(),
    },
  });
  return response;
};

export const getMe = async (): Promise<User> => {
  const { data } = await api.get<User>('/users/me', {
    headers: {
      Cookie: await getCookieHeader(),
    },
  });
  return data;
};