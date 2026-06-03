import { BestSellers } from "@/components/sections/BestSellers";
import { BrandStory } from "@/components/sections/BrandStory";
import { Contact } from "@/components/sections/Contact";
import { FAQ } from "@/components/sections/FAQ";
import { FeaturedCollection } from "@/components/sections/FeaturedCollection";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Lookbook } from "@/components/sections/Lookbook";
import { MobileNav } from "@/components/sections/MobileNav";
import { Newsletter } from "@/components/sections/Newsletter";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Reviews } from "@/components/sections/Reviews";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStory />
        <FeaturedCollection />
        <ProductGrid />
        <BestSellers />
        <Lookbook />
        <Reviews />
        <FAQ />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
