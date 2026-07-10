export type User = {
  _id: string;
  email: string;
  name: string;
  avatarUrl: string;
  savedStories: string[];
  storiesAmount: number;
  emailVerified: boolean;
};