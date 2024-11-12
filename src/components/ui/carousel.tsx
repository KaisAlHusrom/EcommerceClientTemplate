'use client';

import * as React from 'react';
import useEmblaCarousel, {
    type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';
import { useLangContext } from '@/hooks';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: 'horizontal' | 'vertical';
    setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
    selectedIndex: number;
    scrollSnaps: number[];
    direction: 'ltr' | 'rtl';
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
    const context = React.useContext(CarouselContext);

    if (!context) {
        throw new Error('useCarousel must be used within a <Carousel />');
    }

    return context;
}

const Carousel = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
    (
        {
            orientation = 'horizontal',
            opts,
            setApi,
            plugins,
            className,
            children,
            ...props
        },
        ref,
    ) => {
        const { direction } = useLangContext();

        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                direction,
                axis: orientation === 'horizontal' ? 'x' : 'y',
            },
            plugins,
        );
        const [canScrollPrev, setCanScrollPrev] = React.useState(false);
        const [canScrollNext, setCanScrollNext] = React.useState(false);
        const [selectedIndex, setSelectedIndex] = React.useState(0);
        const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

        const onSelect = React.useCallback((api: CarouselApi) => {
            if (!api) {
                return;
            }

            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
            setSelectedIndex(api.selectedScrollSnap());
        }, []);

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev();
        }, [api]);

        const scrollNext = React.useCallback(() => {
            api?.scrollNext();
        }, [api]);

        const handleKeyDown = React.useCallback(
            (event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    if (direction === 'ltr') {
                        scrollPrev();
                    } else {
                        scrollNext();
                    }
                } else if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    if (direction === 'ltr') {
                        scrollNext();
                    } else {
                        scrollPrev();
                    }
                }
            },
            [scrollPrev, scrollNext, direction],
        );

        React.useEffect(() => {
            if (!api || !setApi) {
                return;
            }

            setApi(api);
        }, [api, setApi]);

        React.useEffect(() => {
            if (!api) {
                return;
            }

            onSelect(api);
            setScrollSnaps(api.scrollSnapList());
            api.on('reInit', onSelect);
            api.on('select', onSelect);

            return () => {
                api?.off('select', onSelect);
            };
        }, [api, onSelect]);

        // // 1. Re-initialize the carousel when direction changes
        // React.useEffect(() => {
        //     if (api) {
        //         api.reInit({ direction });
        //     }
        // }, [api, direction]);

        // React.useEffect(() => {
        //     console.log('Direction changed:', direction);
        //     console.log('Carousel API:', api);
        // }, [direction, api]);

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api: api,
                    opts,
                    orientation:
                        orientation ||
                        (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                    selectedIndex,
                    scrollSnaps,
                    direction,
                }}
            >
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    className={cn('relative', className)}
                    role='region'
                    aria-roledescription='carousel'
                    {...props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        );
    },
);
Carousel.displayName = 'Carousel';

const CarouselContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { carouselRef, orientation, direction } = useCarousel();

    return (
        <div ref={carouselRef} className='overflow-hidden'>
            <div
                ref={ref}
                className={cn(
                    'flex',
                    orientation === 'horizontal'
                        ? direction === 'ltr'
                            ? '-ml-4'
                            : '-mr-4'
                        : '-mt-4 flex-col',
                    className,
                )}
                {...props}
            />
        </div>
    );
});
CarouselContent.displayName = 'CarouselContent';

const CarouselItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { orientation, direction } = useCarousel();

    return (
        <div
            ref={ref}
            role='group'
            aria-roledescription='slide'
            className={cn(
                'min-w-0 shrink-0 grow-0 basis-full',
                orientation === 'horizontal'
                    ? direction === 'ltr'
                        ? 'pl-4'
                        : 'pr-4'
                    : 'pt-4',
                className,
            )}
            {...props}
        />
    );
});
CarouselItem.displayName = 'CarouselItem';

const CarouselPrevious = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev, direction } = useCarousel();

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                'absolute h-8 w-8 rounded-full',
                orientation === 'horizontal'
                    ? direction === 'ltr'
                        ? '-left-12 top-1/2 -translate-y-1/2'
                        : '-right-12 top-1/2 -translate-y-1/2'
                    : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
                className,
            )}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            {direction === 'ltr' ? (
                <ArrowLeft className='h-4 w-4' />
            ) : (
                <ArrowRight className='h-4 w-4' />
            )}
            <span className='sr-only'>Previous slide</span>
        </Button>
    );
});
CarouselPrevious.displayName = 'CarouselPrevious';

const CarouselNext = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext, direction } = useCarousel();

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                'absolute h-8 w-8 rounded-full',
                orientation === 'horizontal'
                    ? direction === 'ltr'
                        ? '-right-12 top-1/2 -translate-y-1/2'
                        : '-left-12 top-1/2 -translate-y-1/2'
                    : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
                className,
            )}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            {direction === 'ltr' ? (
                <ArrowRight className='h-4 w-4' />
            ) : (
                <ArrowLeft className='h-4 w-4' />
            )}
            <span className='sr-only'>Next slide</span>
        </Button>
    );
});
CarouselNext.displayName = 'CarouselNext';

const CarouselPagination = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { api, selectedIndex, scrollSnaps } = useCarousel();

    const scrollTo = React.useCallback(
        (index: number) => {
            api?.scrollTo(index);
        },
        [api],
    );

    return (
        <div
            ref={ref}
            className={cn('flex justify-center gap-1 py-2', className)}
            {...props}
        >
            {scrollSnaps.map((_, index) => (
                <Button
                    key={index}
                    size='sm'
                    variant={selectedIndex === index ? 'default' : 'outline'}
                    className='h-3 w-10 rounded-full p-0'
                    onClick={() => scrollTo(index)}
                >
                    <span className='sr-only'>
                        Slide {index + 1} of {scrollSnaps.length}
                    </span>
                </Button>
            ))}
        </div>
    );
});
CarouselPagination.displayName = 'CarouselPagination';

export {
    type CarouselApi,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselPagination,
};
