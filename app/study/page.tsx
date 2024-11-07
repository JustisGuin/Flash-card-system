"use client";
import { useState } from "react";

interface Card {
  id: number;
  prompt: string;
  answer: string;
  understanding: string; // Assuming understanding is a string
}

interface AnswerRevealSectionProps {
  isAnswerRevealed: boolean;
  answerText: string;
}

function AnswerRevealSection({ isAnswerRevealed, answerText }: AnswerRevealSectionProps) {
  if (isAnswerRevealed) {
    return (
      <div>
        <h1>{answerText}</h1>
        <p>Rate the question difficulty:</p>
        <div className="flex content-center">
          <button className="standard-button w-56 h-20 border-easy inline-flex">
            Easy
          </button>
          <button className="standard-button w-56 h-20 border-medium inline-flex">
            Medium
          </button>
          <button className="standard-button w-56 h-20 border-hard inline-flex">
            Hard
          </button>
        </div>
      </div>
    );
  }

  return (
    <button className="standard-button">
      Reveal
    </button>
  );
}

interface StudyProps {
  studyCards?: Card[]; // Make it optional
}

export default function Study({ studyCards = [] }: StudyProps) { // Default to an empty array
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  if (studyCards.length == 0) {
    return (
      <div>
        <p>Cards are loading, please wait.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>What is the answer?</h1>
      {studyCards.map((card) => (
        <AnswerRevealSection key={card.id} isAnswerRevealed={isAnswerRevealed} answerText={card.answer} />
      ))}
      <button onClick={() => setIsAnswerRevealed(!isAnswerRevealed)}>
        {isAnswerRevealed ? "Hide Answers" : "Reveal Answers"}
      </button>
    </div>
  );
}