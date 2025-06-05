'use client';

import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'dark' | 'light';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const initialState: ThemeProviderState = {
  theme: 'dark', // Default to dark as per requirement
  setTheme: () => null,
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'dark',
  storageKey = 'ui-theme',
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This effect runs once on mount to set the initial theme
    // from localStorage or default, and then sets mounted to true.
    let initialTheme = defaultTheme;
    try {
      const storedTheme = window.localStorage.getItem(storageKey) as Theme | null;
      if (storedTheme) {
        initialTheme = storedTheme;
      }
    } catch (e) {
      console.error('Error reading theme from localStorage during initial load', e);
    }
    setThemeState(initialTheme);
    setMounted(true);
  }, [defaultTheme, storageKey]);


  useEffect(() => {
    // This effect runs only when theme changes *after* initial mount.
    if (!mounted) return;

    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (e) {
      console.error('Error saving theme to localStorage', e);
    }
  }, [theme, mounted, storageKey]);


  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  if (!mounted) {
    // To prevent hydration mismatch, render nothing or a loader until mounted
    // For simplicity, we'll render children but the theme class won't be applied server-side
    // `suppressHydrationWarning` on <html> in layout.tsx is also important.
    return <>{children}</>;
  }

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
