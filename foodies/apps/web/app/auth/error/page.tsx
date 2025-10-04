import Link from 'next/link';

/**
 * Auth error page provides gentle guidance when sign-in fails.
 */
export default function AuthErrorPage() {
  return (
    <section className="mx-auto max-w-md space-y-4 px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold text-brand-slate">Sign-in error</h1>
      <p className="text-sm text-slate-600">
        Something went wrong while signing you in. Please retry or contact support@sharedplate.community.
      </p>
      <Link className="text-brand-teal" href="/auth/signin">
        Try again
      </Link>
    </section>
  );
}
