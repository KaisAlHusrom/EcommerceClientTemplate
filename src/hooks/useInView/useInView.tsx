'use client'

import { useCallback, useEffect, useRef, useState } from "react";

type UseInViewReturn = {
    inView: boolean;
    ref: (node: HTMLElement | null) => void;
};

const useInView = (): UseInViewReturn => {
    const observer = useRef<IntersectionObserver | null>(null);
    const [inView, setInView] = useState<boolean>(false);
    const [element, setElement] = useState<HTMLElement | null>(null); // To keep track of the element being observed

    const handleIntersection = useCallback(
        (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            setInView(entry.isIntersecting);
        });
        },
        []
    );

    const ref = useCallback((node: HTMLElement | null) => {
        setElement(node); // Update the observed element
    }, []);

    useEffect(() => {
        if (!element) return; // If no element, do nothing

        observer.current = new IntersectionObserver(handleIntersection);
        observer.current.observe(element);

        return () => {
        if (observer.current) {
            observer.current.disconnect();
        }
        };
    }, [element, handleIntersection]);

    return { inView, ref };
};

export default useInView;
