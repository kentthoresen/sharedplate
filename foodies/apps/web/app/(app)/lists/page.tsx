import Link from 'next/link';
import { ShoppingList } from '@/components/shopping-list';

/**
 * Lists overview displays owned lists and CTA to create new ones.
 */
export default function ListsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-brand-slate">Shopping Lists</h1>
        <Link className="rounded-full bg-brand-orange px-4 py-2 text-sm text-white" href="/lists/new">
          New list
        </Link>
      </div>
      <ShoppingList
        title="Weekend Market"
        items={[
          { id: '1', name: 'Heirloom tomatoes', notes: 'Look for Roma' },
          { id: '2', name: 'Basil', completed: true }
        ]}
      />
    </div>
  );
}
