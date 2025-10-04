import Link from 'next/link';
import { RecipeCard, RecipeSummary } from '@/components/recipe-card';

/**
 * Recipes index lists authored recipes. Placeholder data ensures layout renders
 * while backend endpoints are under development.
 */
export default function RecipesPage() {
  const recipes: RecipeSummary[] = [
    {
      id: 'draft-123',
      title: 'Spiced Chickpea Stew',
      description: 'Comforting stew with preserved lemons.',
      tags: ['vegan', 'stew']
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-brand-slate">Your Recipes</h1>
        <Link className="rounded-full bg-brand-teal px-4 py-2 text-sm text-white" href="/recipes/new">
          New recipe
        </Link>
      </div>
      <div className="space-y-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
