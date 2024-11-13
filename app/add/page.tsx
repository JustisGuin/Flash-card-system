// src/app/comp/AddCard.tsx
"use client";
import { useState } from "react";
import { useUnderstanding } from '@/app/comp/UnderstandingContext';

const AddCard: React.FC = () => {
  const { addCard } = useUnderstanding(); // Get addCard function from context
  const [prompt, setPrompt] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleAddCard = () => {
    if (!prompt || !answer) {
      alert("Please fill in both prompt and answer."); // Simple validation
      return;
    }
    
    const newCard = {
      id: Date.now().toString(), // Use toString for consistency
      question: prompt, // Assuming you want to show prompt as question
      answer,
    };
    addCard(newCard); // Add card to context
    setPrompt(""); // Clear input after adding
    setAnswer(""); // Clear input after adding
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add a New Card</h2>
      <input
        type="text"
        placeholder="Enter prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2 text-black bg-white"
      />
      <input
        type="text"
        placeholder="Enter answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4 text-black bg-white"
      />
      <button onClick={handleAddCard} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
        Add Card
      </button>
    </div>
  );
}

export default AddCard;