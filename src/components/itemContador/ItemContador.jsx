import { useState } from "react"
import "./itemContador.scss"

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
        <div className="botones-contador">
            <button onClick={handleClickRest} className="contador-button">-</button>
            <p>
                {
                    contador
                }
            </p>
            <button onClick={handleClickAdd} className="contador-button">+</button>
        </div>
        <button onClick={ () => addProducto(contador)} className="agregar">Agregar</button>
    </div>
  )
}

export default ItemContador