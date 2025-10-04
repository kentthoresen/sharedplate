import Link from 'next/link';

/**
 * Home page acts as marketing landing. We intentionally keep copy concise
 * and accessible, focusing on mission statements without dark patterns.
 */
export default function LandingPage() {
  return (
    <section className="bg-gradient-to-br from-brand-orange/10 via-white to-brand-teal/10 py-16">
      <div className="mx-auto max-w-4xl space-y-10 px-4 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-brand-slate sm:text-5xl">
            Love of Food — a people-first cooking community
          </h1>
          <p className="text-lg text-slate-600">
            Share recipes, tell stories, and plan meals together without ads, algorithms, or influencers.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              className="rounded-full bg-brand-orange px-6 py-3 text-white shadow"
              href="/auth/signin"
            >
              Join the early community
            </Link>
            <Link className="text-brand-teal" href="/principles">
              Read our principles
            </Link>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: 'Community owned',
              description: 'Funded entirely by donations and steward governance. No ads, ever.'
            },
            {
              title: 'Privacy first',
              description: 'Opt-in telemetry only. We respect your kitchen and your data.'
            },
            {
              title: 'Built with love',
              description: 'Rust backend, accessible UI, and transparent roadmap updates.'
            }
          ].map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm"
            >
              <h2 className="text-xl font-semibold text-brand-slate">{feature.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
