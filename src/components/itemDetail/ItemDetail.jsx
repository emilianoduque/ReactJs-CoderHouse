import "./itemDetail.scss"

const ItemDetail = ({producto}) => {
  return (
    <div className="cardDetail">
      <img src={producto.img} alt="" />
      <div>
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <p>Precio: ${producto.precio}</p>
      </div>
    </div>
  )
}
export default ItemDetail;
