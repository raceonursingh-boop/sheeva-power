import { ShieldCheck, Truck, Shirt, Flame } from "lucide-react";

const features = [
  {
    icon: <Shirt size={42} />,
    title: "240–250 GSM",
    description:
      "Heavyweight premium cotton made for everyday wear and long-lasting comfort.",
  },
  {
    icon: <Flame size={42} />,
    title: "Street x Gym",
    description:
      "Designed to transition effortlessly from the gym to everyday streetwear.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Premium Quality",
    description:
      "Every piece is crafted with attention to detail, fit, and durability.",
  },
  {
    icon: <Truck size={42} />,
    title: "Fast Shipping",
    description:
      "Quick dispatch and reliable delivery across India.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#050505] py-28 px-6">

      <div className="mx-auto max-w-7xl">

        <p className="mb-3 text-center uppercase tracking-[0.5em] text-red-500">
          WHY SHEEVA POWER
        </p>

        <h2 className="mb-16 text-center text-5xl font-black uppercase text-white">
          Built Different
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-[#111] p-8 transition duration-300 hover:-translate-y-2 hover:border-red-600"
            >
              <div className="mb-6 text-red-500">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}