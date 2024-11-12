'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPagination,
} from '@/components/ui';
import React from 'react';

import Autoplay from 'embla-carousel-autoplay';
import { Box } from '@/components';
import HeroSlide from './heroSlide';

const Hero = () => {
    return (
        <Box variant='row' className='w-full mt-0'>
            <Carousel
                className='w-full'
                opts={{
                    loop: true,
                    dragFree: false,
                }}
                plugins={[
                    Autoplay({
                        delay: 6000,
                    }),
                ]}
            >
                <CarouselContent className='w-full h-full -ml-0.5 md:ml-0'>
                    {[...Array(4)].map((_, index) => (
                        <CarouselItem
                            key={index}
                            className='
                                        w-full
                                        h-[91vh]
                                        basis-full
                                        
                                        '
                        >
                            <HeroSlide index={index} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPagination className='absolute bottom-0 w-full' />
            </Carousel>
        </Box>
    );
};

export default Hero;
