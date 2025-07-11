import FooterSection from "@/components/landing/Footer";
import HeroSection from "@/components/landing/Hero";
import HotelSection from "@/components/landing/Hotels";
import NewsEventsSection from "@/components/landing/Insights";
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
        <NewsEventsSection />
        <FooterSection />
        </main>
    </div>
  );
}
