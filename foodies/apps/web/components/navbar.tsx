'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

/**
 * Navbar renders top-level navigation. We keep links declarative so future
 * contributors can extend without digging into complex state.
 */
export function Navbar() {
  const { data: session } = useSession();

  return (
    <header className="bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-bold text-brand-slate">
          Love of Food
        </Link>
        <nav className="flex gap-4 text-sm font-medium text-slate-600">
          <Link href="/about">About</Link>
          <Link href="/principles">Principles</Link>
          <Link href="/donate">Donate</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/press">Press</Link>
        </nav>
        <div>
          {session ? (
            <button
              onClick={() => signOut()}
              className="rounded-full bg-brand-orange px-3 py-1 text-white"
            >
              Sign out
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="rounded-full bg-brand-teal px-3 py-1 text-white"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
