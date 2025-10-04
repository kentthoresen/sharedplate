/**
 * StepList renders ordered cooking steps with accessible markup.
 */
export function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="list-decimal space-y-3 pl-5 text-sm text-slate-700">
      {steps.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ol>
  );
}
