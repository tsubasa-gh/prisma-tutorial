'use client'

import  React, { useState } from "react"
import { useRouter } from "next/navigation";

const CreatePost = () => {
    const [content, setContent] = useState('');
    const router = useRouter();
    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 仮のauthorIdを使用（実際には認証機能が必要）
        const authorId = 1;

        const response = await fetch('/api/create-post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content, authorId })
        });

        if (response.ok) {
            router.push('/');
        } else {
            console.log('登録失敗');
        }
    };


    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl">投稿</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input type="text" placeholder="今の気持ちは？" value={content} onChange={(e) => setContent(e.target.value)}
                    className="p-2 border border-gray-300 rounded" />
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">投稿</button>
            </form>
        </div>
    );
}

export default CreatePost;