import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import FeaturedDrop from "./components/FeaturedDrop";
import FeaturedCollections from "./components/FeaturedCollections";
import BrandStats from "./components/BrandStats";
import Philosophy from "./components/Philosophy";
import WhySheeva from "./components/WhySheeva";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedDrop />
      <FeaturedCollections />
      <BrandStats />
      <Philosophy />
      <WhySheeva />
      <Footer />
    </>
  );
}