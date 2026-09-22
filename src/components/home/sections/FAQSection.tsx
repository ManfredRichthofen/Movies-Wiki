const faqs = [
  {
    q: 'What does it cost?',
    a: 'Nothing. There is no subscription, no rental fee, and no ads anywhere.',
  },
  {
    q: 'Can I watch on the TV?',
    a: 'Yes — there are apps for Fire TV, Roku, Google TV and LG, or you can cast from your phone.',
  },
  {
    q: 'Can two people watch at once?',
    a: 'Yes. Everyone gets their own login, their own watch history, and their own continue-watching row.',
  },
  {
    q: 'Something is not working. What now?',
    a: 'Try the browser player first — if that works, the app just needs reinstalling. Otherwise message whoever invited you.',
  },
];

export function FAQSection() {
  return (
    <section className='px-6 pb-24'>
      <div className='max-w-[820px] mx-auto'>
        <h2 className='font-heading font-extrabold text-[clamp(1.5rem,3vw,2.125rem)] leading-tight tracking-tight text-[#e6e2f0] mb-7 text-center'>
          Good to know
        </h2>
        <div className='flex flex-col gap-px rounded-2xl overflow-hidden border border-white/8'>
          {faqs.map((faq) => (
            <div key={faq.q} className='p-6 bg-base-200'>
              <div className='font-heading font-bold text-[15.5px] text-[#e6e2f0] mb-1.5'>{faq.q}</div>
              <div className='text-sm leading-relaxed text-[#9b96a9]'>{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
