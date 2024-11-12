import {Link } from "react-router-dom"
import "./item.scss"

const Item = ({producto}) => {
  return (
    <Link to={"/detalle/" + producto.id} className="card">
       <img src={producto.img[0]} alt="Img"/>
      <div className="subCard">
        <h2>{producto.nombre}</h2>
        <p>${producto.precio}</p>
      </div>
    </Link>
  )
}

export default Item;
