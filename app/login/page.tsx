"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "../lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();

  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111] p-10"
      >
        <h1 className="mb-8 text-center text-4xl font-black uppercase text-white">
          Admin Login
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-600"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-600"
          />

          {error && (
            <p className="text-sm text-red-500">
              {error}
            </p>
          )}

          <button
            disabled={loading}
            className="w-full rounded-full bg-red-600 py-4 font-bold uppercase tracking-widest text-white transition hover:bg-red-700 disabled:opacity-60"
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

        </div>
      </form>
    </main>
  );
}