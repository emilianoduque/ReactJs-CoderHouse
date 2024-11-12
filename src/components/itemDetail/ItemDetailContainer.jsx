import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import Loading from "../loading/Loading.jsx";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [cargando, setCargando] = useState(true);
  const {idProducto} = useParams();

  const getProductoPorId = () => {
    const docRef = doc(db, "Productos", idProducto);
    getDoc(docRef)
      .then((dataBd) => {
        const productoBd = { id: dataBd.id, ...dataBd.data()}
        setProducto(productoBd);
      })
      .finally(() => {
        setCargando(false)
      })
  }
  useEffect(() => {
    setCargando(true);
    getProductoPorId();
  }, [idProducto])

  return (
    <>
    
    {
      cargando === true ? (<Loading></Loading>) :
      <ItemDetail producto={producto}></ItemDetail>
    }

    </>
  )
}

export default ItemDetailContainer