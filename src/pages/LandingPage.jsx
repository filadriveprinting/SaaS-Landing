import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { StickyCTA } from "../components/layout/StickyCTA";

import { ScrollProgress } from "../components/visual/ScrollProgress";

import { HeroSection } from "../components/sections/HeroSection";
import { TrustBar } from "../components/sections/TrustBar";
import { ProblemSection } from "../components/sections/ProblemSection";
import { AgitationSection } from "../components/sections/AgitationSection";
import { SolutionSection } from "../components/sections/SolutionSection";
import { BentoBenefits } from "../components/sections/BentoBenefits";
import { ProductExperience } from "../components/sections/ProductExperience";
import { HowItWorks } from "../components/sections/HowItWorks";
import { SocialProof } from "../components/sections/SocialProof";
import { OfferStack } from "../components/sections/OfferStack";
import { UrgencySection } from "../components/sections/UrgencySection";
import { FAQSection } from "../components/sections/FAQSection";
import { FinalCTA } from "../components/sections/FinalCTA";

export function LandingPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ProblemSection />
        <AgitationSection />
        <SolutionSection />
        <BentoBenefits />
        <ProductExperience />
        <HowItWorks />
        <SocialProof />
        <OfferStack />
        <UrgencySection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

export default LandingPage;
