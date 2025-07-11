import FooterSection from "@/components/landing/Footer";
import HotelSection from "@/components/landing/Hotels";
import NewsEventsSection from "@/components/landing/Insights";
import PopularToursSection from "@/components/landing/Populartour";
import HeroSection from "@/components/landing/Hero2";
import Navbar from "@/components/Navbar2";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <HeroSection />
        <PopularToursSection />
        <HotelSection />
        <NewsEventsSection />
        <FooterSection />
      </main>
    </div>
  );
}
