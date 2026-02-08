import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Metrics } from "@/components/metrics/Metrics";
import { Brands } from "@/components/brands/Brands";
import { Showcase } from "@/components/showcase/Showcase";
import { AvatarOrbit } from "@/components/avatar-orbit/AvatarOrbit";
import { StrategyTimeline } from "@/components/strategy-timeline/StrategyTimeline";
import { Pricing } from "@/components/pricing/Pricing";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { FAQ } from "@/components/faq/FAQ";
import { CTA } from "@/components/cta/CTA";
import { Footer } from "@/components/footer/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Brands />
        <div id="work">
          <Showcase />
        </div>
        <div className="overflow-x-hidden hidden md:block">
          <AvatarOrbit />
        </div>
        <div id="steps">
          <StrategyTimeline />
        </div>
        <div id="plans">
          <Pricing />
        </div>
        <Testimonials />
        <div id="about">
          <FAQ />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
