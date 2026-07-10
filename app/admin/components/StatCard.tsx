type StatCardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
};

export default function StatCard({
  title,
  value,
  subtitle,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111] p-6 transition duration-300 hover:border-red-600/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.12)]">
      <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
        {title}
      </p>

      <h2 className="mt-4 text-4xl font-black text-white">
        {value}
      </h2>

      {subtitle && (
        <p className="mt-3 text-sm text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}