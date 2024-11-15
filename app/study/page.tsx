// Study.tsx

'use client';

import { useEffect, useState } from 'react';
import { Card, useCards } from '@/app/comp/cards';
import CardEvaluator from '@/app/comp/cardEvaluator';
import { useUnderstanding } from '@/app/comp/UnderstandingContext';

interface UnderstandingCache {
  [cardId: string]: number;
}

function pickCard(cards: Card[] | null, understandingCache: UnderstandingCache) {
  if (cards == null || cards.length === 0) {
    return null;
  }

  const weightedCards = cards.map(card => ({
    card,
    understanding: understandingCache[card.id] || 0,
  }));

  weightedCards.sort((a, b) => a.understanding - b.understanding);

  const totalUnderstanding = weightedCards.reduce((sum, item) => sum + (100 - item.understanding), 0);
  const randomValue = Math.random() * totalUnderstanding;

  let cumulative = 0;
  for (const item of weightedCards) {
    cumulative += (100 - item.understanding);
    if (randomValue < cumulative) {
      return item.card;
    }
  }

  return null;
}

export default function Study() {
  const { understandingCache, updateUnderstanding } = useUnderstanding();
  const cards: Card[] | null = useCards();
  const [currentCard, setCurrentCard] = useState<Card | null>(null);

  useEffect(() => {
    const card = pickCard(cards, understandingCache);
    if (!card) {
      return;
    }
    setCurrentCard(card);
  }, [cards, understandingCache]);

  const handleNextQuestion = () => {
    const newCard = pickCard(cards, understandingCache);
    setCurrentCard(newCard);
  };

  function InteractableSection({ answer }: { answer: string }) {
    const [answerRevealed, setAnswerRevealed] = useState(false);

    function revealAnswer() {
      setAnswerRevealed(true);
    }

    if (answerRevealed) {
      return (
        <div className="flex flex-col items-center mt-4">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-4 w-full max-w-md">
            <h1 className="text-xl font-bold text-center text-black">{answer}</h1>
          </div>
          <p className="mt-4 text-lg">Rate the question difficulty:</p>
          {currentCard && (
            <CardEvaluator
              card={currentCard}
              onUpdate={updateUnderstanding}
              onNextQuestion={handleNextQuestion}
              understandingCache={understandingCache}
            />
          )}
        </div>
      );
    }

    return (
      <button onClick={revealAnswer} className="mt-4 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 transition duration-300 p-4 w-full max-w-md">
        Reveal
      </button>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-black min-h-screen">
      {currentCard ? (
        <>
          <h1 className="text-3xl font-bold text-center">{currentCard.question}</h1>
          <InteractableSection answer={currentCard.answer} />
        </>
      ) : (
        <p className="text-xl">No cards available.</p>
      )}
    </div>
  );
}
