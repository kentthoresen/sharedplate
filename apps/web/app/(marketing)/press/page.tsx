/**
 * Press page links to the promo kit and highlights contact information.
 */
export default function PressPage() {
  return (
    <section className="mx-auto max-w-2xl space-y-6 px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-slate">Press & Media</h1>
      <p className="text-slate-600">
        We welcome press coverage that highlights community-owned technology and equitable food systems. Download the press kit
        for approved assets and story angles.
      </p>
      <a
        className="inline-flex rounded-full bg-brand-teal px-6 py-3 text-white shadow"
        href="/promo/press-kit"
      >
        Download press kit
      </a>
      <p className="text-sm text-slate-500">Contact press@sharedplate.community for interviews or additional assets.</p>
    </section>
  );
}
