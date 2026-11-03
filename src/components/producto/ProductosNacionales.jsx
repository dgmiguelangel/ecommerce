import { useState, useEffect } from 'react';
import styles from './ProductosNacionales.module.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';

function ProductosNacionales() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            const productosDB = collection(db, 'productos');
            getDocs(productosDB).then(resp => {
                setProductos(
                    resp.docs.map(doc => ({
                        id: doc.id, ...doc.data()
                    }))
                );
            });
        };
        fetchProductos();
    }, []);

    return (
        <div className={styles.container}>
            <h2>Productos Nacionales</h2>
            <ul>
                {productos.map(producto => (
                    <li key={producto.id}>
                        <div className={styles.itemInfo}>
                            <h3 className={styles.itemName}>
                                {producto.nombre}
                                {producto.destacado && <span className={styles.badge}>Destacado</span>}
                            </h3>
                            {producto.descripcion && (
                                <p className={styles.itemDescription}>{producto.descripcion}</p>
                            )}
                            <p className={styles.itemDetail}>Precio: ${Number(producto.precio).toFixed(2)}</p>
                            <p className={styles.itemDetail}>Stock: {producto.stock}</p>
                        </div>
                        {producto.image && (
                            <img
                                className={styles.itemImage}
                                src={producto.image}
                                alt={producto.nombre}
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ProductosNacionales;