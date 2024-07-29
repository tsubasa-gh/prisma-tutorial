import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const { name, email, password } = await req.json(); // jsonメソッドでリクエストボディのJSONデータを解析し、JSオブジェクトに変換

        const user = await prisma.user.create({
            data: {
                name, email, password,
            }
        });
        return NextResponse.json(user); // jsonメソッドでuserをJSON形式に変換し、レスポンスのボディに設定。また、レスポンスの Content-Type ヘッダーを application/json に設定。これによりクライアントはレスポンスが JSON データであることを認識。
    } catch (error) {
        return NextResponse.json({ error: 'ユーザー作成失敗' }, { status: 400 });
    }
}