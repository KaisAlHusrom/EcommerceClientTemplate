'use client';

import { Box, Text } from '@/components';
import ICategory from '@/interfaces/ICategory';
import Image from 'next/image';

interface CategoryCardProps {
    item: ICategory;
}

const CategoryCard = ({ item: category }: CategoryCardProps) => {
    return (
        <Box className='w-full h-[200px] relative cursor-pointer'>
            <Image
                src={category.image || ''}
                alt={category.name}
                width={150}
                height={200}
                className='w-full h-full opacity-80 hover:opacity-60 transition-opacity'
            />
            <Text
                variant='h4'
                className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] font-pbold w-full text-center line-clamp-1'
            >
                {category.name}
            </Text>
        </Box>
    );
};

export default CategoryCard;
