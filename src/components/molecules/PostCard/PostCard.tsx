// src/components/molecules/PostCard/PostCard.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { CommentBox } from "../CommentBox.tsx/CommentBox";
import { Post } from "@/types/types";

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow-sm rounded-lg p-4 border border-gray-100"
    >
      <p className="font-medium text-gray-900">{post.user.name}</p>
      <p className="text-gray-700 mt-2">{post.content}</p>

      <button
        onClick={() => setShowComments((prev) => !prev)}
        className="text-sm text-blue-500 mt-3 hover:underline"
      >
        {showComments ? "Ocultar comentarios" : "Ver comentarios"}
      </button>

      <motion.div
        initial={false}
        animate={{
          height: showComments ? "auto" : 0,
          opacity: showComments ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        {showComments && <CommentBox comments={post.comments} />}
      </motion.div>
    </motion.article>
  );
};
