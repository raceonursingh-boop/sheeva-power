import Navbar from "./components/navbar/Navbar";
import LandingHero from "./components/home/LandingHero";

import Drop001 from "./components/Drop001";
import WhySheeva from "./components/WhySheeva";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-white">
      <LoadingScreen />

      <Navbar />

      <LandingHero />

  

      <section id="drop001">
        <Drop001 />
      </section>

      <section id="about">
        <WhySheeva />
      </section>

      <section id="philosophy">
        <Philosophy />
      </section>

      <footer id="footer">
        <Footer />
      </footer>
    </main>
  );
}