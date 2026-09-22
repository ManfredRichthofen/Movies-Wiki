import type React from 'react';
import { ActionGrid } from '@/components/home/sections/ActionGrid';
import { CTASection } from '@/components/home/sections/CTASection';
import { FAQSection } from '@/components/home/sections/FAQSection';
import { Hero } from '@/components/home/sections/Hero';
import { HowItWorks } from '@/components/home/sections/HowItWorks';
import { RequestShowcase } from '@/components/home/sections/RequestShowcase';

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
