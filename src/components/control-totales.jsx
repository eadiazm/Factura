export function ControlTotales(props) {

    const subtotal = props.productos.reduce((acc, producto) => acc + (producto.valorUnitario * producto.cantidad), 0)
    const iva = subtotal * 0.16
    const total = subtotal + iva

    return (
        <div className="container">
            < div className="App" >
                <div className="text-end">Subtotal: {subtotal.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</div>
                <div className="text-end">IVA (16%): {iva.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</div>
                <div className="text-end">Total: {total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</div>
            </div >
        </div>
    )
}