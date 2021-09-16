import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/Logo.png"
import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import Search from "../Search/Search";
import getFetchCategory from "../../mocks/category"
import getFetchSubCategory from "../../mocks/subCategory"
import {NavDropdown} from "react-bootstrap"
import "./Navbar.css"
const NavbarHeader = () => {
    const [show, setShow] = useState(false);
    const handleShow = ( ) => setShow(!show);
    const closeNav = () => setShow(false);
    const [listCategory, setListCategory] = useState([])
    const [subListCategory, setSubListCategory] = useState([])

    useEffect(()=>{    
    const getCategory = async() =>{
        await getFetchCategory
        .then(res=>{
            setListCategory(res)
        })
        .catch(error => console.log(error))
    }
    const getSubCategory = async() =>{
        await getFetchSubCategory
        .then(res=>{
            setSubListCategory(res)
        })
        .catch(error => console.log(error))
    }
    getCategory()
    getSubCategory()
},[])
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
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                        {listCategory.map(category =>(
                            <> 
                            <div key={category.id} className="divmenu2">
                                <NavDropdown title={category.title} id="basic-nav-dropdown">
                                    {subListCategory.filter(subCategory=> subCategory.id_category == category.id).map(subCategory =>(
                                        <>
                                        <div key={subCategory.id}  >
                                            <NavDropdown.Item  href={`/productos/${category.title}/${subCategory.title}`}>{subCategory.title}</NavDropdown.Item>
                                            {console.log("subcategory: ", subCategory)}
                                        </div>
                                        </>
                                    ))}                                    
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href={`/productos/${category.title}`}>Ver más</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            </>
                        ))}                       
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/productos">Ver más</NavDropdown.Item>
                    </NavDropdown>
                    <Link to="/contacto" onClick={closeNav}>Contacto</Link>
                    {show ? 
                    (<Button to="/ingresar" className="btn d-block btn-secondary" text="Iniciar Sesión"/>)
                : null}
                </>
                <div className="flex-grow-1 d-flex justify-content-end">
                    <div className="row ">
                        <div className="col-10">
                        {show ? null:(<Search />)}
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
export default NavbarHeader;