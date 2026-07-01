import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';

type ColorModeToggleButtonProps = {
  className?: string;
};

export function ColorModeToggleButton({ className }: ColorModeToggleButtonProps) {
  const { disableSwitch, respectPrefersColorScheme } = useThemeConfig().colorMode;
  const { colorModeChoice, setColorMode } = useColorMode();

  if (disableSwitch) {
    return null;
  }

  return (
    <ColorModeToggle
      className={className}
      respectPrefersColorScheme={respectPrefersColorScheme}
      value={colorModeChoice}
      onChange={setColorMode}
    />
  );
}
