'use client'

import React, { useRef, useEffect, useState } from 'react';
import {  LucideProps } from 'lucide-react';

interface GradientIconProps extends LucideProps {
    gradientId?: string;
    fromColor: string; // Tailwind color class for the start of the gradient
    toColor: string;   // Tailwind color class for the end of the gradient
    icon: React.ElementType;
}

const GradientIcon: React.FC<GradientIconProps> = ({ 
    gradientId = 'iconGradient',
    fromColor,
    toColor,
    icon,
    ...props
}) => {
    const Icon = icon;
    const [gradientColors, setGradientColors] = useState(['currentColor', 'currentColor']);
    const fromRef = useRef<HTMLDivElement>(null);
    const toRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getColor = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            const computedStyle = window.getComputedStyle(ref.current);
            return computedStyle.backgroundColor;
        }
        return 'currentColor';
        };

        setGradientColors([getColor(fromRef), getColor(toRef)]);
    }, [fromColor, toColor]);

    return (
        <>
        <div className={`hidden ${fromColor}`} ref={fromRef} />
        <div className={`hidden ${toColor}`} ref={toRef} />
        <svg width={props.size} height={props.size}>
            <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={gradientColors[0]} />
                <stop offset="100%" stopColor={gradientColors[1]} />
            </linearGradient>
            </defs>
            <Icon {...props} color={`url(#${gradientId})`} />
        </svg>
        </>
    );
};

export default GradientIcon;