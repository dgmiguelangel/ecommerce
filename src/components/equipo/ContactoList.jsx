import TarjetaContacto from './TarjetaContacto';
import styles from './Contacto.module.css';

function ContactoList({ contactos }) {

    return (
        <div className={styles.contactoList}>
            {contactos.map((contacto, index) => (
                <TarjetaContacto key={index} className={styles.contactoCard} {...contacto} />
            ))}
        </div>
    );

}
export default ContactoList;