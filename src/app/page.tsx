import { Hero } from "@/components/sections/hero";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { Integrations } from "@/components/sections/integrations";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <HowItWorks />
      <Integrations />
      <Testimonials />
      <CTA />
    </>
  );
}
