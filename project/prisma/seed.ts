
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const tenant = await prisma.tenant.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Default Tenant',
            description: 'This is the default tenant created by seeder',
        },
    });
    console.log({ tenant });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
