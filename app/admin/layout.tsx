import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { createClient } from "../lib/supabase/server";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Not logged in
  if (!user) {
    redirect("/login");
  }

  // Only YOUR email can access the admin panel
  if (user.email !== "raceonursingh@gmail.com") {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen bg-[#090909] text-white">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}