export type ShoppingListItem = {
  id: string;
  name: string;
  quantity?: number;
  notes?: string;
  completed?: boolean;
};

/**
 * ShoppingList renders collaborative lists. Real-time updates will be wired via
 * WebSockets; for now we expose callbacks for integration tests and mocks.
 */
export function ShoppingList({
  title,
  items
}: {
  title: string;
  items: ShoppingListItem[];
}) {
  return (
    <section aria-label={`Shopping list ${title}`} className="space-y-4">
      <h2 className="text-xl font-semibold text-brand-slate">{title}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
            <input type="checkbox" checked={item.completed} readOnly aria-label={`Mark ${item.name} complete`} />
            <div>
              <p className="text-sm font-medium text-slate-700">{item.name}</p>
              {item.notes && <p className="text-xs text-slate-500">{item.notes}</p>}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
