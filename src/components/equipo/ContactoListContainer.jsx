import ContactoList from './ContactoList';
import styles from './Contacto.module.css';
import { useGetContactos } from './useGetContactos';

function ContactoListContainer() {

    const { contactos, cargando, error } = useGetContactos();

    if (cargando) {
        return (
            <div className={styles.loadingMessage} role="status" aria-live="polite">
                <p>Cargando contactos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.errorMessage} role="alert">
                <p>Error al cargar los contactos.</p>
            </div>
        );
    }

    return (
        <ContactoList contactos={contactos} />
    );
}
export default ContactoListContainer;