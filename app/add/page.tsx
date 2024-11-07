"use client";
import { useState } from "react";

interface Card {
  id: number;
  prompt: string;
  answer: string;
}

interface AddCardProps {
  onAddCard: (newCard: Card) => void;
}

export default function AddCard({ onAddCard }: AddCardProps) {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAddCard = () => {
    const newCard: Card = {
      id: Date.now(), // Simple ID generation based on timestamp
      prompt,
      answer,
    };
    onAddCard(newCard);
    setPrompt(""); // Clear input after adding
    setAnswer(""); // Clear input after adding
  };

  return (
    <div>
      <h2>Add a New Card</h2>
      <input
        type="text"
        placeholder="Enter prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleAddCard}>Add Card</button>
    </div>
  );
}