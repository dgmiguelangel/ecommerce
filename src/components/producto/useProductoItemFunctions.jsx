import { useState } from 'react';
import { useCart } from '../../context/CartContext.jsx';

export function useProductoItemFunctions(nombre, precio, stock, id, image) {

    const producto = { id, nombre, precio, stock, image };

    const { updateQuantity, getCantidadActual, resetVersion } = useCart();

    const cantidadActual = getCantidadActual(id);

    const [contador, setContador] = useState(() => Math.min(cantidadActual, stock));

    const [mensaje, setMensaje] = useState('');

    const favoriteStorageKey = `ecommerce:producto:${id}:favorito`;
    const [versionVista, setVersionVista] = useState(resetVersion);


    const [esFavorito, setEsFavorito] = useState(() =>
        localStorage.getItem(favoriteStorageKey) === 'true');

    const marcarComoFavorito = () => {
        const nuevoEstado = !esFavorito;
        localStorage.setItem(favoriteStorageKey, String(nuevoEstado));
        setEsFavorito(nuevoEstado);
    };

    const incrementar = () => {
        if (contador >= stock) return;

        setContador(contador + 1);
    };

    const decrementar = () => {
        if (contador <= 0) return;

        setContador(contador - 1);
    };

    if (versionVista !== resetVersion) {
        setVersionVista(resetVersion);
        setContador(0);
    }

    const agregarAlCarrito = () => {
        updateQuantity(producto, contador);
        setMensaje(`Agregaste ${contador} producto${contador === 1 ? '' : 's'}`);
    };

    return {
        contador,
        esFavorito,
        marcarComoFavorito,
        incrementar,
        decrementar,
        agregarAlCarrito,
        mensaje
    };
}