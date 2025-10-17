"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/atoms/Input/Input";
import { Button } from "@/components/atoms/Button/Button";

export const LoginForm = () => {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password || (mode === "register" && !name)) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, ingresa un email válido.");
      return;
    }

    if (mode === "register") {
      localStorage.setItem("user", JSON.stringify({ name, email }));
    } else {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        setError("No hay usuarios registrados. Crea una cuenta primero.");
        return;
      }
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.email !== email) {
        setError("El email no coincide con ningún usuario registrado.");
        return;
      }
    }

    router.push("/feed");
  };

  return (
    <div className="w-full max-w-xs bg-white p-5 rounded-md shadow-md">
      {/* Tabs */}
      <div className="flex mb-4 border-b border-gray-200">
        <button
          className={`flex-1 py-2 text-sm font-medium transition-colors ${
            mode === "login"
              ? "border-b-2 border-black text-black"
              : "text-gray-400"
          }`}
          onClick={() => setMode("login")}
        >
          Iniciar sesión
        </button>
        <button
          className={`flex-1 py-2 text-sm font-medium transition-colors ${
            mode === "register"
              ? "border-b-2 border-black text-black"
              : "text-gray-400"
          }`}
          onClick={() => setMode("register")}
        >
          Registrarse
        </button>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 overflow-hidden"
      >
        {/* 👇 Animación tipo slide down */}
        <AnimatePresence mode="wait">
          {mode === "register" && (
            <motion.div
              key="name-input"
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Input
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 👇 Animación del botón (fade + scale) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            <Button type="submit">
              {mode === "login" ? "Iniciar sesión" : "Registrarse"}
            </Button>
          </motion.div>
        </AnimatePresence>

        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        <div className="flex flex-col items-center mt-3">
          <p className="text-gray-400 mb-2">o</p>
          <Button variant="secondary">Continuar con Google</Button>
        </div>
      </form>
    </div>
  );
};
