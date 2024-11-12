'use client';

import { useCart } from '@/contexts/cartProvider/cartProvider';
import { Badge } from '../ui/badge';

const CartBadge = () => {
    const { totalItems } = useCart();

    return (
        <Badge
            variant='outline'
            className='
                    bg-primary-dark 
                    text-white
                    w-6 h-6 
                    flex 
                    items-center 
                    justify-center 
                    absolute 
                    -top-2.5 
                    -right-2.5
                    z-0
                    '
        >
            {totalItems}
        </Badge>
    );
};

export default CartBadge;
