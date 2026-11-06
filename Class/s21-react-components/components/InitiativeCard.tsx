'use client';

import Link from 'next/link';

type Props = {
  initiative: { id: string; title: string; votes: number };
  isBookmarked: boolean;
  onVote: () => void;
  onBookmark: () => void;
};

export default function InitiativeCard({ initiative, isBookmarked, onVote, onBookmark }: Props) {
  return (
    <article className="rounded-lg border bg-white p-5 shadow-sm">
      <Link className="block" href={`/initiative/${initiative.id}`}>
        <h2 className="text-xl font-semibold hover:text-green-800">{initiative.title}</h2>
        <p className="mt-2 text-sm text-gray-600">{initiative.votes} votes</p>
      </Link>
      <div className="mt-4 flex gap-2">
        <button className="rounded bg-green-800 px-3 py-2 text-sm text-white hover:bg-green-900" onClick={onVote}>Vote</button>
        <button className="rounded border px-3 py-2 text-sm hover:bg-gray-50" onClick={onBookmark}>
          {isBookmarked ? 'Saved' : 'Bookmark'}
        </button>
      </div>
    </article>
  );
}
