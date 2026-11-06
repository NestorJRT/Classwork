'use client';

import Link from 'next/link';
import { useInitiatives } from './InitiativesContext';

export default function ProjectDetails({ id }: { id: string }) {
  const { initiatives, bookmarks, vote, toggleBookmark } = useInitiatives();
  const initiative = initiatives.find((item) => item.id === id);

  if (!initiative) {
    return <section className="mx-auto max-w-3xl px-6 py-10">Project not found. <Link className="text-green-800 underline" href="/">Back to projects</Link></section>;
  }

  const isBookmarked = bookmarks.includes(initiative.id);

  return (
    <section className="mx-auto max-w-3xl px-6 py-10">
      <Link className="text-green-800 underline" href="/">← All projects</Link>
      <div className="mt-6 rounded-lg border bg-white p-6 shadow-sm">
        <p className="mb-2 text-sm font-semibold text-green-800">{initiative.category}</p>
        <h1 className="text-3xl font-bold">{initiative.title}</h1>
        <p className="mt-4 text-gray-700">{initiative.description}</p>
        <p className="mt-4 text-sm text-gray-600">Proposed by {initiative.author}</p>
        <div className="mt-6 flex gap-2">
          <button className="rounded bg-green-800 px-4 py-2 text-white hover:bg-green-900" onClick={() => vote(initiative.id)}>
            Vote ({initiative.votes})
          </button>
          <button className="rounded border px-4 py-2 hover:bg-gray-50" onClick={() => toggleBookmark(initiative.id)}>
            {isBookmarked ? 'Remove bookmark' : 'Bookmark'}
          </button>
        </div>
      </div>
    </section>
  );
}
