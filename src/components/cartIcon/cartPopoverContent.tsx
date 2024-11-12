'use client';
import Box from '../box/box';
import ProductLinearCard from '../productLinearCard/productLinearCard';
import Text from '../text/text';
import { Button } from '../ui';
import { useCart } from '@/contexts/cartProvider/cartProvider';
import ICartItem from '@/interfaces/ICartItem';
import { Eraser } from 'lucide-react';

const CartPopoverContent = () => {
    const { cartItems, clearCart, totalPrice, totalItems, isEmpty } = useCart();

    return (
        <Box variant='column' className='w-[350px] items-start'>
            <Box
                variant='row'
                className='w-full justify-between items-center px-4 py-2'
            >
                <Box>
                    <Text variant='h5'>Shopping Cart</Text>
                    <Text variant='p' className='text-gray-500 text-sm'>
                        ({totalItems} items)
                    </Text>
                </Box>
                {!isEmpty && (
                    <Button
                        size='icon'
                        variant='ghost'
                        onClick={clearCart}
                        className='hover:text-primary'
                    >
                        <Eraser />
                    </Button>
                )}
            </Box>
            {isEmpty ? (
                <Box className='p-4'>
                    <Text className='text-info'>Cart is empty</Text>
                </Box>
            ) : (
                <>
                    <Box
                        variant='column'
                        className='w-full px-4 py-2 max-h-[300px] overflow-auto custom-scrollbar'
                    >
                        {cartItems.slice(0, 3).map((product: ICartItem) => {
                            return (
                                <ProductLinearCard
                                    key={product.productId}
                                    product={product}
                                />
                            );
                        })}
                    </Box>
                </>
            )}
            <Box
                variant='row'
                className='w-full mt-4 border-t-2 py-2 justify-between items-center px-4'
            >
                <Text>Total</Text>
                <Text variant='p'>{totalPrice}$</Text>
            </Box>
            <Box className='w-full justify-between p-2'>
                <Button variant='default'>Checkoout</Button>
                <Button variant='secondary'>View Cart</Button>
            </Box>
        </Box>
    );
};

export default CartPopoverContent;
