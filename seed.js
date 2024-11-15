const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();


const dataFilePath = path.join(process.cwd(), 'public','data.json');
const rawData = fs.readFileSync(dataFilePath, 'utf8');
const data = JSON.parse(rawData);

async function seed() {
  try {
    for (const card of data) {
      await prisma.question.create({
        data: {
          prompt: card.prompt,
          answer: card.answer,
          understanding: parseInt(card.understanding),  

        },
      });
    }
    console.log('Seeding completed.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();