export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse">

      <div className="aspect-[4/5] rounded-3xl bg-[#111]" />

      <div className="mt-8 h-8 w-3/4 rounded bg-[#181818]" />

      <div className="mt-4 h-4 w-1/2 rounded bg-[#181818]" />

      <div className="mt-6 h-6 w-24 rounded bg-[#222]" />

    </div>
  );
}