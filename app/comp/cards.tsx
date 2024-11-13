
'use client';
import { useState, useEffect } from 'react';

// Import CardData from submitData
import { CardData, getCardsFromVercel } from '@/app/comp/submitData';

export interface Card {
  id: string;
  question: string;
  answer: string;
  understanding: number; 
}

// Custom hook to fetch cards
export function useCards() {
  const [cards, setCards] = useState<Card[] | null>(null);

  useEffect(() => {
    async function fetchCards() {
      // Fetch cards data from the server
      const cardsData = await getCardsFromVercel();

      
      const cards = cardsData.map((cardData: CardData) => ({
        id: cardData.Id.toString(),  // Convert to string for consistency in the frontend
        question: cardData.Question,
        answer: cardData.Answer,
        understanding: 0.5, // Initialize understanding with a default value
      }));

      setCards(cards);
    }
    fetchCards();
  }, []);

  return cards;
}