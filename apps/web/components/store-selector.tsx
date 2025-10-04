'use client';

import { useState } from 'react';

/**
 * StoreSelector lets users label a store visit. We store minimal state locally
 * and delegate persistence to API hooks.
 */
export function StoreSelector({ stores, onSelect }: { stores: string[]; onSelect?: (store: string) => void }) {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-slate-700" htmlFor="store">
        Remember this trip at
      </label>
      <select
        id="store"
        className="rounded-lg border border-slate-300 px-3 py-2"
        value={selected}
        onChange={(event) => {
          setSelected(event.target.value);
          onSelect?.(event.target.value);
        }}
      >
        <option value="">Select a store</option>
        {stores.map((store) => (
          <option key={store}>{store}</option>
        ))}
      </select>
    </div>
  );
}
