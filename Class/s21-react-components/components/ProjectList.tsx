'use client';

import InitiativeCard from './InitiativeCard';
import { useInitiatives } from './InitiativesContext';

export default function ProjectList() {
  const { initiatives, bookmarks, vote, toggleBookmark } = useInitiatives();

  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-2 text-3xl font-bold">Climate Action Projects</h1>
      <p className="mb-8 text-gray-600">Explore projects and support the ideas you like.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {initiatives.map((initiative) => (
          <InitiativeCard
            key={initiative.id}
            initiative={initiative}
            isBookmarked={bookmarks.includes(initiative.id)}
            onVote={() => vote(initiative.id)}
            onBookmark={() => toggleBookmark(initiative.id)}
          />
        ))}
      </div>
    </section>
  );
}
