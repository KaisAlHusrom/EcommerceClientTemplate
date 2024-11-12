import { Box, Text } from '@/components';
import { Button } from '@/components/ui';
import Image from 'next/image';
import React from 'react';

const HeroSlide = ({ index }: { index: number }) => {
    return (
        <Box
            variant='rowBetween'
            className='h-full flex-col-reverse md:flex-row justify-end md:justify-between items-start md:items-center gap-8'
        >
            <Box variant='row' className='w-full md:w-[50%] justify-center'>
                <Box variant='column' className='max-w-full md:max-w-[80%]'>
                    <Text variant='h3' className='text-center'>
                        Sale! Up to 20% off!
                    </Text>
                    <Text
                        variant='h1'
                        className='text-center text-4xl md:text-6xl'
                    >
                        Man Cave Essentials Sale
                    </Text>
                    <Box className='mt-4'>
                        <Button
                            variant='default'
                            size='lg'
                            className='text-xl uppercase'
                        >
                            Shop Now
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box className='w-full md:w-[50%] h-[50vh] md:h-screen'>
                <Box variant='center' className='h-full w-full'>
                    <Image
                        src={`https://picsum.photos/1920/2180?random=${index}`}
                        alt='Man cave essentials'
                        className='object-cover object-center w-full h-full'
                        width='1920'
                        height='2180'
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSlide;
