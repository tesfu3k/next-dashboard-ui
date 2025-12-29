const { PrismaClient } = require("./node_modules/@prisma/client");
const { PrismaPg } = require("./node_modules/@prisma/adapter-pg");
const { Pool } = require("pg");

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) });

async function main() {
  try {
    const rows = await prisma.result.findMany({
      include: {
        student: true,
        exam: {
          include: { lesson: { include: { teacher: true, class: true } } },
        },
        assignment: {
          include: { lesson: { include: { teacher: true, class: true } } },
        },
      },
    });
    console.log("results", rows.length);
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
