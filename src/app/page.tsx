import { Box } from '@/components';
import React from 'react';
import Hero from './components/hero';
import FeaturedProducts from './components/featuredProducts';
import CategoriesSection from './components/categoriesSection';
import FlashProducts from './components/flashProducts';
import Brands from './components/brands';

const Home = () => {
    return (
        <>
            <Box
                variant='column'
                className='items-start justify-normal gap-8 p-0 m-0'
            >
                <Hero />
                <FeaturedProducts />
                <CategoriesSection />
                <FlashProducts />
                <Brands />
            </Box>
        </>
    );
};

export default Home;
