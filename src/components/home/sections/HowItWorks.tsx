import { SectionLabel } from '@/components/ui/section-label';

const steps = [
  {
    title: 'Get your login',
    description: "Ask whoever invited you for a username and password. That's the only account you need.",
  },
  {
    title: 'Pick your screen',
    description: 'Watch in a browser right away, or install the app on your phone, TV, or laptop.',
  },
  {
    title: 'Press play',
    description: "Browse what's there, or request something new. Your spot is saved across every device.",
  },
];

export function HowItWorks() {
  return (
    <section id='steps' className='py-20 px-6 scroll-mt-20'>
      <div className='max-w-[1080px] mx-auto'>
        <div className='text-center max-w-[600px] mx-auto mb-11'>
          <SectionLabel>First time</SectionLabel>
          <h2 className='font-heading font-extrabold text-[clamp(1.875rem,4.5vw,3rem)] leading-tight tracking-tight text-[#f4f1fa] mb-4'>
            Watching in three steps
          </h2>
          <p className='text-base text-base-muted'>About five minutes, once.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {steps.map((step, index) => (
            <div key={step.title} className='p-7 rounded-[18px] surface-card'>
              <span className='flex size-9 items-center justify-center rounded-full border border-primary/30 bg-primary/11 font-heading font-bold text-[15px] text-primary mb-4.5'>
                {index + 1}
              </span>
              <h3 className='font-heading font-bold text-lg text-[#e6e2f0] mb-2'>{step.title}</h3>
              <p className='text-sm leading-relaxed text-[#9b96a9]'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
