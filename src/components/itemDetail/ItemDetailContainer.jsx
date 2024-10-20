import { useState, useEffect } from "react";
import { getProductos } from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { idProducto } = useParams()

  useEffect( ()=> {
    getProductos()
      .then((data) => {
        const encontrarProducto = data.find((producto) => producto.id === parseInt(idProducto))
        setProducto(encontrarProducto);
      })
  },[idProducto])

  if(!producto) {
    return <p></p> //sin esto me tiraba error (debo resolverlo)
  }

  return (
    <ItemDetail producto={producto}></ItemDetail>
  )
}

export default ItemDetailContainer
