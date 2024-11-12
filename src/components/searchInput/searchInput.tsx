import React from 'react';
import { Input, InputProps } from '../ui/input';
import { SearchIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type SearchInputProps = InputProps;

const SearchInput = ({ className, ...props }: SearchInputProps) => {
    return (
        <Input
            icon={SearchIcon}
            iconAnchor='right'
            placeholder='Search...'
            className={cn('bg-secondary-dark', className)}
            {...props}
        />
    );
};

export default SearchInput;
