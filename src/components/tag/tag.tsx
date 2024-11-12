import React from 'react';
import { Box, Text } from '@/components';

interface TagPropTypes extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outlined';
    icon?: React.ElementType;
    textClassName?: string;
}

const Tag = ({
    children,
    variant,
    icon: Icon,
    textClassName,
    ...props
}: TagPropTypes) => {
    return (
        <Box
            {...props}
            className={`
        ${variant === 'primary' ? 'bg-primary' : variant === 'secondary' ? 'bg-secondary' : variant === 'outlined' ? 'bg-transparent border-primary border-2' : 'bg-primary'}
            p-2 rounded-3xl
        `}
        >
            {Icon && (
                <Box className='mr-2' style={{ width: 20, height: 20 }}>
                    {<Icon />}
                </Box>
            )}
            <Text className={textClassName}>{children}</Text>
        </Box>
    );
};

export default Tag;
