import { ShoppingList } from '@/components/shopping-list';
import { StoreSelector } from '@/components/store-selector';

/**
 * List detail page shows collaboration UI. Real-time updates will come later.
 */
export default function ListDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      <p className="text-xs uppercase tracking-wide text-brand-teal">List ID: {params.id}</p>
      <StoreSelector stores={['Neighborhood Co-op', 'Farmers Market']} />
      <ShoppingList
        title="Neighborhood Co-op"
        items={[
          { id: '1', name: 'Sourdough loaf' },
          { id: '2', name: 'Oat milk', completed: false }
        ]}
      />
    </div>
  );
}
