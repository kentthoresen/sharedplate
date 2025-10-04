import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import AppleProvider from 'next-auth/providers/apple';
import EmailProvider from 'next-auth/providers/email';

/**
 * Shared NextAuth configuration with federated providers. JWTs are signed using
 * RS256 via NextAuth's built-in key rotation. The web layer exposes JWKS for the
 * Rust API to validate.
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  jwt: {
    signingAlgorithm: 'RS256'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? ''
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID ?? '',
      clientSecret: process.env.APPLE_SECRET ?? ''
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER ?? '',
      from: process.env.EMAIL_FROM
    })
  ],
  callbacks: {
    async session({ session, token }) {
      if (token.sub) {
        session.user = {
          ...session.user,
          id: token.sub
        } as typeof session.user & { id: string };
      }
      return session;
    }
  }
};
