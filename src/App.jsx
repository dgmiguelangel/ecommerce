import './App.css';
import ProductoListContainer from './components/producto/productoListContainer';
import { Layout } from './components/layout/Layout';
import { FormularioContainer } from './components/formulario/FormularioContainer';
import { Routes, Route } from 'react-router-dom';
import DetalleProducto from './components/producto/DetalleProducto';
import ContactoListContainer from './components/equipo/ContactoListContainer';
import styles from './App.module.css';
import Inicio from './Inicio';

const guaushop = '/images/logos/logo_guaushop.png';

function App() {

  return (
    <Routes>
      <Route element={<Layout image={guaushop} />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ProductoListContainer message="Todos los productos" />} />
        <Route path="/alta-productos" element={<FormularioContainer />} />
        <Route path="/nosotros" element={<ContactoListContainer message="Nosotros" />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="*" element={<h1 className={styles.notFound}>Página no encontrada</h1>} />
      </Route>
    </Routes>
  );
}
export default App;

{/* 
function App() {
  return (
    <Layout image={guaushop}>
      <ProductoListContainer />      
    </Layout>
  );
}
*/}