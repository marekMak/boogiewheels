import Founders from "@/components/Founders";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Hero/Products";
import VideoSection from "@/components/VideoSection/VideoSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Products />
      <Founders />
      <VideoSection />
    </main>
  );
}
