'use client';

import InitiativeCard from './InitiativeCard';
import { useInitiatives } from './InitiativesContext';

export default function Bookmarks() {
  const { initiatives, bookmarks, vote, toggleBookmark } = useInitiatives();
  const savedInitiatives = initiatives.filter((initiative) => bookmarks.includes(initiative.id));

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-2 text-3xl font-bold">Bookmarked Projects</h1>
      {savedInitiatives.length === 0 ? <p className="text-gray-600">No bookmarked projects yet.</p> : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {savedInitiatives.map((initiative) => (
            <InitiativeCard
              key={initiative.id}
              initiative={initiative}
              isBookmarked
              onVote={() => vote(initiative.id)}
              onBookmark={() => toggleBookmark(initiative.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
