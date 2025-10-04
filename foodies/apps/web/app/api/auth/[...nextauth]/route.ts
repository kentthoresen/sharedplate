import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth/options';

/**
 * NextAuth route handler exposes the authentication endpoints. App Router uses
 * the same handler for GET/POST so we export both.
 */
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
