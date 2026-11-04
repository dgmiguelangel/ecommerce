import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

export function useGetProductos() {

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarProductos = async () => {
            const inicio = Date.now();

            try {
                {/*const respuesta = await fetch('/data/productos.json');
                if (!respuesta.ok) {
                    throw new Error('Error al cargar los productos.');
                }
                const datos = await respuesta.json();
                setProductos(datos);*/}

                const productosDB = collection(db, 'productos');
                const resp = await getDocs(productosDB);
                setProductos(
                    resp.docs.map(doc => ({
                        id: doc.id, ...doc.data()
                    }))
                );

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

        cargarProductos();
    }, []);

    return { productos, cargando, error };
}
