import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/Logo.png"
import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import Search from "../Search/Search";

import "./Navbar.css"
const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleShow = ( ) => setShow(!show);
    const closeNav = () => setShow(false);

    return (
        <>
            <div className="logo">
                <NavLink to="/" activeClassName="">
                    <img src={Logo} onClick={closeNav}/>
                </NavLink>
            </div>
            <button className="btn-menu" onClick={handleShow}>
                <span>
                    <i className={show ? "fas fa-times" : "fas fa-bars"}></i>
                </span>
            </button>
            <nav className={`menu d-flex align-items-center w-100 p-3 ${show ? "is-active" : ""}`}>
                <>
                    <Link to="/" onClick={closeNav}>Inicio</Link>
                    <Link to="/productos" >Productos</Link>
                    <Link to="/productos/categorias/2" >herramientas</Link>

                    <Link to="/contacto" onClick={closeNav}>Contacto</Link>
                    {show ? 
                    (<Button to="/ingresar" className="btn d-block btn-secondary" text="Iniciar Sesión"/>)
                : null}
                </>
                <div className="flex-grow-1 d-flex justify-content-end">
                    <div className="row ">
                        <div className="col-10">
                        {show ? null:(<Search/>)}
                        </div>
                        <div className="col-2 p0">
                        {show ? null:(<CartWidget/>)}
                        </div>                       
                    </div>                  
                </div>

            </nav>
        </>
    )
}
export default Navbar;