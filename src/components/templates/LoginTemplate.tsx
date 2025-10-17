// src/components/templates/LoginTemplate.tsx
import { LoginForm } from "@/components/molecules/LoginForm/LoginForm";

export const LoginTemplate = () => (
  <section className="flex flex-col items-center justify-center min-h-screen px-4">
    <h1 className="text-3xl font-bold mb-4">BOOKISH</h1>
    <p className="text-gray-600 mb-6 text-center">
      Compartí el último libro que leíste 📖
    </p>
    <LoginForm />
  </section>
);
