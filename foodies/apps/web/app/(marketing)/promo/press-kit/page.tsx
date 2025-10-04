/**
 * Simple page linking to repository assets for journalists.
 */
export default function PromoPressKitPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6 px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-slate">Press Kit Resources</h1>
      <ul className="list-disc space-y-2 pl-6 text-slate-600">
        <li>
          <a className="text-brand-teal" href="https://github.com/sharedplate/foodies/tree/main/web/assets">
            Logos & screenshots
          </a>
        </li>
        <li>
          <a className="text-brand-teal" href="https://github.com/sharedplate/foodies/blob/main/docs/promo/press-kit.md">
            Messaging guidelines
          </a>
        </li>
      </ul>
    </section>
  );
}
