import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <Footer />
    </main>
  );
}