import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header({ image }) {
    return (
        <header className={styles.header}>
            {image && <img className={styles.logo} src={image} alt="Logo de la tienda" />}

            <nav aria-label="Navegación principal">
                <ul className={styles.navList}>
                    <li>
                        <Link to="/" className={styles.navLabel}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/productos" className={styles.navLabel}>
                            Productos
                        </Link>
                    </li>
                    <li>
                        <Link to="/alta-productos" className={styles.navLabel}>
                            Alta de Productos
                        </Link>
                    </li>
                    <li>
                        <Link to="/nosotros" className={styles.navLabel}>
                            Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className={styles.cartLink} aria-label="Carrito">
                            <img className={styles.cartIcon} src="/images/carrito/carrito-de-compras.png" alt="Carrito" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;

{/*
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
*/}