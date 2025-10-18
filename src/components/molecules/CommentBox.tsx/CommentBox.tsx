// src/components/molecules/CommentBox/CommentBox.tsx
"use client";
import { Comment } from "@/types/types";
import { motion, AnimatePresence } from "framer-motion";

interface CommentBoxProps {
  comments: Comment[];
}

export const CommentBox: React.FC<CommentBoxProps> = ({ comments }) => (
  <div className="mt-3 border-t border-gray-200 pt-2 space-y-2">
    <AnimatePresence>
      {comments.map((c) => (
        <motion.div
          key={c.id}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="text-sm text-gray-700"
        >
          <strong className="mr-1">{c.user.name}:</strong>
          <span>{c.text}</span>
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
);
