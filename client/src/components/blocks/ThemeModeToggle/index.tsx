import { Sun } from 'lucide-react';

import { Switch } from '@/components/ui/switch';
import { Moon } from 'lucide-react';
import { useThemeModeToggle } from './hooks/useThemeModeToggle';

export function ThemeModeToggle() {
  const themeData = useThemeModeToggle();

  if (!themeData) {
    return null;
  }

  const { theme, toggleTheme } = themeData;

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4" />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        aria-label="Toggle dark mode"
      />
      <Moon className="h-4 w-4" />
    </div>
  );
}
