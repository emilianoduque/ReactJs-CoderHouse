import { useState, useEffect } from "react";
import { getProductos } from "../data/data";
import { useParams } from "react-router-dom";

const useProductos = () => {
    const [ productos, setProductos ] = useState([]);
    const {idCategoria} = useParams()

    useEffect( () => {
        getProductos()
            .then((data) => {
                if(idCategoria){
                    const filterProductos =  data.filter((producto) => producto.categoria === idCategoria);
                    setProductos(filterProductos);
                } else {
                    setProductos(data);
                }
            })
            .catch((error) => console.error(error))
    }, [idCategoria])

    return { productos }
}

export default useProductos;