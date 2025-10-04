'use client';

import { useState } from 'react';
import clsx from 'clsx';

export type Reaction = 'loved' | 'cooked' | 'try' | 'inspired';

const reactionMeta: Record<Reaction, { label: string; emoji: string }> = {
  loved: { label: 'Loved', emoji: '❤️' },
  cooked: { label: 'Cooked', emoji: '🍳' },
  try: { label: 'Want to try', emoji: '⭐' },
  inspired: { label: 'Inspired', emoji: '✨' }
};

/**
 * ReactionBar demonstrates UX intent. Actual persistence happens via API hooks.
 */
export function ReactionBar({ onSelect }: { onSelect?: (reaction: Reaction) => void }) {
  const [active, setActive] = useState<Reaction | null>(null);

  return (
    <div className="flex gap-2">
      {Object.entries(reactionMeta).map(([key, meta]) => {
        const reaction = key as Reaction;
        const selected = active === reaction;
        return (
          <button
            key={reaction}
            onClick={() => {
              setActive(reaction);
              onSelect?.(reaction);
            }}
            className={clsx(
              'flex items-center gap-1 rounded-full border px-3 py-1 text-sm transition',
              selected
                ? 'border-brand-orange bg-brand-orange/10 text-brand-orange'
                : 'border-slate-200 text-slate-600'
            )}
            aria-pressed={selected}
          >
            <span aria-hidden>{meta.emoji}</span>
            {meta.label}
          </button>
        );
      })}
    </div>
  );
}
