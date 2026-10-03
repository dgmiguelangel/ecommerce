import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

fetch('/data/productos.json')
  .then(respuesta => {
    console.log('Respuesta cruda del servidor:', respuesta);
    return respuesta.json();
  })
  .then(datos => {
    console.log('¡Productos cargados!', datos);
  })
  .catch(error => {
    console.error('¡Ups! Hubo un error:', error);
  })
  .finally(() => {
    console.log('¡Petición finalizada!');
  });
