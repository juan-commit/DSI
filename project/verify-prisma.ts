
import { PrismaService } from './src/prisma/prisma.service';

async function main() {
    console.log('Instantiating PrismaService...');
    try {
        const prisma = new PrismaService();
        console.log('PrismaService instantiated.');
        await prisma.onModuleInit();
        console.log('PrismaService connected successfully.');
        await prisma.$disconnect();
    } catch (error) {
        console.error('Error verifying PrismaService:', error);
        process.exit(1);
    }
}

main();
