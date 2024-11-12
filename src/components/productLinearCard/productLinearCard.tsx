'use client';

import Image from 'next/image';
import Box from '../box/box';
import { Button } from '../ui';
import Text from '../text/text';
import { TrashIcon } from 'lucide-react';
import ICartItem from '@/interfaces/ICartItem';
import { useCart } from '@/contexts/cartProvider/cartProvider';

interface ProductLinearCardProps {
    product: ICartItem;
}

const ProductLinearCard = ({ product }: ProductLinearCardProps) => {
    // const handleOpenProduct = () => {
    //     //TODO: open product page
    //     console.log('Product opened');
    // };

    const { removeFromCart } = useCart();

    return (
        <Box variant='row' className='w-full'>
            <Box
                variant='center'
                className='w-[150px] h-[100px] rounded-md overflow-hidden bg-gray-100'
            >
                <Image
                    src={product.productMainImage}
                    alt={product.productName}
                    width={300}
                    height={300}
                    className='h-full w-full object-cover rounded-md transition-transform duration-300 hover:scale-105'
                />
            </Box>
            <Box variant='column' className='w-full'>
                <Box variant='row' className='justify-between w-full'>
                    <Text variant='mid'>{product.productName}</Text>
                    <Text variant='large' className='text-primary'>
                        {product.productPrice}
                    </Text>
                </Box>
                <Box className='self-start'>
                    {/* TODO: add check if the product available or not */}
                    <Text>Available</Text>
                </Box>
                <Box className='justify-between w-full'>
                    {/* <Box className=' w-1/2'>
                        <Box className='w-[100px]'>
                            <Input
                                type='number'
                                readOnly
                                className='focus:outline-none focus:border-none'
                            />
                        </Box>
                        <Box variant='column'>
                            <ArrowUp className='h-4 w-4 cursor-pointer' />
                            <ArrowDown className='h-4 w-4' />
                        </Box>
                    </Box> */}
                    <Text>Qun: {product.quantity}</Text>
                    <Box>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='text-danger'
                            onClick={() => removeFromCart(product?.productId)}
                        >
                            <TrashIcon />
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductLinearCard;
