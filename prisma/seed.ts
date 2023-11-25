// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const post1 = await prisma.activity.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Prisma Adds Support for MongoDB',
    },
  });

  const post2 = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: "Su Nandar Linn",
      phone: "+65123456",
    },
  });

  console.log({ post1, post2 });
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
