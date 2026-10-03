import styles from './FormularioProductos.module.css';

export function FormularioProducto({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen, imagenFile }) {

    return (
        <form className={styles.form} onSubmit={manejarEnvio}>
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label>Nombre del Producto:</label>
                <input
                    type="text"
                    placeholder="Ej: Teclado Mecánico"
                    name="nombre"
                    value={datosForm.nombre || ''}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Precio: $</label>
                <input
                    type="number"
                    placeholder="Ej: 95"
                    name="precio"
                    value={datosForm.precio || ''}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Stock:</label>
                <input
                    type="number"
                    placeholder="Ej: 5"
                    name="stock"
                    value={datosForm.stock || ''}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label id="imagenLabel">Imagen:</label>
                <div className={styles.archivoInput}>
                    <label htmlFor="imagen" className={styles.archivoBoton}>
                        Elegir imagen
                    </label>
                    <input
                        id="imagen"
                        aria-labelledby="imagenLabel"
                        className={styles.archivoOculto}
                        type="file"
                        accept="image/*"
                        name="imagen"
                        onChange={manejarCambioImagen}
                    />
                    <span className={styles.archivoNombre}>
                        {imagenFile ? imagenFile.name : 'Ningún archivo seleccionado'}
                    </span>
                </div>
            </div>
            <button type="submit">Guardar Producto</button>
        </form>
    );

}
