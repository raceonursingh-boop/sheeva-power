import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import WhySheeva from "./components/WhySheeva";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Philosophy />
      <WhySheeva />
      <Footer />
    </>
  );
}