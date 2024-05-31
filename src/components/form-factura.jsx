import React, { useState } from 'react';
import '../css/FormFactura.css'; // Importa el archivo de estilos CSS

export function FormFactura({ onAgregarProducto }) {
    const [formData, setFormData] = useState({
        numeroFactura: '',
        nombreCliente: '',
        cedula: '',
        telefono: '',
        email: '',
        idProducto: '',
        descripcion: '',
        valorUnitario: '',
        cantidad: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const { idProducto, descripcion, valorUnitario, cantidad } = formData;

        if (idProducto.trim() !== '' && descripcion.trim() !== '' && valorUnitario !== '' && cantidad !== '') {
            const producto = {
                idProducto,
                descripcion,
                valorUnitario,
                cantidad
            };
            onAgregarProducto(producto);
            setFormData({
                ...formData,
                idProducto: '',
                descripcion: '',
                valorUnitario: '',
                cantidad: ''
            });
        }
    };

    return (

        <div className="container">
            <form className="row g-3 mb-4" onSubmit={handleSubmit}>
                <div className="col-md-12">
                    <h1 className='text-center'>Factura</h1>
                </div>
                <div className="col-md-6">
                    <label htmlFor="numeroFactura" className="form-label fw-bold">Número de Factura:</label>
                    <input type="text" className="form-control" id="numeroFactura" value={formData.numeroFactura} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="nombreCliente" className="form-label fw-bold">Nombre del Cliente:</label>
                    <input type="text" className="form-control" id="nombreCliente" value={formData.nombreCliente} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="cedula" className="form-label fw-bold">Cédula:</label>
                    <input type="text" className="form-control" id="cedula" value={formData.cedula} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="telefono" className="form-label fw-bold">Teléfono:</label>
                    <input type="text" className="form-control" id="telefono" value={formData.telefono} onChange={handleChange} placeholder="57-1-1111111" />
                </div>
                <div className="col-12">
                    <label htmlFor="email" className="form-label fw-bold">Correo:</label>
                    <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} placeholder="correo_del_cliente@gmail.com" />
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" id="idProducto" value={formData.idProducto} onChange={handleChange} placeholder="Id Producto" />
                </div>
                <div className="col-6">
                    <input type="text" className="form-control" id="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripción" />
                </div>
                <div className="col-6">
                    <input type="number" className="form-control" id="valorUnitario" value={formData.valorUnitario} onChange={handleChange} placeholder="Valor Unitario" />
                </div>
                <div className="col-6">
                    <input type="number" className="form-control" id="cantidad" value={formData.cantidad} onChange={handleChange} placeholder="Cantidad" />
                </div>
                <div className="col-12 d-grid gap-2">
                    <button type="submit" className="btn btn-success btn-block">Agregar Producto</button>
                </div>
            </form>
        </div>
    );
}
