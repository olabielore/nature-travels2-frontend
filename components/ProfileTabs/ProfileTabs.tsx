'use client';

import { useState } from 'react';
import TravellersStories from '@/components/TravellersStories/TravellersStories';
import css from './ProfileTabs.module.css';

type Tab = 'saved' | 'my';

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('saved');

  return (
    <>
      <div className={css.tabs}>
        <button
          className={activeTab === 'saved' ? css.activeTab : css.tab}
          onClick={() => setActiveTab('saved')}
        >
          Збережені історії
        </button>
        <button
          className={activeTab === 'my' ? css.activeTab : css.tab}
          onClick={() => setActiveTab('my')}
        >
          Мої історії
        </button>
      </div>

      {activeTab === 'saved' ? (
        <TravellersStories type="saved" />
      ) : (
        <TravellersStories type="my" />
      )}
    </>
  );
}