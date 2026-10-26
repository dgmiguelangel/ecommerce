import React, { useState, useContext, createContext } from 'react';

export const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [resetVersion, setResetVersion] = useState(0);

    const addToCart = (product) => {
        const quantityToAdd = Number(product.quantity) || 0;
        if (quantityToAdd <= 0) return;

        setCart((prevCart) => {
            const itemInCart = prevCart.find((item) => item.id === product.id);
            if (itemInCart) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
                );
            }
            return [...prevCart, { ...product, quantity: quantityToAdd }];
        });
    };

    const clearCart = () => {
        setCart([]);
        Object.keys(localStorage)
            .filter((key) => key.startsWith('ecommerce:producto:') && key.endsWith(':contador'))
            .forEach((key) => localStorage.removeItem(key));
        setResetVersion((version) => version + 1);
    };

    const getCartQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + Number(item.precio) * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, getCartQuantity, getCartTotal, resetVersion }}>
            {children}
        </CartContext.Provider>
    );
};
