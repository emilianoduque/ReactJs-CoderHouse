import  useProductos from "../../customHooks/useProducts"
import { useState } from "react"
import "./hocFilter.scss"
import Slider from "../slider/Slider"

const hocFilterProductos = (Componente) => {

    return function (){

    const { productos, cargando } = useProductos();
    const [query, setQuery] = useState("");
    const [tipoOrden, setTipoOrden] = useState("");

    const changeInput = (event) => {
        setQuery(event.target.value.toLowerCase());
    };

    const buscar = () => {
        let filterProductos = productos.filter((producto)=> {
            return producto.nombre.toLowerCase().includes(query);
        })
        if(tipoOrden === "menor"){
            filterProductos = filterProductos.sort((prevProducto, sigProducto) => prevProducto.precio - sigProducto.precio)
        } else if(tipoOrden === "mayor"){
            filterProductos = filterProductos.sort((prevProducto, sigProducto) => sigProducto.precio - prevProducto.precio)
        }
        return filterProductos;
    }

   return (
    <>
    <Slider></Slider>
    
    <div className="buscador">
        <input type="text" placeholder="Buscar..." onChange={changeInput}/>
        <div className="botones">
            <button onClick={ () => setTipoOrden("menor")}>Menor</button>
            <button onClick={ () => setTipoOrden("mayor")}>Mayor</button>
        </div>
       
    </div> 
    <Componente productos={buscar()} cargando={cargando}/>
    

    </>
   )
  }
}

export default hocFilterProductos
