'use client'
import { useState, useEffect } from 'react';


interface Card {
  question: string
  answer: string
  understanding: number
}


interface CardReportProps {
  card: Card
}


function CardReport({ card }: CardReportProps) {
  const percentUnderstood = Math.round(card.understanding * 100)

  return (
    <div className="flex">
      <div>
        {percentUnderstood}%
      </div>
      <div>
        {card.question}
      </div>
    </div>
  )
}

export default function Summary() {
  const [cards, setCards] = useState<Card[] | null>(null)

  useEffect(() => {
    async function fetchCards() {
      let cardsResponse = await fetch('/data.json')
      let cards: Card[] = await cardsResponse.json()
      
      setCards(cards);
    }
    fetchCards()
  }, [])

  if (cards === null) {
    return <div>Loading cards...</div>
  }

  if (cards.length === 0) {
    return <div>Add a card and start studying to see your summary!</div>
  }

  return (
    <div>
      <h1>Summary</h1>
      <div>
        {
          cards.map((card: Card) => (
            <CardReport card={card}/> // Added key prop
          ))
        }
      </div>
    </div>
  )
}