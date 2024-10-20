import {Link } from "react-router-dom"
import "./item.scss"

const Item = ({producto}) => {
  return (
    <Link to={"/detalle/" + producto.id} className="card">
      <h2>{producto.nombre}</h2>
      <img src={producto.img} alt="Img"/>
      <p>Precio: ${producto.precio}</p>
    </Link>
  )
}

export default Item;
