import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import { redirect } from 'next/navigation';

/**
 * authGuard centralizes server-side session checks. We reuse this helper across
 * layouts and server actions to guarantee consistent redirects when the session
 * is missing or expired.
 */
export async function authGuard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/auth/signin');
  }
  return session;
}
