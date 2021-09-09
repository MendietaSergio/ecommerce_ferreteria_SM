import './Header.css'
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button"
import CartWidget from '../CartWidget/CartWidget';
import Search from '../Search/Search';
const NavBar = () => {
    return (
        <>
            <header className="container-fluid header shadow">
                <div className=" ">
                    <div className="row header_top">
                        <div className="container">
                            <div className="col my-2 justify-content-center d-flex w-100">
                                <div className="col contact">
                                    <span>tel: 123456789</span>
                                </div>
                                <div className="col contact">
                                    <span>Email:ferredelbarrio@gmail.com</span>
                                </div>
                                <div className="col buscador my-3">
                                    <Search className="buscador  justify-content-end d-flex"/>
                                </div>
                                <div className="col justify-content-end d-flex">
                                        <Button to="/login" className="btn btn-secondary" text="Iniciar Sesión" />
                                        <CartWidget className="carrito"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="container">
                        <Navbar />
                    </section>
                </div>
            </header>
        </>
    )
}
export default NavBar;