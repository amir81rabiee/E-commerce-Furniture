import Articles from "@/components/section/landing/articles";
import Banner from "@/components/section/landing/banner";
import BannerGrid from "@/components/section/landing/bannerGrid";
import HeroSection from "@/components/section/landing/heroSection";
import JoinNewsLetter from "@/components/section/landing/joinNewsLetter";
import NewArrivals from "@/components/section/landing/newArrivals";
import Values from "@/components/section/landing/values";

export default function Home() {
  return (
    <main className="">
    <HeroSection/>
    <BannerGrid/>
    <NewArrivals/>
    <Values/>
    <Banner/>
    <Articles/>
    <JoinNewsLetter/>
    </main>
  );
}
