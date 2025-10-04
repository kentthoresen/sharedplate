/**
 * Footer provides a simple call-to-action and legal links.
 * Keeping the footer declarative avoids layout surprises across routes.
 */
export function Footer() {
  return (
    <footer className="bg-slate-900 py-8 text-slate-200">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-sm">
        <p>&copy; {new Date().getFullYear()} Love of Food Contributors.</p>
        <p>Community-owned. Privacy-first. Donation-funded.</p>
      </div>
    </footer>
  );
}
