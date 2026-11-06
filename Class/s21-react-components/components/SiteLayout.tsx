'use client';

import Link from 'next/link';
import { useInitiatives } from './InitiativesContext';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const { bookmarks } = useInitiatives();

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="bg-green-900 p-4 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link className="text-xl font-bold" href="/">SustainHub</Link>
          <div className="flex gap-5">
            <Link className="hover:underline" href="/">Projects</Link>
            <Link className="hover:underline" href="/bookmarks">Bookmarks ({bookmarks.length})</Link>
          </div>
        </div>
      </nav>
      <main className="flex-1">{children}</main>
      <footer className="bg-green-900 p-4 text-center text-sm text-white">SustainHub Climate Action Explorer</footer>
    </div>
  );
}
