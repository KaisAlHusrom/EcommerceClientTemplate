'use client';

import React, { createContext, useEffect, useState, useCallback } from 'react';

type Theme = 'dark' | 'light' | 'system';

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    resolvedTheme: 'dark' | 'light';
};

const initialState: ThemeProviderState = {
    theme: 'system',
    setTheme: () => null,
    resolvedTheme: 'light',
};

export const ThemeProviderContext =
    createContext<ThemeProviderState>(initialState);

export default function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = 'vite-ui-theme',
    ...props
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(defaultTheme);
    const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>(
        'light',
    );
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const storedTheme = localStorage.getItem(storageKey) as Theme | null;
        if (storedTheme) {
            setThemeState(storedTheme);
        }
    }, [storageKey]);

    const applyTheme = useCallback((theme: 'dark' | 'light') => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, []);

    const setTheme = useCallback(
        (newTheme: Theme) => {
            localStorage.setItem(storageKey, newTheme);
            setThemeState(newTheme);
        },
        [storageKey],
    );

    useEffect(() => {
        if (!isClient) return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = () => {
            const newResolvedTheme = mediaQuery.matches ? 'dark' : 'light';
            setResolvedTheme(newResolvedTheme);
            if (theme === 'system') {
                applyTheme(newResolvedTheme);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        handleChange(); // Initial check

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [isClient, theme, applyTheme]);

    useEffect(() => {
        if (!isClient) return;

        if (theme === 'system') {
            applyTheme(resolvedTheme);
        } else {
            applyTheme(theme);
        }
    }, [isClient, theme, resolvedTheme, applyTheme]);

    const value = {
        theme,
        setTheme,
        resolvedTheme,
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}
