'use client';

import { cn } from '@/lib/utils';
import Box from '../box/box';
import SectionTitle from '../sectionTitle/sectionTitle';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPagination,
    CarouselPrevious,
} from '../ui';
import Autoplay from 'embla-carousel-autoplay';
import type { EmblaPluginType } from 'embla-carousel';

interface LandpageCarouselProps {
    data: unknown[];
    itemComponent: React.ElementType;
    itemClassname: string;
    title: string;
    autoplaying?: boolean;
    autoplayDuration?: number;
    carouselPlugins?: EmblaPluginType[];
    pagination?: boolean;
    containerClassname?: string;
    titleClassName?: string;
    carouselClassname?: string;
    carouselContainerClassname?: string;
    paginationClassname?: string;
    container?: boolean;
    prevButton?: boolean;
    nextButton?: boolean;
    prevButtonClassname?: string;
    nextButtonClassname?: string;
    prevnextClassname?: string;
}

const LandpageCarousel = (props: LandpageCarouselProps) => {
    const {
        data,
        itemComponent: ItemComponent,
        itemClassname,
        autoplayDuration,
        autoplaying,
        carouselPlugins = [],
        title,
        pagination,
        containerClassname,
        titleClassName,
        carouselClassname,
        carouselContainerClassname,
        paginationClassname,
        container = true,
        prevButton = false,
        nextButton = false,
        prevButtonClassname,
        nextButtonClassname,
        prevnextClassname,
    } = props;

    return (
        <Box
            variant={container ? 'container' : 'row'}
            className={containerClassname}
        >
            <Box variant='column' className='gap-8 w-full'>
                <Box variant='row' className='w-full justify-center'>
                    <SectionTitle className={titleClassName} value={title} />
                </Box>
                <Box className={cn('w-full', carouselContainerClassname)}>
                    <Carousel
                        className={cn('w-full', carouselClassname)}
                        opts={{
                            loop: true,
                            dragFree: false,
                        }}
                        plugins={
                            autoplaying
                                ? [
                                      Autoplay({
                                          delay: autoplayDuration || 3000,
                                      }),
                                      ...carouselPlugins,
                                  ]
                                : carouselPlugins
                        }
                    >
                        <CarouselContent className='w-full h-full -ml-0.5 md:ml-0'>
                            {data.map((item, index) => (
                                <CarouselItem
                                    key={index}
                                    className={cn('w-full', itemClassname)}
                                >
                                    <ItemComponent item={item} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <Box className={prevnextClassname}>
                            {prevButton && (
                                <CarouselPrevious
                                    className={prevButtonClassname}
                                />
                            )}
                            {nextButton && (
                                <CarouselNext className={nextButtonClassname} />
                            )}
                        </Box>
                        {pagination && (
                            <CarouselPagination
                                className={paginationClassname}
                            />
                        )}
                    </Carousel>
                </Box>
            </Box>
        </Box>
    );
};

export default LandpageCarousel;
