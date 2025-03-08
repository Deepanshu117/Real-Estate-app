import prisma from "./lib/prisma.js"; // Adjust path as needed

async function testPrisma() {
    try {
        const user = await prisma.user.findUnique({ where: { email: "john7@gmail.com" } });
        const posts = await prisma.post.findMany();
        console.log("User:", user);
        console.log("Posts:", posts);
    } catch (error) {
        console.error("Prisma test error:", error);
    } finally {
        await prisma.$disconnect();
    }
}

testPrisma();
