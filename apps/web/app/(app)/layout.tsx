import { ReactNode } from 'react';
import { authGuard } from '@/lib/auth-guard';

/**
 * Authenticated layout ensures user session is present before rendering.
 * We keep the guard logic in a shared helper to make testing easier.
 */
export default async function AppLayout({ children }: { children: ReactNode }) {
  await authGuard();

  return <div className="mx-auto max-w-5xl px-4 py-8">{children}</div>;
}
