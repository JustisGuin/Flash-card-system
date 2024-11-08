'use client'
import { useState, useEffect } from 'react'
import { CardData, getCardsFromDB } from '@/app/comp/cardServer'

export interface Card {
  id: string
  question: string
  answer: string
  understanding: number
}

export const useCards = () => {
  const [cards, setCards] = useState<Card[] | null>(null)

  useEffect(() => {
    async function fetchCards() {
      const cardsData = await getCardsFromDB()

      const cards = cardsData.map((cardData: CardData) => ({
        id: cardData.Id,
        question: cardData.Question,
        answer: cardData.Answer,
        understanding: cardData.Understanding,
      }))
      setCards(cards)
    }
    fetchCards()
  }, [])

  return cards
}