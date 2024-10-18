import {Link } from "react-router-dom"

const Item = ({producto}) => {
  return (
    <Link to={"/detail/" + producto.id} className="card">
      <h2>{producto.nombre}</h2>
      <p>Precio: ${producto.precio}</p>
      <img src={producto.img} alt="" />
    </Link>
  )
}

export default Item;
