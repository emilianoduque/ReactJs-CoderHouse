import { useState, useContext } from "react";
import ItemContador from "../itemContador/ItemContador";
import { Link } from "react-router-dom";
import "./itemDetail.scss"
import {CarritoContext} from "../../context/CarritoContext"
import "./itemDetail.scss";
import AtrasBoton from "../atrasBoton/AtrasBoton";

const ItemDetail = ({producto}) => {

  const [showItemContador, setShowItemContador] = useState(true);
  const {addProductoCarrito} = useContext(CarritoContext);

  const addProducto = (contador) => {
    const productoCarrito = { ...producto, cantidad:contador}
    addProductoCarrito(productoCarrito);
    setShowItemContador(false);
  };

  const [currentImagen, setCurrentImagen] = useState(producto.img[0]);
  const imagenes = [...producto.img]; 
  
  return (
    <>
      <AtrasBoton></AtrasBoton>
      <div className="item-detail">
      <div className="imagenes-detail-container">
        <div className="imagenes-secundarias">
          {
            imagenes.map((imagen) => (
              <img src={imagen} key={imagen} onMouseMove={ () => setCurrentImagen(imagen)}/>
            ))
          }
        </div>

        <div className="imagen-principal">
          <img src={currentImagen} alt="Imagen Principal"/>
        </div>

        <div className="informacion">
            <h2>{producto.nombre}</h2>
            <p className="descripcion">{producto.descripcion}</p>
            <p className="precio">Precio: ${producto.precio}</p>
            {
              showItemContador === true ? (<ItemContador stock={producto.stock} addProducto={addProducto}></ItemContador>) : (<Link to="/carrito" className="terminar-compra">Terminar compra</Link>)
            }
        </div>
      </div>
    </div>
    </>    
  )
}
export default ItemDetail;
