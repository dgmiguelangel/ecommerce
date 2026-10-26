import { useCart } from '../../context/CartContext.jsx';
import styles from './Cart.module.css';

const Cart = () => {

    const { cart, clearCart, getCartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <main className={styles.emptyCart}>
                <span className={styles.emptyCartIcon} aria-hidden="true">
                    <img className={styles.cartIcon} src="/images/carrito/carrito-de-compras.png" alt="Carrito" />
                </span>
                <h1>El carrito está vacío</h1>
                <p>Agrega productos para continuar la compra.</p>
            </main>
        );
    }

    return (
        <main className={styles.cartPage}>
            <h1 className={styles.title}>Carrito de Compras</h1>
            <div className={styles.cartItems}>
                {cart.map((item, index) => (
                    <article key={index} className={styles.cartItem}>
                        <div className={styles.itemDetails}>
                            <h2 className={styles.itemName}>{item.nombre}</h2>
                            <p className={styles.quantity}>Cantidad: {item.quantity}</p>
                        </div>
                        <div className={styles.itemPrices}>
                            <p>Precio unitario <span>${Number(item.precio).toFixed(2)}</span></p>
                            <p className={styles.subtotal}>Subtotal <span>${(item.quantity * Number(item.precio)).toFixed(2)}</span></p>
                        </div>
                    </article>
                ))}
            </div>
            <section className={styles.cartSummary} aria-label="Resumen del carrito">
                <h2>Total a pagar</h2>
                <p className={styles.total}>${getCartTotal().toFixed(2)}</p>
                <button className={styles.clearButton} onClick={clearCart}>Vaciar carrito</button>
            </section>
        </main>
    );
};

export default Cart;