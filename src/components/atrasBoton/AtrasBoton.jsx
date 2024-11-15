import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./atrasBoton.scss"

const AtrasBoton = () => {
    const navegar = useNavigate();
    return (
      <button className="boton-atras" onClick={() => navegar(-1)}>
        <IoArrowBackCircle className="icon"></IoArrowBackCircle>
      </button>
    )
  }

export default AtrasBoton