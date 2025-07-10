import HeroSection from "@/components/landing/Hero";
import HotelSection from "@/components/landing/Hotels";
import PopularToursSection from "@/components/landing/Populartour";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <HeroSection />
        <PopularToursSection />
        <HotelSection />
        </main>
    </div>
  );
}
