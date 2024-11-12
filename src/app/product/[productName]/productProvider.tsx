// import { useMemo } from 'react';
// import { createGlobalState } from '@/queryStates';
// import IProduct from '@/interfaces/IProduct'; // Assuming you have a Product type defined
// import products from '@/constants/products/products';

import { CarouselApi } from '@/components/ui/carousel';
import products from '@/constants/products/products';
import IProduct from '@/interfaces/IProduct';
import { redirect, useParams } from 'next/navigation';
import {
    createContext,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

// export const useProduct = (productName : string) => {
//     const productId = useMemo(() => {
//         const parts = productName?.split('-');
//         return parts && parts.length > 1 ? Number(parts[parts.length - 1]) : null;
//     }, [productName]);

//     const product = useMemo(() => {
//         return productId !== null ? products.find((p) => p.id === productId) ?? null : null;
//     }, [productId]);

//     const useProductState = createGlobalState<IProduct | null>({
//         queryKey: ['product', productId],
//         initialData: product,
//     });

//     const { data: currentProduct, setData: setProduct, resetData: resetProduct } = useProductState();

//     return {
//         product: currentProduct,
//         setProduct,
//         resetProduct,
//         isLoading: productId !== null && currentProduct === null,
//     };
// };

type productContextProbs = {
    product: IProduct | null;
    selectedImage: string | null;
    setSelectedImage: Dispatch<SetStateAction<string | null>>;
    api: CarouselApi;
    setApi: Dispatch<SetStateAction<CarouselApi>>;
    productImages: string[];
};

const productContext = createContext<productContextProbs | undefined>(
    undefined,
);

export default function ProductProvider({ children }: PropsWithChildren) {
    //product
    const { productName } = useParams<{ productName: string }>();

    const productId = useMemo(() => {
        const parts = productName?.split('-');
        return parts && parts.length > 1
            ? Number(parts[parts.length - 1])
            : null;
    }, [productName]);

    const product = useMemo(() => {
        return productId !== null
            ? (products.find((p) => p.id === productId) ?? null)
            : null;
    }, [productId]);

    if (!product) {
        redirect('/');
    }

    //selected image
    const productImages = useMemo(
        () =>
            product.images
                ? [
                      product.mainImage,
                      ...product.images.map((image) => image.imageName),
                  ]
                : [product.mainImage],
        [product.images, product.mainImage],
    );

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (!api) {
            return;
        }

        api.on('select', () => {
            const index = api.selectedScrollSnap();

            setSelectedImage(productImages[index]);
        });
    }, [api, productImages]);

    useEffect(() => {
        const index = productImages.findIndex((img) => img === selectedImage);

        api?.scrollTo(index);
    }, [api, productImages, selectedImage]);

    const contextValue = useMemo(
        () => ({
            product,
            selectedImage,
            setSelectedImage,
            productImages,
            api,
            setApi,
        }),
        [api, product, productImages, selectedImage],
    );

    return (
        <productContext.Provider value={contextValue}>
            {children}
        </productContext.Provider>
    );
}

export const useProduct = () => {
    const context = useContext(productContext);

    if (context === undefined) {
        throw new Error(
            'useProduct must be used within a productContextProvider',
        );
    }

    return context;
};
