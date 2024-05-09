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
      role:'Admin'
    },
  });
  const user2 = await prisma.user.create({
    data: {
      name: 'Khalil',
      age: 25,
      email: 'khalil@gmail.com',
      password: hashPassword,
      role:'Employe'
    },
  });
}
// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
