import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"

const Carrito = () => {
    const { carrito, precioTotal, borrarProductoPorId, borrarCarrito} = useContext(CarritoContext);

    if(carrito.length === 0){
        return (
            <div>
                <h2>No hay productos cargados en el carrito</h2>
                <Link to="/">Volver al inicio</Link>
            </div>
        )
    }
  return (
    <div>
        <h2>Productos en el carrito</h2>
        {
            carrito.map((productoCarrito) => (
                <div key={productoCarrito.id}>
                    <img src={productoCarrito.img[0]} alt=""/>
                    <p>{productoCarrito.nombre}</p>
                    <p>{productoCarrito.cantidad}</p>
                    <p>Precio c/u {productoCarrito.precio}</p>
                    <p>Precio parcial: {productoCarrito.cantidad * productoCarrito.precio}</p>
                    
                    <button onClick={ () => borrarProductoPorId(productoCarrito.id)}>Quitar</button>
                </div>
            ))
        }
        <p>Precio Total: {precioTotal()}</p>
        <button onClick={borrarCarrito}>Borrar Carrito</button>
        <Link to="/checkout">Terminar mi compra</Link>
    </div>
  )
}

export default Carrito