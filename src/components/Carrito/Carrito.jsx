import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import AtrasBoton from "../atrasBoton/atrasBoton";
import "./carrito.scss";

const Carrito = () => {
    const { carrito, precioTotal, borrarProductoPorId, borrarCarrito} = useContext(CarritoContext);
    if(carrito.length === 0){
        return (
            <div className="sin-productos">
                <h2>No hay productos cargados en el carrito</h2>
                <Link to="/" className="volver">Volver al inicio</Link>
            </div>
        )
    }
  return (
    <div className="carrito-productos">
        <AtrasBoton></AtrasBoton>
        <h2>Productos en el carrito</h2>
        {
            carrito.map((productoCarrito) => (
                <div key={productoCarrito.id} className="producto-cart">
                    <img src={productoCarrito.img[0]} alt=""/>
                    <p className="nombre">{productoCarrito.nombre}</p>
                    <p>{productoCarrito.cantidad}</p>
                    <p>Precio c/u {productoCarrito.precio}</p>
                    <p>Precio parcial: {productoCarrito.cantidad * productoCarrito.precio}</p>
                    
                    <button onClick={ () => borrarProductoPorId(productoCarrito.id)}>Quitar</button>
                </div>
            ))
        }
        <p className="precio-total">Precio Total: ${precioTotal()}</p>
        <div className="botonera">
            <Link to="/checkout" className="comprar">Comprar</Link>
            <button onClick={borrarCarrito} className="borrar-carrito">Vaciar</button>
        </div>
    </div>
  )
}

export default Carrito