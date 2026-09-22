import type React from 'react';
import { ActionGrid } from '@site/src/components/home/sections/ActionGrid';
import { CTASection } from '@site/src/components/home/sections/CTASection';
import { FAQSection } from '@site/src/components/home/sections/FAQSection';
import { Hero } from '@site/src/components/home/sections/Hero';
import { HowItWorks } from '@site/src/components/home/sections/HowItWorks';
import { RequestShowcase } from '@site/src/components/home/sections/RequestShowcase';

export default function Home(): React.JSX.Element {
  return (
    <>
      <Hero />
      <ActionGrid />
      <HowItWorks />
      <RequestShowcase />
      <FAQSection />
      <CTASection />
    </>
  );
}
