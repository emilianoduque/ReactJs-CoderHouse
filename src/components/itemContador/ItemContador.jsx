import { useState } from "react"
import "./ItemContador.scss"

const ItemContador = ({stock, addProducto}) => {
    const [contador, setContador] = useState(1);

    const handleClickRest = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }

    const handleClickAdd = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

  return (
    <div className="botonera-contador">
        <button onClick={handleClickRest}>-</button>
        <p>
            {
                contador
            }
        </p>
        <button onClick={handleClickAdd}>+</button>
        <button onClick={ () => addProducto(contador)} className="agregar">Agregar</button>
    </div>
  )
}

export default ItemContador