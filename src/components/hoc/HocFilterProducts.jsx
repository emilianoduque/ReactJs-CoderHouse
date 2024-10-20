import  useProductos from "../../customHooks/useProducts"
import { Component, useState } from "react"
import "./hocFilter.scss"

const hocFilterProductos = (Component) => {

    return function () {
        const { productos } = useProductos();
        const [query, setQuery] = useState("");
        const [typeOrder, setTypeOrder] = useState("")

        const capturarInput = (event) => {
            setQuery(event.target.value.toLowerCase())
        };

        const buscar = () => {
            let filterProductos = productos.filter((producto) => {
                return producto.nombre.toLowerCase().includes(query)
            });

        if(typeOrder === "menor"){
            filterProductos = filterProductos.sort((prevProducto, nuevProducto) => prevProducto.precio - nuevProducto.precio)
        } else if (typeOrder === "mayor"){
            filterProductos = filterProductos.sort((prevProducto, nuevProducto) => nuevProducto.precio - prevProducto.precio)
        }

        return filterProductos;
        }
  

    return ( 
        <>
            <div className="searchDiv">
                <input type="text" placeholder="buscar..." onChange={capturarInput}/>
                <div className="buttons">
                    <button onClick={() => setTypeOrder("menor")}>Menor</button>
                    <button onClick={() => setTypeOrder("mayor")}>Mayor</button>
                </div>
            </div>
            <Component productos ={buscar()}/>
        </>
    )
    }
}

export default hocFilterProductos
