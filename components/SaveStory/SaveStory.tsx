import ErrorWhileSavingModal from '@/components/ErrorWhileSavingModal/ErrorWhileSavingModal';
import css from "./SaveStory.module.css"
import { useAuthStore } from '@/services/store/authStore';
import { toggleSaveStory } from '@/services/api/clientApi';
import { useState } from 'react';
import Button from '@/components/Button/Button';
import toast from 'react-hot-toast';

interface SaveStoryProps {
  storyId: string;
}

export default function SaveStory({ storyId }: SaveStoryProps) {
  const [saved, setSaved] = useState(false);
  const [loading, setLaoding] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const handleSave = async () => {
    if (!isAuthenticated) {
      setIsModalOpen(true);
      return;
    }
    setLaoding(true);
    try {
      const res = await toggleSaveStory(storyId);
      setSaved(res.saved);
    } catch {
      toast.error('Помилка збереження');
    } finally {
      setLaoding(false);
    }
  }

  return (
    <div className={css.container}>
      <h2>Збережіть собі історію</h2>
      <p>Вона буде доступна у вашому профілі у розділі збережене</p>
      <Button onClick={handleSave} disabled={loading}>
        {saved ? 'Видалити зі збережених' : 'Зберегти'}
      </Button>

      {isModalOpen && (
        <ErrorWhileSavingModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}