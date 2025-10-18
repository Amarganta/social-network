// src/components/organisms/PostCreator/PostCreator.tsx
"use client";
import { useState } from "react";
import { Button } from "@/components/atoms/Button/Button";

interface PostCreatorProps {
  onAddPost: (content: string) => void;
}

export const PostCreator: React.FC<PostCreatorProps> = ({ onAddPost }) => {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (!content.trim()) return;
    onAddPost(content);
    setContent("");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
      <textarea
        placeholder="¿Qué libro terminaste de leer?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border border-gray-200 rounded-md p-2 resize-none focus:outline-none focus:ring-1 focus:ring-black text-sm"
      />
      <Button className="mt-2" onClick={handlePost}>
        Publicar
      </Button>
    </div>
  );
};
