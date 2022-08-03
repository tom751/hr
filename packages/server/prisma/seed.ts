import { PrismaClient } from '@prisma/client'
import { hashPassword } from '@/utils/auth'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.upsert({
    where: { email: 'a@a.com' },
    update: {},
    create: {
      email: 'a@a.com',
      password: await hashPassword('password'),
      firstName: 'Bob',
      lastName: 'Smith',
    },
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
