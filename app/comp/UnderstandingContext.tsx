
'use client'
import React, { createContext, useContext, useState } from 'react';


interface Card {
  id: string; 
  question: string; 
  answer: string;
}


interface UnderstandingContextType {
  understandingCache: { [id: string]: number };
  updateUnderstanding: (cardId: string, newUnderstanding: number) => void;
  cards: Card[];
  addCard: (card: Card) => void;
}

const UnderstandingContext = createContext<UnderstandingContextType | undefined>(undefined);

export const UnderstandingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [understandingCache, setUnderstandingCache] = useState<{ [id: string]: number }>({});
  const [cards, setCards] = useState<Card[]>([]); 

  const updateUnderstanding = (cardId: string, newUnderstanding: number) => {
    setUnderstandingCache((prevCache) => ({
      ...prevCache,
      [cardId]: newUnderstanding,
    }));
  };

  const addCard = (card: Card) => {
    setCards((prevCards) => [...prevCards, card]);
  };

  return (
    <UnderstandingContext.Provider value={{ understandingCache, updateUnderstanding, cards, addCard }}>
      {children}
    </UnderstandingContext.Provider>
  );
};

export const useUnderstanding = () => {
  const context = useContext(UnderstandingContext);
  if (!context) {
    throw new Error('useUnderstanding must be used within an UnderstandingProvider');
  }
  return context;
};