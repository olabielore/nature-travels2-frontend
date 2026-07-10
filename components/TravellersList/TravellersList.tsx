'use client';

import { useState, useEffect, useCallback } from 'react';
import { getTravellers } from '@/services/api/clientApi';
import TravellerCard from '@/components/TravellerCard/TravellerCard';
import Button from '@/components/Button/Button';
import { User } from "@/types/user";
import toast from 'react-hot-toast';

const TravellersList = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadTravellers = useCallback(async () => {
    setLoading(true);

    try {
      const res = await getTravellers({ page });

      setUsers((prev) => [...prev, ...res.users]);

      setHasMore(page < res.totalPages);
    } catch {
      toast.error('Помилка завантаження');
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    if (!hasMore) return;

    loadTravellers();
  }, [page, hasMore, loadTravellers]);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <TravellerCard user={user} />
          </li>
        ))}
      </ul>

      {hasMore && (
        <Button
          type="button"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={loading}
          isLoading={loading}
          loadingText="Завантаження"
          variant="mantis"
        >
          Показати ще
        </Button>
      )}
    </>
  );
};

export default TravellersList;