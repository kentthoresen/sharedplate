/**
 * Principles page lists core commitments so visitors know how decisions are made.
 */
export default function PrinciplesPage() {
  const principles = [
    {
      title: 'No ads, ever',
      detail: 'We are funded by donations and community grants, not advertising revenue.'
    },
    {
      title: 'Privacy-respecting',
      detail: 'Telemetry is opt-in and anonymized. No third-party analytics scripts are loaded by default.'
    },
    {
      title: 'Open source',
      detail: 'All code is available under AGPL/MIT so you can audit, fork, and improve it.'
    },
    {
      title: 'Inclusive design',
      detail: 'Accessibility is non-negotiable; we co-design with cooks from diverse backgrounds.'
    }
  ];

  return (
    <section className="mx-auto max-w-4xl space-y-8 px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-slate">Our Principles</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {principles.map((principle) => (
          <article key={principle.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-brand-slate">{principle.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{principle.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
