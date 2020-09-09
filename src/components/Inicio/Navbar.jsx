import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(props) {
    return (

        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Yala">Buscar Trabajo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Usuarios">Usuarios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Yala">Perfil</a>
            </li>
          </ul>
        </nav>

    );
}

export default Navbar;