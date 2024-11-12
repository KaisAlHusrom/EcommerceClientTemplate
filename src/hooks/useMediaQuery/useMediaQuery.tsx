'use client'

import { useState, useEffect } from 'react';

// Tailwind default breakpoints
const breakpoints = {
    '3xs': '175px',
    '2xs': '275px',
    'xs': '375px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1400px',
    '3xl': '1536px',
};

type BreakpointKey = keyof typeof breakpoints;

function useMediaQuery(breakpoint: BreakpointKey): boolean {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const query = `(min-width: ${breakpoints[breakpoint]})`;
        const media = window.matchMedia(query);
        
        if (media.matches !== matches) {
        setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    }, [breakpoint, matches]);

    return matches;
}

export function useTailwindBreakpoint(): BreakpointKey {
    const [breakpoint, setBreakpoint] = useState<BreakpointKey>('xs');

    useEffect(() => {
        const handleResize = () => {
        const width = window.innerWidth;
        let newBreakpoint: BreakpointKey = 'xs';

        for (const [key, value] of Object.entries(breakpoints)) {
            if (width >= Number(value)) {
                newBreakpoint = key as BreakpointKey;
            } else {
            break;
            }
        }

        setBreakpoint(newBreakpoint);
        };

        // Set the initial breakpoint
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Clean up
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return breakpoint;
}

export default useMediaQuery;