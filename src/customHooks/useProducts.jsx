import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore"
import db from "../db/db.js";

const useProductos = () => {
    const [ productos, setProductos ] = useState([]);
    const {idCategoria} = useParams();
    const [ cargando, setCargando] = useState(true);

    const getProductos = ()=> {
        setCargando(true);
        const productosRef = collection(db, "Productos");
        getDocs(productosRef)
            .then((dataBd) => {
                const productosBd = dataBd.docs.map((productoBd) => {
                    return {id: productoBd.id, ...productoBd.data()}
                })
                setProductos(productosBd)
                setCargando(false);
            })
    }

    const getProductosCategoria = () => {
        const productosRef = collection(db, "Productos");
        const queryCategorias = query(productosRef, where("categoria", "==", idCategoria))
        setCargando(true);
        getDocs(queryCategorias)
            .then((dataBd) => {
                const productosBd = dataBd.docs.map((productoBd) => {
                    return { id: productoBd.id, ...productoBd.data()}
                })
                setProductos(productosBd)
                setCargando(false);
            })
    }

    useEffect( () => {
        if(idCategoria){
            getProductosCategoria()
        } else {
            getProductos()
        }
    }, [idCategoria])
    
    return { productos, cargando}
}

export default useProductos;