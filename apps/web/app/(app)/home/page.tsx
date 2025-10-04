import { RecipeCard, RecipeSummary } from '@/components/recipe-card';

/**
 * Home feed pulls personalized data from the Rust API. We stub with sample data
 * to keep the UI demonstrative until the API is wired.
 */
export default function HomePage() {
  const sample: RecipeSummary[] = [
    {
      id: 'sample-1',
      title: 'Neighborhood Tomato Soup',
      description: 'Slow-roasted tomatoes with basil, shared by Mei.',
      tags: ['comfort', 'vegetarian']
    }
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-brand-slate">Your Feed</h1>
      {sample.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
      <p className="text-sm text-slate-500">Real data will appear once the API connection is configured.</p>
    </div>
  );
}
