export type ThemeMode = 'dark' | 'light';

declare global {
  interface Window {
    StarlightThemeProvider?: {
      updatePickers: (theme?: string) => void;
    };
  }
}

const MARKETING_KEY = 'theme';
const STARLIGHT_KEY = 'starlight-theme';

export function readStoredTheme(): ThemeMode | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(MARKETING_KEY) ?? localStorage.getItem(STARLIGHT_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return null;
}

export function getPreferredDark(defaultDark = true): boolean {
  const stored = readStoredTheme();
  if (stored === 'light') return false;
  if (stored === 'dark') return true;
  return defaultDark;
}

export function applyTheme(dark: boolean): void {
  const mode: ThemeMode = dark ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.dataset.theme = mode;
  localStorage.setItem(MARKETING_KEY, mode);
  localStorage.setItem(STARLIGHT_KEY, mode);
  window.StarlightThemeProvider?.updatePickers(mode);
}
