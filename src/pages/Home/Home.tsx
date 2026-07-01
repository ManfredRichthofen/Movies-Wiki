import type React from 'react';
import { CTASection } from '@site/src/components/home/sections/CTASection';
import { FeaturesGrid } from '@site/src/components/home/sections/FeaturesGrid';
import { Hero } from '@site/src/components/home/sections/Hero';
import { JellyfinShowcase } from '@site/src/components/home/sections/JellyfinShowcase';
import { RevancedShowcase } from '@site/src/components/home/sections/RevancedShowcase';
import { TrustPills } from '@site/src/components/home/sections/TrustPills';

export default function Home(): React.JSX.Element {
  return (
    <>
      <Hero />
      <TrustPills />
      <FeaturesGrid />
      <JellyfinShowcase />
      <RevancedShowcase />
      <CTASection />
    </>
  );
}
