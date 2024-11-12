'use client';

import { Box } from '@/components';

import ProductProvider from './productProvider';
import ProductAllImagesSlider from './components/productAllImagesSlider';
import SelectedImagePresent from './components/selectedImagePresent';
import ProductInfo from './components/productInfo';

const ProductPage = () => {
    return (
        <ProductProvider>
            <Box
                variant='column'
                className='items-start justify-normal gap-8 p-0 m-0'
            >
                <Box variant='container'>
                    <Box className='w-full justify-between'>
                        <Box variant='column' className='w-1/2'>
                            <SelectedImagePresent />
                            <Box className='w-full overflow-hidden justify-center relative'>
                                <ProductAllImagesSlider />
                            </Box>
                        </Box>
                        <Box className='w-1/2 self-start mt-4'>
                            <ProductInfo />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ProductProvider>
    );
};

export default ProductPage;
