import { PrismaClient} from "@prisma/client"

const globalForPrisma = globalThis as unknown as {Prisma:PrismaClient}

export const db = globalForPrisma.Prisma || new PrismaClient()

if(process.env.NODE_ENV !== "production") globalForPrisma.Prisma = db