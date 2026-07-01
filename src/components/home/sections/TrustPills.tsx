import { Ban, Gift, ListPlus, MonitorSmartphone } from 'lucide-react';
import { Badge } from '@site/src/components/ui/badge';

const pills = [
  { icon: Gift, label: 'Always free' },
  { icon: ListPlus, label: 'Request anything' },
  { icon: Ban, label: 'Zero ads' },
  { icon: MonitorSmartphone, label: 'Any device' },
];

export function TrustPills() {
  return (
    <section className='px-6 pb-10'>
      <div className='max-w-[900px] mx-auto flex flex-wrap gap-3 justify-center'>
        {pills.map((pill) => (
          <Badge key={pill.label} variant='tag'>
            <pill.icon className='size-4 text-primary' />
            {pill.label}
          </Badge>
        ))}
      </div>
    </section>
  );
}
