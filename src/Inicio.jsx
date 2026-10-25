import { Link } from 'react-router-dom';
import styles from './Inicio.module.css';

const categorias = [
    {
        nombre: 'Alimentación',
        detalle: 'Para que crezca feliz y saludable',
        imagen: '/images/productos/alimento_perros.png',
        color: 'lavender',
    },
    {
        nombre: 'Juguetes',
        detalle: 'Diversión para todos los días',
        imagen: '/images/productos/juguete_cuerda.png',
        color: 'peach',
    },
    {
        nombre: 'Paseo',
        detalle: 'Aventuras con correa y pretal',
        imagen: '/images/productos/correa_perros.png',
        color: 'mint',
    },
    {
        nombre: 'Descanso',
        detalle: 'Su rincón favorito para soñar',
        imagen: '/images/productos/cama_perros.png',
        color: 'yellow',
    },
];

function Inicio() {
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <div className={styles.heroCopy}>
                    <span className={styles.eyebrow}>
                        <span aria-hidden="true">🐾</span> TODO PARA QUIEN TE ESPERA EN CASA
                    </span>
                    <h1>Su felicidad también es <span>la nuestra.</span></h1>
                    <p>
                        Encontrá comida, juguetes y esos pequeños mimos que hacen
                        que cada día con tu mascota sea especial.
                    </p>
                </div>
                <div className={styles.heroVisual}>
                    <div className={styles.heroBlob} />
                    <img
                        className={styles.heroImage}
                        src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85"
                        alt="Perro disfrutando de un día al aire libre"
                    />
                    <div className={styles.floatingNote}>
                        <span className={styles.heart} aria-hidden="true">♥</span>
                        <span><strong>Mucho amor</strong><br />en cada pedido</span>
                    </div>
                    <span className={styles.sparkle} aria-hidden="true">✦</span>
                    <span className={styles.pawPrint} aria-hidden="true">🐾</span>
                </div>
            </section>

            <section className={styles.categories}>
                <div className={styles.sectionHeading}>
                    <div>
                        <span className={styles.sectionEyebrow}>UN MUNDO DE MIMOS</span>
                        <h2>¿Qué necesita hoy?</h2>
                    </div>
                    <Link to="/productos" className={styles.textLink}>
                        Ver todos los productos <span aria-hidden="true">→</span>
                    </Link>
                </div>
                <div className={styles.categoryGrid}>
                    {categorias.map((categoria) => (
                        <article
                            className={`${styles.categoryCard} ${styles[categoria.color]}`}
                            key={categoria.nombre}
                        >
                            <div className={styles.categoryImage}>
                                <img src={categoria.imagen} alt="" />
                            </div>
                            <div className={styles.categoryCopy}>
                                <h3>{categoria.nombre}</h3>
                                <p>{categoria.detalle}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default Inicio;
