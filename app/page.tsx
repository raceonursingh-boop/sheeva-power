import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import FeaturedDrop from "./components/FeaturedDrop";
import FeaturedCollections from "./components/FeaturedCollections";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <Navbar />

      <Hero />

      <Marquee />

      <FeaturedDrop />

      <FeaturedCollections />

      <Products />

      <WhyUs />

      <Footer />
    </main>
  );
}