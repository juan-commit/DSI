
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const tables = await prisma.$queryRaw`SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%' AND name != '_prisma_migrations';`;
    console.log('Tables found in database:');
    console.table(tables);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
