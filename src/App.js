import { useState } from 'react';
import './App.css';
import { FormFactura } from './components/form-factura';
import { GridProductos } from './components/grid-productos';
import { ControlTotales } from './components/control-totales';

function App() {
  const [productos, setProductos] = useState([]);

  const agregarProducto = (producto) => {
    setProductos([...productos, producto]);
  };

  const eliminarProducto = (index) => {
    const nuevosProductos = productos.filter((_, i) => i !== index);
    setProductos(nuevosProductos);
  }

  return (
    <div className="App">
      <FormFactura onAgregarProducto={agregarProducto}></FormFactura>
      <GridProductos productos={productos} onEliminarProducto={eliminarProducto}></GridProductos>
      <ControlTotales productos={productos}></ControlTotales>
    </div>
  );
}

export default App;
