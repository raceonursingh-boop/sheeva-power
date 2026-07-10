export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#111] px-8">
      <div>
        <h2 className="text-2xl font-bold">
          Admin Dashboard
        </h2>

        <p className="text-sm text-gray-400">
          Welcome back.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold">
          Admin
        </div>
      </div>
    </header>
  );
}