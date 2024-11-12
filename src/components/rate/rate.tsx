import React from 'react';
import { cn } from '@/lib/utils';
import Box from '../box/box';
import { StarIcon } from 'lucide-react';

interface RateProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    readOnly?: boolean;
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ElementType;
}

const Rate = React.forwardRef<HTMLDivElement, RateProps>(
    (
        {
            className,
            value,
            max = 5,
            readOnly = false,
            size = 'md',
            icon: Icon,
            ...props
        },
        ref,
    ) => {
        const sizeClasses = {
            sm: 'h-4 w-4',
            md: 'h-6 w-6',
            lg: 'h-8 w-8',
        };

        return (
            <Box ref={ref} className={cn('flex', className)} {...props}>
                {Array.from({ length: max }, (_, index) =>
                    Icon ? (
                        <Icon
                            key={index}
                            className={cn(
                                'inline-flex items-center justify-center fill-current',
                                sizeClasses[size],
                                index < value
                                    ? 'text-primary'
                                    : 'text-secondary-light',
                                readOnly ? 'opacity-50' : '',
                                index === Math.floor(value) && value % 1 !== 0
                                    ? 'text-primary-light'
                                    : '',
                            )}
                        />
                    ) : (
                        <StarIcon
                            key={index}
                            className={cn(
                                'inline-flex items-center justify-center fill-current',
                                sizeClasses[size],
                                index < value
                                    ? 'text-primary'
                                    : 'text-secondary-light',
                                readOnly ? 'opacity-50' : '',
                                index === Math.floor(value) && value % 1 !== 0
                                    ? 'text-primary-light'
                                    : '',
                            )}
                        />
                    ),
                )}
            </Box>
        );
    },
);

Rate.displayName = 'Rate';

export default Rate;
