
"use client";
import { useState } from "react";
import { useUnderstanding } from '@/app/comp/UnderstandingContext';

const AddCard: React.FC = () => {
  const { addCard } = useUnderstanding(); 
  const [prompt, setPrompt] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleAddCard = () => {
    if (!prompt || !answer) {
      alert("Please fill in both prompt and answer."); 
      return;
    }
    
    const newCard = {
      id: Date.now().toString(), 
      question: prompt, 
      answer,
    };
    addCard(newCard); 
    setPrompt(""); 
    setAnswer(""); 
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