import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
import "./navbar.scss"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#">Smartify</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/categoria/iluminacion"} className="nav-link">Iluminación</Link>
              </li>
              <li className="nav-item">
                <Link to={"/categoria/control_clima"} className="nav-link">Control de clima</Link>
              </li>
              <li className="nav-item">
                <Link to={"/categoria/seguridad"} className="nav-link">Seguridad</Link>
              </li>
              <li className="nav-item">
                <Link to={"/categoria/electrodomesticos"} className="nav-link">Electrodomésticos</Link>
              </li>
            </ul>

            <CartWidget></CartWidget>
          </div>
        </div>
      </nav>
    )
}
export default NavBar
