import { Link } from "react-router-dom";

const CartWidget = ({className}) => {
    return (
        <>
            <Link to="/carrito" className={className} >
                <i className="fas fa-shopping-cart"></i>
            </Link>
        </>
    )
}

export default CartWidget;