// src/app/summary/page.tsx
'use client';

import { useState } from 'react';
import { Card, useCards } from '@/app/comp/cards';
import { removeCard } from '../comp/submitData';
import { useUnderstanding } from '@/app/comp/UnderstandingContext';

function getColorForUnderstanding(percentage: number) {
  if (percentage < 25) {
    return 'rgb(235, 93, 89)'; // Red for low understanding
  } else if (percentage < 50) {
    return 'rgb(235, 198, 89)'; // Yellow for medium understanding
  } else {
    return 'rgb(153, 235, 89)'; // Green for high understanding
  }
}

function CardItem({ card, understandingPercentage, onRemove }: { card: Card; understandingPercentage: number; onRemove: () => void }) {
  return (
    <div className="flex mx-2 py-3 items-center border-b border-gray-300">
      <div
        style={{ backgroundColor: getColorForUnderstanding(understandingPercentage) }}
        className="p-2 rounded-lg mr-2 w-16 text-center font-bold text-black"
      >
        {understandingPercentage}%
      </div>
      <div className="flex-grow text-sm md:text-base">
        {card.question}
      </div>
      <button onClick={onRemove} className="text-red-500 text-sm md:text-base">Remove</button>
    </div>
  );
}

export default function Summary() {
  const { understandingCache } = useUnderstanding();
  const cards = useCards();
  const [removedCardIds, setRemovedCardIds] = useState<string[]>([]);

  if (cards == null) {
    return <div className="text-center py-4">Loading cards...</div>;
  }

  if (cards.length === 0) {
    return <div className="text-center py-4">No cards available. Please add some cards to see your summary!</div>;
  }

  function handleRemoveCard(id: string) {
    setRemovedCardIds((prev) => [...prev, id]);
    removeCard(id);
  }

  return (
    <div className="p-1">
      <h1 className="text-2xl font-bold text-center mb-4">Card Summary</h1>
      <div className="bg-grey shadow-md rounded-lg p-4">
        <div className="flex mb-1 border-b border-gray-300 pb-2">
          <span className="w-24 text-center font-semibold">Understood</span>
          <span className="flex mx-1 text-center font-semibold">Question</span>
        </div>
        {cards.map((card: Card) => {
          if (removedCardIds.includes(card.id)) {
            return null; // Skip removed cards
          }

          const understandingPercentage = Math.round((understandingCache[card.id] || 0) * 100);

          return (
            <CardItem key={card.id} card={card} understandingPercentage={understandingPercentage} onRemove={() => handleRemoveCard(card.id)} />
          );
        })}
      </div>
      <div className="mt-4 text-center text-white-600 text-m">
        <p>Clicking remove will remove from study selection and will not be replaced.</p>
      </div>
    </div>
  );
}