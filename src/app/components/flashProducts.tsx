import { Box } from '@/components';
import LandpageCarousel from '@/components/landpageCarousel/landpageCarouse';
import ProductCard from '@/components/productCard/productCard';
import products from '@/constants/products/products';

const FlashProducts = () => {
    return (
        <Box className='w-full bg-secondary-dark py-24'>
            <LandpageCarousel
                data={products}
                title='Flash products'
                autoplaying
                itemComponent={ProductCard}
                itemClassname='basis-auto xs:basis-1/2 sm:basis-1/3 lg:basis-1/5'
            />
        </Box>
    );
};

export default FlashProducts;
