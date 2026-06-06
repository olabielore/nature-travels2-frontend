export interface Story {
  _id: string;
  title: string;
  article: string;
  img: string;
  date: string;
  savedCount: number;
  ownerId: {
    _id: string;
    name: string;
    avatarUrl: string;
  };
  category: {
    _id: string;
    category: string;
  };
}