'use client';

import { createContext, useContext, useState } from 'react';
import { SAMPLE_INITIATIVES } from '../data/initiatives';

type Initiative = (typeof SAMPLE_INITIATIVES)[number];

type InitiativesContextType = {
  initiatives: Initiative[];
  bookmarks: string[];
  vote: (id: string) => void;
  toggleBookmark: (id: string) => void;
};

const InitiativesContext = createContext<InitiativesContextType | null>(null);

export function InitiativesProvider({ children }: { children: React.ReactNode }) {
  const [initiatives, setInitiatives] = useState<Initiative[]>(SAMPLE_INITIATIVES);
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  function vote(id: string) {
    setInitiatives(initiatives.map((initiative) =>
      initiative.id === id ? { ...initiative, votes: initiative.votes + 1 } : initiative,
    ));
  }

  function toggleBookmark(id: string) {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter((bookmark) => bookmark !== id));
    } else {
      setBookmarks([...bookmarks, id]);
    }
  }

  return (
    <InitiativesContext.Provider value={{ initiatives, bookmarks, vote, toggleBookmark }}>
      {children}
    </InitiativesContext.Provider>
  );
}

export function useInitiatives() {
  const context = useContext(InitiativesContext);
  if (!context) throw new Error('useInitiatives must be used inside InitiativesProvider');
  return context;
}
