import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div className="cart">
    <FaShoppingCart className="cartIcon"/>
    <p className="cartAmount">2</p>
    </div>
  )
}
export default CartWidget