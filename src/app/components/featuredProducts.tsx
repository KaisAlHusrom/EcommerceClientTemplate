import { Box } from '@/components';
import LandpageCarousel from '@/components/landpageCarousel/landpageCarouse';
import ProductCard from '@/components/productCard/productCard';
import products from '@/constants/products/products';

const FeaturedProducts = () => {
    return (
        <Box
            className='w-full bg-secondary-dark py-24 relative'
            // style={{
            //     WebkitMaskImage:
            //         'linear-gradient(to bottom, transparent 1%, black 10%, black 90%, transparent 99%)',
            //     maskImage:
            //         'linear-gradient(to bottom, transparent 1%, black 10%, black 90%, transparent 99%)',
            // }}
        >
            <LandpageCarousel
                data={products}
                title='featured products'
                autoplaying
                itemComponent={ProductCard}
                itemClassname='basis-auto xs:basis-1/2 sm:basis-1/3 lg:basis-1/5'
                prevButton
                nextButton
                prevnextClassname='absolute -top-10 left-20'
            />
        </Box>
    );
};

export default FeaturedProducts;
