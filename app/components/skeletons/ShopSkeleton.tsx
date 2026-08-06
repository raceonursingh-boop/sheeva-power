import ProductCardSkeleton from "./ProductCardSkeleton";

export default function ShopSkeleton() {
  return (
    <main className="min-h-screen bg-[#050505] pt-36 pb-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20">

          <div className="mx-auto mb-6 h-4 w-32 animate-pulse rounded bg-[#181818]" />

          <div className="mx-auto h-20 w-[500px] max-w-full animate-pulse rounded bg-[#111]" />

        </div>

        <div className="grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}

        </div>

      </div>
    </main>
  );
}