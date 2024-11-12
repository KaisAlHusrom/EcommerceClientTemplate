'use client';

import { Box, Text } from '@/components';
import IBrand from '@/interfaces/IBrand';
import Image from 'next/image';

interface BrandCardProps {
    item: IBrand;
}

const BrandCard = ({ item: brand }: BrandCardProps) => {
    return (
        <Box
            variant='center'
            className='w-full h-[200px] relative cursor-pointer'
        >
            <Image
                src={brand.image || ''}
                alt={brand.name}
                width={200}
                height={200}
                className='w-auto h-auto opacity-60 rounded-full  transition-opacity hover:opacity-80'
            />
            <Text
                variant='h4'
                className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-pbold w-full text-center line-clamp-1'
            >
                {brand.name}
            </Text>
        </Box>
    );
};

export default BrandCard;
