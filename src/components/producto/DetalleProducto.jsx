import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './DetalleProducto.module.css';

function DetalleProducto() {

    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        fetch('/data/productos.json')
            .then(response => response.json())
            .then(data => {
                const productoEncontrado = data.find(p => p.id === parseInt(id));
                setProducto(productoEncontrado);
            })
            .catch(error => console.error("Error al cargar el producto:", error));
    }, [id]);

    if (!producto) {
        return <h2 className={styles.mensaje}>Cargando detalle del producto...</h2>;
    }

    if (!producto.id) {
        return <h2 className={styles.mensaje}>Producto no encontrado.</h2>;
    }

    return (
        <section className={styles.detalle}>
            <h2 className={styles.titulo}>Detalle del producto</h2>
            <div className={styles.contenido}>
                {producto.image && (
                    <img className={styles.imagen} src={producto.image} alt={producto.nombre} />
                )}
                <div className={styles.info}>
                    <h3 className={styles.nombre}>{producto.nombre}</h3>
                    {producto.descripcion && <p className={styles.descripcion}>{producto.descripcion}</p>}
                    <p className={styles.precio}>${producto.precio}</p>
                </div>
            </div>
            <Link to="/productos" className={styles.volver}>
                Volver al Listado
            </Link>
        </section>
    );
}

export default DetalleProducto;