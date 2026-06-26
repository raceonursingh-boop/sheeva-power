interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="group relative overflow-hidden rounded-full border border-red-600 bg-red-600 px-10 py-4 font-bold uppercase tracking-[0.35em] text-white transition-all duration-500 hover:scale-105 hover:border-red-500 hover:bg-red-700">
      <span className="relative z-10 flex items-center gap-3">
        {children}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </button>
  );
}