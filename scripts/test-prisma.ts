import { PrismaClient } from '@prisma/client';
console.log("URL:", process.env.DATABASE_URL ? "Exists" : "Missing");
const prisma = new PrismaClient();
async function run() {
  try {
    await prisma.$connect();
    console.log("Successfully connected to the database!");
    const count = await prisma.user.count();
    console.log("User count:", count);
  } catch (e: any) {
    console.log("Connection Error:", e.name, e.message);
  } finally {
    await prisma.$disconnect();
  }
}
run();
