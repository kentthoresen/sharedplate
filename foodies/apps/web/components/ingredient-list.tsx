export type Ingredient = {
  name: string;
  quantity: number;
  unit: string;
};

/**
 * IngredientList renders structured ingredient data. The UI is intentionally
 * minimal so it can be reused in print views or mobile contexts.
 */
export function IngredientList({ items }: { items: Ingredient[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.name} className="flex items-baseline gap-2 text-sm text-slate-700">
          <span className="font-semibold text-brand-slate">{item.quantity}</span>
          <span>{item.unit}</span>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
}
