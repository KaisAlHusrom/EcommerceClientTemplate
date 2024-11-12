import { fireEvent, render, screen } from '@testing-library/react';
import CartContextProvider, {
    useCart,
} from '@/contexts/cartProvider/cartProvider';
import IProduct from '@/interfaces/IProduct';
import React from 'react';

// Mock cart items for testing
const mockProduct: IProduct = {
    id: 1,
    name: 'Test Product',
    mainImage: 'https://loremflickr.com/300/300?random=1',
    price: 100,
    shortDescription: 'Product short description',
    longDescription: 'Product long description',
    rating: 3,
    categories: [
        {
            id: 1,
            name: 'Category 1',
            description: 'Category Description',
        },
        {
            id: 2,
            name: 'Category 2',
            description: 'Category Description',
        },
    ],
    stockNumber: 5,
};

const TestComponent = () => {
    const {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        totalPrice,
        totalItems,
        isEmpty,
    } = useCart();

    return (
        <div>
            <button onClick={() => addToCart(mockProduct)}>Add to Cart</button>
            <button onClick={() => removeFromCart(1)}>Remove from Cart</button>
            <button onClick={() => updateCartItemQuantity(1, 5)}>
                Update Quantity
            </button>
            <button onClick={clearCart}>Clear Cart</button>

            <div>Cart Total Price: {totalPrice}</div>
            <div>Cart Total Items: {totalItems}</div>
            <div>{isEmpty ? 'Cart is empty' : 'Cart has items'}</div>

            {cartItems.map((item) => (
                <div key={item.productId}>
                    {item.productName} - {item.quantity}
                </div>
            ))}
        </div>
    );
};

describe('CartContextProvider', () => {
    it('should add a product to the cart', () => {
        render(
            <CartContextProvider>
                <TestComponent />
            </CartContextProvider>,
        );

        const addButton = screen.getByText('Add to Cart');

        fireEvent.click(addButton);

        expect(screen.getByText('Test Product - 1')).toBeInTheDocument();
        expect(screen.getByText('Cart Total Price: 100')).toBeInTheDocument();
        expect(screen.getByText('Cart Total Items: 1')).toBeInTheDocument();
        expect(screen.getByText('Cart has items')).toBeInTheDocument();
    });

    it('should remove a product from the cart', () => {
        render(
            <CartContextProvider>
                <TestComponent />
            </CartContextProvider>,
        );

        const addButton = screen.getByText('Add to Cart');
        const removeButton = screen.getByText('Remove from Cart');

        fireEvent.click(addButton);
        fireEvent.click(removeButton);

        expect(screen.queryByText('Test Product - 1')).not.toBeInTheDocument();
        expect(screen.getByText('Cart Total Price: 0')).toBeInTheDocument();
        expect(screen.getByText('Cart Total Items: 0')).toBeInTheDocument();
        expect(screen.getByText('Cart is empty')).toBeInTheDocument();
    });

    it('should update the product quantity in the cart', () => {
        render(
            <CartContextProvider>
                <TestComponent />
            </CartContextProvider>,
        );

        const addButton = screen.getByText('Add to Cart');
        const updateButton = screen.getByText('Update Quantity');

        fireEvent.click(addButton);
        fireEvent.click(updateButton);

        expect(screen.getByText('Test Product - 5')).toBeInTheDocument();
        expect(screen.getByText('Cart Total Price: 500')).toBeInTheDocument();
        expect(screen.getByText('Cart Total Items: 5')).toBeInTheDocument();
    });

    it('should clear the cart', () => {
        render(
            <CartContextProvider>
                <TestComponent />
            </CartContextProvider>,
        );

        const addButton = screen.getByText('Add to Cart');
        const clearButton = screen.getByText('Clear Cart');

        fireEvent.click(addButton);
        fireEvent.click(clearButton);

        expect(screen.queryByText('Test Product - 1')).not.toBeInTheDocument();
        expect(screen.getByText('Cart Total Price: 0')).toBeInTheDocument();
        expect(screen.getByText('Cart Total Items: 0')).toBeInTheDocument();
        expect(screen.getByText('Cart is empty')).toBeInTheDocument();
    });
});
