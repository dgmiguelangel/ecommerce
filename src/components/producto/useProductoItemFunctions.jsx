import { useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';

export function useProductoItemFunctions(nombre, precio, stock, id, image) {

    const producto = { id, nombre, precio, stock, image };

    const { addToCart, resetVersion } = useCart();

    const favoriteStorageKey = `ecommerce:producto:${id}:favorito`;
    const counterStorageKey = `ecommerce:producto:${id}:contador`;

    const [esFavorito, setEsFavorito] = useState(() =>
        localStorage.getItem(favoriteStorageKey) === 'true');

    const [contador, setContador] = useState(() => {
        const contadorGuardado = Number(localStorage.getItem(counterStorageKey));
        return Number.isInteger(contadorGuardado)
            ? Math.min(Math.max(contadorGuardado, 0), stock)
            : 0;
    });

    const [versionVista, setVersionVista] = useState(resetVersion);


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

    if (versionVista !== resetVersion) {
        setVersionVista(resetVersion);
        setContador(0);
    }

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