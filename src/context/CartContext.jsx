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

    const addToCart = (product) => {
        const itemInCart = cart.find((item) => item.id === product.id);
        if (itemInCart) {
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCart(updatedCart);
        } else {
            setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + Number(item.precio) * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, getCartQuantity, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
};
