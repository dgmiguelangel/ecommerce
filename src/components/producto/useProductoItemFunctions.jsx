import { useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';

export function useProductoItemFunctions(nombre, precio, stock, id) {

    const producto = { id, nombre, precio, stock };

    const favoriteStorageKey = `ecommerce:producto:${id}:favorito`;
    const counterStorageKey = `ecommerce:producto:${id}:contador`;

    const [contador, setContador] = useState(() => {
        const contadorGuardado = Number(localStorage.getItem(counterStorageKey));
        return Number.isInteger(contadorGuardado)
            ? Math.min(Math.max(contadorGuardado, 0), stock)
            : 0;
    });

    const [esFavorito, setEsFavorito] = useState(() =>
        localStorage.getItem(favoriteStorageKey) === 'true');

    const marcarComoFavorito = () => {
        const nuevoEstado = !esFavorito;
        localStorage.setItem(favoriteStorageKey, String(nuevoEstado));
        setEsFavorito(nuevoEstado);
    };

    const incrementar = () => {
        if (contador >= stock) return;

        const nuevoContador = contador + 1;
        localStorage.setItem(counterStorageKey, String(nuevoContador));
        setContador(nuevoContador);
    };

    const decrementar = () => {
        if (contador <= 0) return;

        const nuevoContador = contador - 1;
        localStorage.setItem(counterStorageKey, String(nuevoContador));
        setContador(nuevoContador);
    };

    const { addToCart } = useCart();

    const agregarAlCarrito = () => {
        addToCart({ ...producto, quantity: contador });
    };

    return {
        contador,
        esFavorito,
        marcarComoFavorito,
        incrementar,
        decrementar,
        agregarAlCarrito
    };
}