// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash('mariem', salt);
  const user = await prisma.user.create({
    data: {
      name: 'mariem',
      age: 16,
      email: 'marsfec@gmail.com',
      password: hashPassword,
      role: 'Admin',
    },
  });
  const user2 = await prisma.user.create({
    data: {
      name: 'Khalil',
      age: 25,
      email: 'khalil@gmail.com',
      password: hashPassword,
      role: 'Employe',
    },
  });

  // execute the main function
const type=["offre d'emploi","offre de stage"]
  for (let i = 0; i < 10; i++) {
    await prisma.offer.create({
      data: {
        title: 'Noteworthy technology acquisitions 2021',
        description:
          'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        type: type[Math.floor(Math.random() * 2)] 
      },
    });
  }
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });