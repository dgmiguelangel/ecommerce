import ProductoList from './ProductoList';
import styles from './Producto.module.css';
import { useGetProductos } from './useGetProductos';

function ProductoListContainer() {

    const { productos, cargando, error } = useGetProductos();

    if (cargando) {
        return (
            <div className={styles.loadingMessage} role="status" aria-live="polite">
                <p>Cargando productos...</p>
            </div>
        );
    }

    if (error) {
        return <p>Error al cargar los productos.</p>;
    }

    return (
        <ProductoList productos={productos} />
    );
}
export default ProductoListContainer;