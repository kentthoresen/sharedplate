import { IngredientList } from '@/components/ingredient-list';
import { StepList } from '@/components/step-list';
import { ReactionBar } from '@/components/reaction-bar';

/**
 * Recipe detail page stitches together all building blocks. Real data loading
 * will leverage server components with TanStack Query for mutations.
 */
export default function RecipeDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-wide text-brand-teal">Recipe ID: {id}</p>
        <h1 className="text-3xl font-bold text-brand-slate">Sample Recipe Title</h1>
        <p className="text-sm text-slate-600">This placeholder recipe demonstrates layout until backend integration lands.</p>
      </header>
      <IngredientList items={[{ name: 'Tomatoes', quantity: 6, unit: 'pcs' }]} />
      <StepList steps={["Roast tomatoes", "Blend with basil"]} />
      <ReactionBar />
    </article>
  );
}
