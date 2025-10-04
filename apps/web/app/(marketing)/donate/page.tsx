/**
 * Donation page explains transparency commitments and links to Stripe checkout.
 */
export default function DonatePage() {
  return (
    <section className="mx-auto max-w-2xl space-y-6 px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-slate">Support the Community</h1>
      <p className="text-slate-600">
        Donations cover hosting, moderation support, and community grants. We publish a monthly ledger so you know exactly how
        funds are used.
      </p>
      <a
        className="inline-flex rounded-full bg-brand-orange px-6 py-3 text-white shadow"
        href="https://donate.sharedplate.community"
      >
        Donate via Stripe
      </a>
      <p className="text-xs text-slate-500">Stripe processes payments; we never store your card details.</p>
    </section>
  );
}
