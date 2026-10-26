import React, { useState, useContext, createContext } from 'react';

// CONTEXTO: canal compartido por el que viajan el carrito y sus funciones
// a cualquier componente de la app, sin pasar props nivel por nivel.
export const CartContext = createContext();

// CONSUMER: hook que lee el contexto. Lo usan los componentes (Header, Cart,
// tarjetas de producto) para acceder al carrito.
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
};

// PROVIDER: componente que guarda el estado del carrito y lo publica en el
// contexto. Debe envolver a los componentes que lo consumen (ver main.jsx).
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    // Señal que cambia en cada vaciado para que las tarjetas reinicien su contador.
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

    // Todo lo que esté en "value" queda disponible para los consumers.
    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, getCartQuantity, getCartTotal, resetVersion }}>
            {children}
        </CartContext.Provider>
    );
};
