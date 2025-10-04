import { IngredientList } from '@/components/ingredient-list';

/**
 * Recipe creation form placeholder ensures route exists. Actual form logic will
 * use controlled inputs and Rust API mutations in future iterations.
 */
export default function NewRecipePage() {
  const sampleIngredients = [
    { name: 'Chickpeas', quantity: 2, unit: 'cups' },
    { name: 'Garlic', quantity: 3, unit: 'cloves' }
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-brand-slate">Create a Recipe</h1>
      <p className="text-sm text-slate-600">
        Full form implementation is tracked in the roadmap. This placeholder communicates the intended layout.
      </p>
      <IngredientList items={sampleIngredients} />
    </div>
  );
}
