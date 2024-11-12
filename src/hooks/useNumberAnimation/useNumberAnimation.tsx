'use client'

import { useEffect, useState } from "react";

const useNumberAnimation = (inView: boolean, goal: number, duration = 2000) => {
    const [currentNumber, setCurrentNumber] = useState<number>(0);

    useEffect(() => {
        if (!inView) return; // Do nothing if not in view

        let start: number | null = null;

        const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;

        // Calculate the current number based on progress
        const newNumber = Math.min(Math.floor((progress / duration) * goal), goal);
        setCurrentNumber(newNumber);

        if (progress < duration) {
            requestAnimationFrame(step); // Continue the animation
        }
        };

        requestAnimationFrame(step); // Start the animation

        return () => {
        setCurrentNumber(0); // Reset number if component unmounts
        };
    }, [inView, goal, duration]);

    return currentNumber;
};

export default useNumberAnimation;
