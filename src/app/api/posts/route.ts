import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const posts = await prisma.post.findMany({
            include: { author: true }, // post レコードに関連する author レコードも一緒に取得
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json(posts);
    } catch(error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json({ error: "Error fetching posts:" }, { status: 500 });
    }
    }