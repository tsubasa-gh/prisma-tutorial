'use client'

import React, { useState } from "react"
import { useRouter } from "next/navigation"

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // フォームのデフォルトの送信動作（フォームデータをサーバーに送信しページをリロード）を停止する必要アリ
    
        const response = await fetch('/api/register', { // '/api/register' エンドポイントにデータを送信
            method: 'POST',
            headers: { 'Content-Type': 'application/json', }, // リクエストの内容がJSON形式であることを示す
            body: JSON.stringify({ name, email, password}), // データをJSON文字列に変換
        });

        if (response.ok) {
            router.push('/');
        } else {
            console.log('登録失敗');
        };
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl">登録</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input type="text" placeholder="ユーザー名" value={name} onChange={(e) => setName(e.target.value)}
                    className="p-2 border border-gray-300 rounded"/>
                <input type="email" placeholder="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="p-2 border border-gray-300 rounded"/>
                <input type="password" placeholder="パスワード" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border border-gray-300 rounded"/>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">登録</button>
            </form>
        </div>
    );
};

export default Register;