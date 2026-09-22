import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { buttonClassName } from '@/components/ui/button-variants';
import { cn } from '@/components/ui/cn';
import { applyTheme, getPreferredDark } from '@/utils/theme';

type ColorModeToggleButtonProps = {
  className?: string;
};

export function ColorModeToggleButton({ className }: ColorModeToggleButtonProps) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const preferred = getPreferredDark(true);
    setDark(preferred);
    applyTheme(preferred);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    applyTheme(next);
  }

  return (
    <button
      type='button'
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(buttonClassName('ghost', 'sm'), className)}
      onClick={toggle}
    >
      {dark ? <Sun className='size-4' /> : <Moon className='size-4' />}
    </button>
  );
}
