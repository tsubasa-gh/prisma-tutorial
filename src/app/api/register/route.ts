import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(req: NextRequest) {
    
    try {
        const { name, email, password } = await req.json(); // リクエストの内容をJSON形式に変換して取得。awaitは取得を待つ
        console.log({ name, email, password }); // データを確認
        if (!name || !email || !password) {
            return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
          }

        const user = await prisma.user.create({
            data: {
                name, email, password,
            }
        });
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: 'ユーザー作成失敗' }, { status: 400 });
    }
}