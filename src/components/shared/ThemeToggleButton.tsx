'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeProvider';
import { Button } from '@/components/ui/button';

export function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="h-8 w-8 text-foreground/70 hover:text-primary"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
