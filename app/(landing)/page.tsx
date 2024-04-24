import { AceternityAuroraBackground } from "@/components/aceternity/auto-background";
import { AceternityLamp } from "@/components/aceternity/lamp";
import { AceternityTextRevealCard } from "@/components/aceternity/text-reveal-card";
import { LandingContent } from "@/components/landing-content";
import { LandingHero } from "@/components/landing-hero";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      {/* <LandingHero /> */}
      {/* <LandingContent /> */}
      <AceternityAuroraBackground />
      <AceternityLamp />
      <AceternityTextRevealCard />
    </div>
  );
};

export default LandingPage;
