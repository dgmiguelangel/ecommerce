import ContactoListContainer from "../equipo/ContactoListContainer";
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2025 - E-commerce de Productos de Mascotas</p>
            <ContactoListContainer />
        </footer>
    );
}
export default Footer;