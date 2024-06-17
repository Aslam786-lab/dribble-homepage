
import DribbbleHeader from "@/components/header/DribbbleHeader";
import HeroSection from "@/components/hero-section/HeroSection";
import InspiringDesigns  from "@/components/designs-section/InspiringDesigns";
import FooterCta from "@/components/footer-cta/FooterCta";

export default function Home() {
  return (
    <>
      <DribbbleHeader />
      <HeroSection />
      <InspiringDesigns />
      <FooterCta />
    </>
  );
}
