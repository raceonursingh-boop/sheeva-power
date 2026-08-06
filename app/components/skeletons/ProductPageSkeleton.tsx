export default function ProductPageSkeleton() {
  return (
    <main className="min-h-screen bg-black px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2">

        {/* Gallery */}

        <div className="animate-pulse">
          <div className="aspect-square rounded-3xl bg-[#111]" />

          <div className="mt-6 grid grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl bg-[#181818]"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}

        <div className="animate-pulse">

          <div className="h-4 w-24 rounded bg-[#181818]" />

          <div className="mt-6 h-14 w-3/4 rounded bg-[#111]" />

          <div className="mt-6 h-5 w-40 rounded bg-[#181818]" />

          <div className="mt-8 h-10 w-32 rounded bg-[#111]" />

          <div className="mt-10 space-y-3">
            <div className="h-4 rounded bg-[#181818]" />
            <div className="h-4 rounded bg-[#181818]" />
            <div className="h-4 w-4/5 rounded bg-[#181818]" />
          </div>

          {/* Size */}

          <div className="mt-10">
            <div className="mb-4 h-4 w-20 rounded bg-[#181818]" />

            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-12 w-12 rounded-xl bg-[#111]"
                />
              ))}
            </div>
          </div>

          {/* Quantity */}

          <div className="mt-10 h-14 w-40 rounded-xl bg-[#111]" />

          {/* Buttons */}

          <div className="mt-10 space-y-4">
            <div className="h-14 rounded-xl bg-[#181818]" />
            <div className="h-14 rounded-xl bg-[#111]" />
          </div>

          {/* Specs */}

          <div className="mt-12 rounded-3xl bg-[#0d0d0d] p-8">
            <div className="mb-8 h-6 w-40 rounded bg-[#181818]" />

            <div className="space-y-5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-5 rounded bg-[#181818]"
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}