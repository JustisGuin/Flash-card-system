// submitData.tsx
'use server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Define the CardData interface to use in the client-side
export interface CardData {
  Id: number;
  Question: string;
  Answer: string;
}

// Fetch questions from the database
export async function getCardsFromVercel() {
  const questions = await prisma.question.findMany()  // Use `question` as the model name

  // Return questions with the defined structure
  return questions.map((question) => ({
    Id: question.id,           // Prisma field `id` -> returned as `Id` in response
    Question: question.prompt,  // Prisma field `prompt` -> returned as `Question`
    Answer: question.answer,    // Prisma field `answer` -> returned as `Answer`
  }))
}

// Function to add a new question
export async function addCard(formState: string, form: FormData) {
  const response = await prisma.question.create({
    data: {
      prompt: form.get("question") as string,
      answer: form.get("answer") as string,
      understanding: 0, // default understanding value, or you can update this based on your form
    },
    select: {
      id: true,  // Adjust this to reflect the fields you want to return
    },
  })

  return response.id
}

// Function to remove a question by id
export async function removeCard(id: string) {
  await prisma.question.delete({
    where: {
      id: parseInt(id),  // Ensure you're passing an integer, as `id` is of type `Int` in your schema
    },
  })
}

// Function to update the understanding of a question
export async function updateCardEvaluator(id: string, understanding: number) {
  await prisma.question.update({
    where: {
      id: parseInt(id),  // Again, ensure you're passing an integer
    },
    data: {
      understanding: understanding,
    },
  })
}
