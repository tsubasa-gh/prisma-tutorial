'use client';

import React, { useState, useEffect } from "react";
import  { Post } from '../../types/post';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/ api/posts');

      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.error('Failed to fetch posts');
      }
    };

    fetchPosts();
  },[]);
  
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold">投稿一覧</h1>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold">{post.content}</h2>
            <p className="text-gray-500">投稿者：{post.author.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
