import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"

export const CarritoPage = () => {

    const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } = useContext(CarritoContext)

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
    }

    const handleImpression = () => {
        print()
    }

    return (
        <div className="container">
            <table className="table table-bg-primary custom-table">
                <thead className="table-bg-primary">
                    <tr>
                        <th scope="col">Código</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCompras.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>S/{item.price}</td>
                                <td>
                                    <button className="btn btn-outline-primary" onClick={() => disminuirCantidad(item.id)}> - </button>
                                    <button className="btn btn-primary">{item.cantidad}</button>
                                    <button className="btn btn-outline-primary" onClick={() => aumentarCantidad(item.id)}>+</button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => eliminarCompra(item.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td><b>TOTAL:</b></td>
                        <td></td>
                        <td>S/{calcularTotal()}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button
                    className="btn btn-warning"
                    onClick={handleImpression}>
                    COMPRAR
                </button>
            </div>
        </div>
    )
}
