import { Post } from "@/types/types";
import { v4 as uuid } from "uuid";

export const mockPosts: Post[] = [
  {
    id: uuid(),
    user: { name: "Amaranta Sofía", avatar: "/avatars/amaranta.png" },
    content: "Acabo de terminar 'Babel' de R.F. Kuang 📚",
    comments: [
      {
        id: uuid(),
        user: { name: "Yeimmy" },
        text: "¡Es una joya! Me encantó la parte histórica ❤️",
      },
    ],
  },
];
