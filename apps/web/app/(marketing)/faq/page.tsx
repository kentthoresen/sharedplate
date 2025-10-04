const faqs = [
  {
    question: 'Is Love of Food free to use?',
    answer: 'Yes. Donations keep the lights on but the core experience remains free.'
  },
  {
    question: 'How do you protect privacy?',
    answer: 'We store the minimum data needed, offer data exports, and keep telemetry opt-in only.'
  },
  {
    question: 'Can I contribute?',
    answer: 'Absolutely! Join the GitHub project, submit recipes, or help moderate the community.'
  }
];

/**
 * FAQ page uses simple mapping to keep content maintainable.
 */
export default function FAQPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6 px-4 py-16">
      <h1 className="text-3xl font-bold text-brand-slate">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((item) => (
          <article key={item.question} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-brand-slate">{item.question}</h2>
            <p className="mt-2 text-sm text-slate-600">{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
