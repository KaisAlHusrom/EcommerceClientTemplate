'use client';

import IProduct from '@/interfaces/IProduct';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui';
import Image from 'next/image';
import Box from '../box/box';
import Text from '../text/text';
import Rate from '../rate/rate';
import { Heart } from 'lucide-react';
import { useCurrency } from '@/contexts/currencyProvider/currencyProvider';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
interface ProductCardProps {
    item: IProduct;
}

const ProductCard = ({ item: product }: ProductCardProps) => {
    const { data: currency } = useCurrency();

    const toggleFavorite = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent event from bubbling up to the card
        // TODO: Add product to favorites
        console.log('Product added or removed to favorites');
    };
    const router = useRouter();

    const handleOpenProduct = () => {
        //TODO: open product page

        router.push(`/product/${product.name}-${product.id}`);
    };

    //calculate the reviews average
    const productRate = useMemo<number>(() => {
        if (!product || !product.reviews) return 0;

        return (
            Number(
                product.reviews
                    .map((review) => review.rating)
                    .reduce((sum, rating) => sum + rating)
                    .toFixed(2),
            ) / 5
        );
    }, [product]);
    return (
        <Card
            onClick={handleOpenProduct}
            className='border-0 cursor-pointer transition-all hover:bg-secondary-light'
        >
            <CardHeader className='gap-4 relative'>
                <Box
                    variant='center'
                    className='w-full h-50 rounded-md overflow-hidden bg-gray-100'
                >
                    <Image
                        src={product.mainImage}
                        alt={product.name}
                        width={300}
                        height={300}
                        className='h-full w-full object-cover rounded-md transition-transform duration-300 hover:scale-105'
                    />
                </Box>
                <Box variant='rowBetween'>
                    <CardTitle className='text-lg font-semibold'>
                        {product.name}
                    </CardTitle>
                    <CardDescription className='text-lg font-bold text-primary'>
                        {currency?.code}
                        {product.price.toFixed(2)}
                    </CardDescription>
                </Box>
                <Box
                    fitContent
                    className='absolute top-8 right-8 bg-background rounded-full p-2'
                    onClick={toggleFavorite}
                >
                    <Heart
                        className='curson-pointer transition-all hover:text-primary hover:fill-current'
                        size={24}
                    />
                </Box>
            </CardHeader>
            <CardContent>
                <Text variant='p' className='line-clamp-2 text-gray-600'>
                    {product.shortDescription}
                </Text>
            </CardContent>
            <CardFooter>
                <Box variant='row' className='items-center'>
                    <Text variant='p' className='mr-2 font-semibold'>
                        {productRate}
                    </Text>
                    <Rate value={productRate} max={5} />
                </Box>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
