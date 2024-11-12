import * as React from 'react';

import { cn } from '@/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    icon?: React.ElementType;
    iconAnchor?: 'right' | 'left';
    containerClassname?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type,
            icon: Icon,
            iconAnchor = 'left',
            containerClassname,
            ...props
        },
        ref,
    ) => {
        return (
            <div className={cn('relative w-full', containerClassname)}>
                {Icon && (
                    <span
                        className={cn(
                            'absolute inset-y-0  flex items-center ',
                            iconAnchor === 'right'
                                ? 'right-0 pr-3'
                                : 'left-0 pl-3',
                        )}
                    >
                        <Icon className='w-4 h-4 text-gray-500' />
                    </span>
                )}
                <input
                    type={type}
                    className={cn(
                        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                        Icon ? (iconAnchor === 'left' ? 'pl-10' : 'pr-10') : '',
                        className,
                    )}
                    ref={ref}
                    {...props}
                />
            </div>
        );
    },
);
Input.displayName = 'Input';

export { Input };
