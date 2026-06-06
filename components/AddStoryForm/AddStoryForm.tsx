'use client';

import { useState } from 'react';
import Image from 'next/image';
import css from './AddStoryForm.module.css';

export default function AddStoryForm() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Створити нову історію</h1>

        <p>Обкладинка статті</p>
        <Image
          alt="Обкладинка статті"
          src={preview ?? '/placeholder.jpg'}
          width={1091}
          height={726}
        />

        <label htmlFor="image">
          Завантажити фото
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
      </div>
    </main>
  );
}