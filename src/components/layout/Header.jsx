import styles from './Header.module.css';

function Header({ image }) {
    return (
        <header className={styles.header}>
            {image && <img className={styles.logo} src={image} alt="Logo de la tienda" />}

            <nav aria-label="Navegación principal">
                <ul className={styles.navList}>
                    <li>
                        <a className={styles.navLabel} href="#inicio">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a className={styles.navLabel} href="#productos">
                            Productos
                        </a>
                    </li>
                    <li>
                        <a className={styles.navLabel} href="#contacto">
                            Contacto
                        </a>
                    </li>
                    <li>
                        <a href="#carrito" className={styles.cartLink} aria-label="Carrito">
                            <img className={styles.cartIcon} src="/images/carrito/carrito-de-compras.png" alt="Carrito" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;