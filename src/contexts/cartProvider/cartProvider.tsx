'use client';

import ICartItem from '@/interfaces/ICartItem';
import IProduct from '@/interfaces/IProduct';
import {
    PropsWithChildren,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react';

interface CartContextProps {
    cartItems: ICartItem[];
    addToCart: (item: IProduct) => void;
    removeFromCart: (itemId: number) => void;
    updateCartItemQuantity: (itemId: number, quantity: number) => void;
    clearCart: () => void;
    totalPrice: number;
    totalItems: number;
    isEmpty: boolean;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export default function CartContextProvider({ children }: PropsWithChildren) {
    const storageKey = 'cartItems';

    const [cartItems, setCartItems] = useState<ICartItem[]>(() => {
        if (typeof window !== 'undefined') {
            const storedCartItems = localStorage.getItem(storageKey);
            if (storedCartItems) {
                try {
                    return JSON.parse(storedCartItems) as ICartItem[];
                } catch (error) {
                    console.error('Error parsing stored cart items:', error);
                }
            }
        }
        return [];
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(storageKey, JSON.stringify(cartItems));
        }
    }, [cartItems]);

    //add to cart items
    const addToCart = useCallback((item: IProduct) => {
        setCartItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex(
                (cartItem) => cartItem.productId === item.id,
            );

            if (existingItemIndex !== -1) {
                // Item already exists in cart, increase quantity
                return prevItems.map((cartItem, index) =>
                    index === existingItemIndex
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem,
                );
            }
            // Item doesn't exist in cart, add new item
            const newCartItem: ICartItem = {
                productId: item.id,
                productName: item.name,
                productPrice: item.price,
                quantity: 1,
                productMainImage: item.mainImage,
                productStockNumber: item.stockNumber,
            };
            return [...prevItems, newCartItem];
        });
    }, []);

    //to remove item from cart
    const removeFromCart = useCallback((itemId: number) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.productId !== itemId),
        );
    }, []);

    //update the quantity of cart
    const updateCartItemQuantity = useCallback(
        (itemId: number, quantity: number) => {
            setCartItems((prevItems) =>
                prevItems.map((item) =>
                    item.productId === itemId ? { ...item, quantity } : item,
                ),
            );
        },
        [],
    );

    //clear all the cart items
    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    // return the cart items total price
    const totalPrice = useMemo(() => {
        return cartItems.reduce(
            (acc, item) => acc + item.productPrice * item.quantity,
            0,
        );
    }, [cartItems]);

    //return the cart items count
    const totalItems = useMemo(() => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0);
    }, [cartItems]);

    //check if the cart is empty
    const isEmpty = useMemo(() => cartItems.length === 0, [cartItems]);

    const contextValue: CartContextProps = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        totalPrice,
        totalItems,
        isEmpty,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);

    if (context === undefined)
        throw new Error('useCart must be used within a CartContextProvider');

    return context;
};
