import { useEffect, useState } from 'react';

export function useGetCategorias() {

    const [categorias, setCategorias] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarCategorias = async () => {
            const inicio = Date.now();

            try {
                const respuesta = await fetch('/data/categorias.json');
                if (!respuesta.ok) {
                    throw new Error('Error al cargar las categorías.');
                }
                const datos = await respuesta.json();
                setCategorias(datos);

            } catch (errorDeCarga) {
                setError(errorDeCarga);
            } finally {
                const tiempoRestante = 1000 - (Date.now() - inicio);
                if (tiempoRestante > 0) {
                    await new Promise((resolve) => setTimeout(resolve, tiempoRestante));
                }
                setCargando(false);
            }
        };

        cargarCategorias();
    }, []);

    return { categorias, cargando, error };
}
