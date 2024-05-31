export function GridProductos(props) {
    const handleEliminar = (index) => {
        const confirmacion = window.confirm("¿Desea realmente eliminar el registro?");
        if (confirmacion) {
            // Llama a la función para eliminar el producto
            props.onEliminarProducto(index);
        }
    }

    return (
        <div className="container">
            <table className="table table-bordered">
                <thead>
                    <tr className="table-secondary">
                        <th scope="col">ID Producto</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Valor Unitario</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Subtotal</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {props.productos.map((producto, index) => (
                        <tr key={index}>
                            <td>{producto.idProducto}</td>
                            <td>{producto.descripcion}</td>
                            <td>{parseFloat(producto.valorUnitario).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
                            <td>{producto.cantidad}</td>
                            <td>{(producto.valorUnitario * producto.cantidad).toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleEliminar(index)}
                                >Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}