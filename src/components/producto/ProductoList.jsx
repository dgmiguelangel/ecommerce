import TarjetaProducto from './TarjetaProducto';
import styles from './Producto.module.css';

function ProductoList({ productos }) {

    return (
        <div className={styles.productList}>
            {productos.map((producto, index) => (
                <TarjetaProducto key={index} className={styles.productCard} {...producto} />
            ))}
        </div>
    );

}
export default ProductoList;