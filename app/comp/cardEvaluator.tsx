// src/app/comp/CardEvaluator.tsx
'use client';
import React, { useState } from "react";
import { Card } from "@/app/comp/cards";

export enum DifficultyRating {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
}

interface CardEvaluatorProps {
  card: Card;
  onUpdate: (cardId: string, newUnderstanding: number) => void; // Function to update understanding
  onNextQuestion: () => void; // Function to move to the next question
  understandingCache: { [id: string]: number }; // Understanding cache
}

const CardEvaluator: React.FC<CardEvaluatorProps> = ({ card, onUpdate, onNextQuestion, understandingCache }) => {
  const [understanding, setUnderstanding] = useState(understandingCache[card.id] || 0);

  const handleRating = (rating: DifficultyRating) => {
    const newUnderstanding = rating; // Assuming the rating directly translates to understanding
    setUnderstanding(newUnderstanding);
    onUpdate(card.id, newUnderstanding); // Call the onUpdate function
    onNextQuestion(); // Move to the next question
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="mb-2">Current Understanding: {understanding}</div>
      <div className="flex flex-row">
        <button onClick={() => handleRating(DifficultyRating.EASY)} className="bg-green-500 text-white rounded-lg p-2 mx-2 ">
          Easy
        </button>
        <button onClick={() => handleRating(DifficultyRating.MEDIUM)} className="bg-yellow-500 text-white rounded-lg p-2 mx-2">
          Medium
        </button>
        <button onClick={() => handleRating(DifficultyRating.HARD)} className="bg-red-500 text-white rounded-lg p-2 mx-2">
          Hard
        </button>
      </div>
    </div>
  );
};

export default CardEvaluator;