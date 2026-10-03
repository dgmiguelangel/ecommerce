import { useEffect, useState } from 'react';

export function useGetContactos() {

    const [contactos, setContactos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarContactos = async () => {
            try {
                const respuesta = await fetch('/data/contactos.json');
                if (!respuesta.ok) {
                    throw new Error('Error al cargar los contactos.');
                }
                const datos = await respuesta.json();
                setContactos(datos);
            } catch (errorDeCarga) {
                setError(errorDeCarga);
            } finally {
                setCargando(false);
            }
        };

        cargarContactos();
    }, []);

    return { contactos, cargando, error };
}
