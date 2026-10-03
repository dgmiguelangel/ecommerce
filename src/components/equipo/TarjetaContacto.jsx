import styles from './Contacto.module.css';

function TarjetaContacto({ nombre, email, puesto, foto }) {

    return (
        <article className={styles.contactoCard}>
            {foto && (
                <div className={styles.imageContainer}>
                    <img
                        className={styles.contactoImage}
                        src={`${foto}`}
                        alt={`Foto de ${nombre}`}
                    />
                </div>
            )}
            <h2>{nombre}</h2>
            {puesto && (
                <p className={styles.puesto}>{puesto}</p>
            )}
            {email && (
                <p title={email}>{email}</p>
            )}
        </article>
    );

}
export default TarjetaContacto;