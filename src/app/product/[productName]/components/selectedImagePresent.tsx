import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { useProduct } from '../productProvider';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui';
import { Box } from '@/components';

const SelectedImagePresent: React.FC = () => {
    const { product, productImages, setApi } = useProduct();

    if (!product) {
        return <Skeleton className='w-full h-full' />;
    }

    return (
        <Carousel
            className='w-[80%]'
            opts={{
                dragFree: false,
            }}
            setApi={setApi}
        >
            <CarouselContent>
                {product &&
                    productImages &&
                    productImages.map((image, index) => (
                        <CarouselItem key={index} className='basis-auto w-full'>
                            <Box className='w-full h-[50vh] bg-secondary cursor-pointer transition-transform hover:scale-110'>
                                <Image
                                    src={image}
                                    width={300}
                                    height={300}
                                    alt={`${product.name} - Image ${index + 1}`}
                                    className='w-full h-full object-contain'
                                />
                            </Box>
                        </CarouselItem>
                    ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>
    );
};

export default SelectedImagePresent;
