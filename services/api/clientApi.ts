import { api } from './api';
import { Story } from '@/types/story';
import { User } from '@/types/user';
import { Category } from '@/types/category';

export type AuthRequest = {
    email: string;
    password: string;
};
  
export type UpdateUserRequest = {
  username?: string;
};

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};
  
export const register = async (data: RegisterRequest): Promise<User> => {
const { data: user } = await api.post<User>('/auth/register', data);
return user;
};

export const login = async (data: AuthRequest): Promise<User> => {
const { data: user } = await api.post<User>('/auth/login', data);
return user;
};

export const logout = async (): Promise<void> => {
await api.post('/auth/logout');
};

export const refreshSession = async (): Promise<void> => {
  await api.post('/auth/refresh');
};

export const getMe = async (): Promise<User> => {
const { data } = await api.get<User>('/users/me');
return data;
};

export const updateMe = async(body: UpdateUserRequest): Promise<User> => {
const { data } = await api.patch<User>('/users/me', body);
return data;
};

export type StoriesParams = {
page?: number;
perPage?: number;
search?: string;
category?: string;
rate?: number;
}
  
export type StoriesResponse = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  stories: Story[];
};

export const getStories = async (
  params: StoriesParams
): Promise<StoriesResponse> => {
  const { data } = await api.get<StoriesResponse>('/stories', { params });
  return data;
};

export const getStoryById = async (id: string): Promise<Story> => {
  const { data } = await api.get<Story>(`/stories/${id}`);
  return data;
};

export const createStory = async (
  story: Pick<Story, 'title' | 'article' | 'category'>
): Promise<Story> => {
  const { data } = await api.post<Story>('/stories', story);
  return data;
};

export const deleteStory = async (id: string): Promise<Story> => {
  const { data } = await api.delete<Story>(`/stories/${id}`);
  return data;
};

export const getCategories = async (): Promise<Category[]> => {
  const { data } = await api.get<Category[]>('/categories');
  return data;
};

  // збереження/видалення зі збережених
export const toggleSaveStory = async (storyId: string): Promise<{ saved: boolean }> => {
  const { data } = await api.patch(`/stories/${storyId}/save`);
  return data;
};

export const getMyStories = async (params: StoriesParams): Promise<StoriesResponse> => {
  const { data } = await api.get<StoriesResponse>('/stories/my', { params });
  return data;
};

export const getSavedStories = async (params: StoriesParams): Promise<StoriesResponse> => {
  const { data } = await api.get<StoriesResponse>('/stories/saved', { params });
  return data;
};

export const getRecommendedStories = async (category: string, storyId: string): Promise<{ stories: Story[] }> => {
  const { data } = await api.get('/stories/recommended', { params: { category, storyId } });
  return data;
};

export const getPopularStories = async (): Promise<{ stories: Story[] }> => {
  const { data } = await api.get('/stories/popular');
  return data;
};