import { Box } from '@/components';
import LandpageCarousel from '@/components/landpageCarousel/landpageCarouse';
import brands from '@/constants/brands/brands';
import BrandCard from './brandCard';

const Brands = () => {
    return (
        <Box variant='row' className='w-full py-24'>
            <LandpageCarousel
                data={brands}
                title='Brands For You'
                autoplaying
                itemComponent={BrandCard}
                itemClassname='basis-auto xs:basis-1/2 sm:basis-1/3 lg:basis-1/5'
            />
        </Box>
    );
};

export default Brands;
