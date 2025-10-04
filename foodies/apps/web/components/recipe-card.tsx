import Link from 'next/link';

export type RecipeSummary = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

/**
 * RecipeCard renders a concise snapshot for feeds and listings. We keep it
 * purely presentational so data fetching stays in hooks or pages.
 */
export function RecipeCard({ recipe }: { recipe: RecipeSummary }) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-brand-slate">
        <Link href={`/recipes/${recipe.id}`}>{recipe.title}</Link>
      </h3>
      <p className="mt-2 text-sm text-slate-600">{recipe.description}</p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-brand-teal">
        {recipe.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-brand-teal/10 px-3 py-1">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}
