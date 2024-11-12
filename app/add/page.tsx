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

const AddCard: React.FC<AddCardProps> = ({ onAddCard }) => {
  const [prompt, setPrompt] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");

  const handleAddCard = () => {
    if (!prompt || !answer) {
      alert("Please fill in both prompt and answer."); // Simple validation
      return;
    }
    
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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add a New Card</h2>
      <input
        type="text"
        placeholder="Enter prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2 text-black bg-white" // Ensure text is black and background is white
      />
      <input
        type="text"
        placeholder="Enter answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4 text-black bg-white" // Ensure text is black and background is white
      />
      <button onClick={handleAddCard} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
        Add Card
      </button>
    </div>
  )
}

// Main Page Component
export default function Page() {
  const [cards, setCards] = useState<Card[]>([]); // State to hold the list of cards

  const handleAddCard = (newCard: Card) => {
    setCards((prevCards) => [...prevCards, newCard]); // Add the new card to the state
  };

  return (
    <div>
      <AddCard onAddCard={handleAddCard} />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Study Cards</h2>
        {cards.length === 0 ? (
          <p>No cards available. Please add some cards!</p>
        ) : (
          <ul>
            {cards.map((card) => (
              <li key={card.id} className="border p-2 mb-2 rounded">
                <strong>Prompt:</strong> {card.prompt} <br />
                <strong>Answer:</strong> {card.answer}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}