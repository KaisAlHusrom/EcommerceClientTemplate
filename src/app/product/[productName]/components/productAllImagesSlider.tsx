import { Box } from '@/components';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { useProduct } from '../productProvider';
const ProductAllImagesSlider = () => {
    const { product, setSelectedImage, productImages, selectedImage } =
        useProduct();

    return product ? (
        <Carousel
            className='w-[80%]'
            opts={{
                dragFree: false,
            }}
        >
            <CarouselContent>
                {productImages &&
                    productImages.map((image, key) => {
                        return (
                            <CarouselItem key={key} className='basis-1/6'>
                                <Box
                                    className={`w-full ${selectedImage === image ? 'border-primary border-2' : ''}`}
                                    onMouseEnter={() => setSelectedImage(image)} // Set image on hover
                                    // onMouseLeave={() => setSelectedImage(null)} // Clear image when not hovering
                                >
                                    <Image
                                        src={image}
                                        width={300}
                                        height={300}
                                        alt={product.name}
                                        className='w-full h-full object-contain'
                                    />
                                </Box>
                            </CarouselItem>
                        );
                    })}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>
    ) : (
        <Skeleton />
    );
};

export default ProductAllImagesSlider;
