import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import Drop001 from "./components/Drop001";
import Footer from "./components/Footer";
import WhySheeva from "./components/WhySheeva";
import Philosophy from "./components/Philosophy";
export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden text-white">
      <Navbar />

      <Hero />

      <Drop001 />
<WhySheeva />
<Philosophy />
      <Footer />
    </main>
  );
}