'use client';

import { getProviders, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

/**
 * Sign-in page enumerates configured providers to keep onboarding transparent.
 */
export default function SignInPage() {
  const [providers, setProviders] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    getProviders().then((result) => setProviders(result));
  }, []);

  return (
    <section className="mx-auto max-w-md space-y-6 px-4 py-16">
      <h1 className="text-2xl font-semibold text-brand-slate">Sign in to Love of Food</h1>
      <div className="space-y-3">
        {providers ? (
          Object.values(providers).map((provider) => (
            <button
              key={provider.id}
              className="w-full rounded-full bg-brand-teal px-4 py-2 text-white"
              onClick={() => signIn(provider.id)}
            >
              Continue with {provider.name}
            </button>
          ))
        ) : (
          <p className="text-sm text-slate-600">Loading providers…</p>
        )}
      </div>
    </section>
  );
}
