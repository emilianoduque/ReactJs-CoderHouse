import { useState, useEffect } from "react";
import { getProductos } from "../../data/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../loading/Loading";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { idProducto } = useParams()

  const [loading, setLoading] = useState(true);

  useEffect( ()=> {
    setLoading(true)
    getProductos()
      .then((data) => {
        const encontrarProducto = data.find((producto) => producto.id === parseInt(idProducto))
        setProducto(encontrarProducto);
      })
      .finally(()=> setLoading(false))
  },[idProducto])

  return (
    <>
      {loading ? (<Loading/>) : producto ? (<ItemDetail producto={producto} />) : (null)}
    </>
   
  )
}

export default ItemDetailContainer
