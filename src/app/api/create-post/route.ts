import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const { content, authorId } = await req.json();

        const post = await prisma.post.create({
            data: { content, authorId }
        });

        return NextResponse.json(post);
    } catch(error) {
        console.error("投稿作成に失敗しました:", error);
        return NextResponse.json({ error: '投稿作成失敗' }, { status: 500 });
    }
}