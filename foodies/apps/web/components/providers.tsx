'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/**
 * Providers component centralizes client-side context initialization.
 * We memoize the QueryClient to avoid recreating caches on navigation.
 */
export function Providers({ children }: { children: ReactNode }) {
  const [client] = useState(() => new QueryClient());

  return (
    <SessionProvider>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </SessionProvider>
  );
}
