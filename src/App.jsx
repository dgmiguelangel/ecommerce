import './App.css';
import ProductoListContainer from './components/producto/productoListContainer';
import { Layout } from './components/layout/Layout';
import { FormularioContainer } from './components/formulario/FormularioContainer';

const guaushop = '/images/logos/logo_guaushop.png';

function App() {

  return (
    <Layout image={guaushop}>
      <ProductoListContainer />
      <FormularioContainer />
    </Layout>
  );
}
export default App;