import { Link } from 'react-router-dom';
import styles from './Producto.module.css';
import { useProductoItemFunctions } from './useProductoItemFunctions';

function TarjetaProducto(props) {

    const {
        contador,
        esFavorito,
        marcarComoFavorito,
        incrementar,
        decrementar,
        agregarAlCarrito
    } = useProductoItemFunctions(props.nombre, props.precio, props.stock, props.id, props.image);

    return (
        <article className={styles.productCard}>
            {props.stock > 0 ? (
                <p className={styles.inStock}>En Stock</p>
            ) : (
                <p className={styles.outOfStock}>Agotado</p>
            )}
            {props.image && (
                <div className={styles.imageContainer}>
                    <img className={styles.productImage} src={props.image} alt={props.nombre} />
                    <button
                        type="button"
                        className={styles.favoriteButton}
                        onClick={marcarComoFavorito}
                    >
                        {esFavorito ? '⭐' : '☆'}
                    </button>
                </div>
            )}
            <h2 className={styles.productName}>{props.nombre}</h2>
            <p className={styles.details}>Precio: ${props.precio.toFixed(2)}</p>
            <p className={styles.details}>Stock: {props.stock}</p>
            <Link to={`/producto/${props.id}`} className={styles.viewDetailsLink}>
                Detalle del Producto
            </Link>

            <div className={styles.counter}>
                <button onClick={decrementar} disabled={contador === 0}>-</button>
                <span>{contador}</span>
                <button onClick={incrementar} disabled={contador === props.stock}>+</button>
            </div>
            <button onClick={agregarAlCarrito} className={styles.addToCartButton} disabled={props.stock === 0}>
                Agregar al Carrito
            </button>
        </article>
    );

}
export default TarjetaProducto;