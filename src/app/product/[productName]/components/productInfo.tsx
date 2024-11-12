import { Box, Rate, Text } from '@/components';
import { useProduct } from '../productProvider';
import { Skeleton } from '@/components/ui/skeleton';
import { calculateReviewsAverage } from '@/lib/utils';
import { useCurrency } from '@/contexts/currencyProvider/currencyProvider';

const ProductInfo = () => {
    const { product } = useProduct();
    const { data: currency } = useCurrency();

    if (!product) {
        return <Skeleton />;
    }

    return (
        <Box variant='column' className='items-start'>
            <Box className='gap-4'>
                <Text variant='h3'>{product.name}</Text>
                <Text variant='h5'>{product.shortDescription}</Text>
            </Box>
            <Box>
                {product.reviews && (
                    <Box>
                        <Text variant='h5'>
                            {calculateReviewsAverage(product.reviews, 5)}
                        </Text>
                        <Rate
                            value={calculateReviewsAverage(product.reviews, 5)}
                        />
                        <Text variant='p'>
                            {product.reviews.length} reviews
                        </Text>
                    </Box>
                )}
            </Box>
            <Box>
                <Text variant='h3' className='text-primary'>
                    {currency?.symbol}
                    {product.price}
                </Text>
            </Box>
        </Box>
    );
};

export default ProductInfo;
