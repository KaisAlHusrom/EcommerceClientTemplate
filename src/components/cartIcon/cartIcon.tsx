import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ShoppingCartIcon } from 'lucide-react';

import CartPopoverContent from './cartPopoverContent';
import dynamic from 'next/dynamic';

const CartBadge = dynamic(() => import('./cartBadge'), { ssr: false });

const CartIcon = () => {
    return (
        <Popover>
            <PopoverTrigger className='relative'>
                <ShoppingCartIcon />
                <CartBadge />
            </PopoverTrigger>
            <PopoverContent className='w-fit'>
                <CartPopoverContent />
            </PopoverContent>
        </Popover>
    );
};

export default CartIcon;
