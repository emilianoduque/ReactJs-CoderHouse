import CartWidget from "../cartwidget/CartWidget"
import "./navbar.css"


const NavBar = () => {
    return (
        <nav>
            <ul>
                <li className="brand">Smartify</li>
                <li>Inicio</li>
                <li>Catálogo</li>
                <li>Contacto</li>
                <CartWidget></CartWidget>
            </ul>
        </nav>
    )
}
export default NavBar