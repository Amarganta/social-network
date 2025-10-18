import { Feed } from "../organisims/Feed/Feed";

export const FeedTemplate = () => (
  <main className="min-h-screen bg-gray-50">
    <header className="bg-white border-b border-gray-200 p-4 text-center font-bold text-lg">
      Bookish 📚
    </header>
    <Feed />
  </main>
);
