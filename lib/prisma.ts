import { PrismaClient } from "@prisma/client";

// グローバルオブジェクトにPrismaクライアントをキャッシュするための型を定義
const globalForPrisma = global as unknown as  { prisma: PrismaClient};

// Prismaクライアントのインスタンスを作成または取得
export const prisma = 
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['query'],
    });

// 開発環境ではグローバルオブジェクトにPrismaクライアントをキャッシュする
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;