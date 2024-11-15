
'use server'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export interface CardData {
  Id: number;
  Question: string;
  Answer: string;
}


export async function getCardsFromVercel() {
  const questions = await prisma.question.findMany()  


  return questions.map((question) => ({
    Id: question.id,           
    Question: question.prompt,  
    Answer: question.answer,   
  }))
}


export async function addCard(formState: string, form: FormData) {
  const response = await prisma.question.create({
    data: {
      prompt: form.get("question") as string,
      answer: form.get("answer") as string,
      understanding: 0, 
    },
    select: {
      id: true,  
    },
  })

  return response.id
}


export async function removeCard(id: string) {
  await prisma.question.delete({
    where: {
      id: parseInt(id),  
    },
  })
}


export async function updateCardEvaluator(id: string, understanding: number) {
  await prisma.question.update({
    where: {
      id: parseInt(id),  
    },
    data: {
      understanding: understanding,
    },
  })
}