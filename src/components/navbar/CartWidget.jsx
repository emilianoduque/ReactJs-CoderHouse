import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CarritoContext} from "../../context/CarritoContext"
import { Link } from "react-router-dom";
import "./cartwidget.scss"

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
    const cantidad = cantidadTotal();

  return (
    <Link to="/carrito" className="carrito-widget">
    <p className={cantidad === 0 ? "carrito-vacio" : "en-uso"}>
    <FaShoppingCart className="icono"></FaShoppingCart>
    </p>
    <p>
    {
      cantidad >= 1 && cantidad
    }
    </p>
    
    </Link>
  )
}
export default CartWidget