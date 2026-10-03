import { useState } from 'react';

export function useProductoItemFunctions(nombre, stock) {

    const [contador, setContador] = useState(0);
    const [esFavorito, setEsFavorito] = useState(false);

    const marcarComoFavorito = () => {
        setEsFavorito((favoritoActual) => !favoritoActual);
    };

    const incrementar = () => {
        setContador((contadorActual) =>
            contadorActual < stock ? contadorActual + 1 : contadorActual
        );
    };

    const decrementar = () => {
        setContador((contadorActual) => Math.max(0, contadorActual - 1));
    };

    const agregarAlCarrito = () => {
        alert(`Agregaste ${nombre} al carrito`);
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