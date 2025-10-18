// src/components/organisms/Feed/Feed.tsx
"use client";
import { useState } from "react";
import { mockPosts } from "@/lib/mockData";
import { PostCard } from "@/components/molecules/PostCard/PostCard";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuid } from "uuid";
import { PostCreator } from "../PostCreator/PostCreator";
import { Post } from "@/types/types";

export const Feed = () => {
  const [posts, setPosts] = useState(mockPosts);

  const handleAddPost = (content: string) => {
    const newPost = {
      id: uuid(),
      user: { name: "Tú" },
      content,
      comments: [],
    };
    const [posts, setPosts] = useState<Post[]>(mockPosts);
  };

  return (
    <section className="flex flex-col gap-4 w-full max-w-md mx-auto mt-6 px-4">
      <PostCreator onAddPost={handleAddPost} />

      <AnimatePresence>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </AnimatePresence>
    </section>
  );
};
