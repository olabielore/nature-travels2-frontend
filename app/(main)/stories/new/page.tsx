
import { Metadata } from 'next';
import AddStoryForm from '@/components/AddStoryForm/AddStoryForm';

export const metadata: Metadata = {
  title: 'Створити нову історію',
};

export default function NewStoryPage() {
  return <AddStoryForm />;
}