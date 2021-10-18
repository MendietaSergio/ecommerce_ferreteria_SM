import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../images/Logo.png"
import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import Search from "../Search/Search";
import {NavDropdown} from "react-bootstrap"
import "./Navbar.css"
import { getFirestore } from "../../services/getFirebase";
const NavbarHeader = ({
    activeBtnCart
}) => {
    const [show, setShow] = useState(false);
    const handleShow = ( ) => setShow(!show);
    const closeNav = () => setShow(false);
    
    const [listCategory, setListCategory] = useState([])
    const [subListCategory, setSubListCategory] = useState([])
    const dbQuery = getFirestore()
    useEffect(()=>{    
        getCategory()
        getSubCategory()
        
    },[])
    const getCategory = async () =>{
    await dbQuery.collection('category').get()
    .then(resp=>{
        setListCategory(resp.docs.map(item => ({id: item.id, ...item.data()})))
    })
    .catch(error => console.log(error))
    }
    
    const getSubCategory = async () =>{
    await dbQuery.collection('subCategory').get()
        .then(resp=>{
            setSubListCategory(resp.docs.map(item => ({id: item.id, ...item.data()})))
        })
    }
    
    return (
        <>        
            <div className="logo">
                <NavLink to="/" activeClassName="">
                    <img src={Logo} alt="Logo" onClick={closeNav}/>
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
                            <div key={category.id} className="divmenu2">
                                <NavDropdown title={category.name} id="basic-nav-dropdown">
                                    {subListCategory.filter(subCategory=> subCategory.name_category === category.name).map(subCategory =>(
                                        <div key={subCategory.id}  >
                                            <NavDropdown.Item  href={`/productos/${category.name}/${subCategory.name}`}>{subCategory.name}</NavDropdown.Item>
                                        </div>
                                    ))}                                    
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href={`/productos/${category.name}`}>Ver más</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        ))}                       
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/productos">Ver más</NavDropdown.Item>
                    </NavDropdown>
                    <Link to="/contacto" onClick={closeNav}>Contacto</Link>
                    {show ? 
                    (<Link to="/ingresar" onClick={closeNav}>
                        <Button  className="btn d-block btn-secondary" text="Iniciar Sesión"/>
                    </Link>)
                : null}
                </>
                <div className="flex-grow-1 d-flex justify-content-end">
                    <div className="row ">
                        <div className="col-9">
                        {show ? null:(<Search  />)}
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                        {show ? null:(<CartWidget activeBtnCart={activeBtnCart}/>)}
                        </div>                       
                    </div>                  
                </div>

            </nav>
        </>
    )
}
export default NavbarHeader;