import { Link } from "react-router-dom";
import { CartContextUse } from "../../Context/CartContext";
import "./CartWidget.css";

const CartWidget = ({ className = "carrito-lg" }) => {
  const { iconCart } = CartContextUse();

  return (
    <>
      <Link to="/carrito" className={className}>
        {iconCart() === 0 ? null : (
            <div>
                <i className="fas fa-shopping-cart"></i>
                <span data-action="cart-can"  className="badge rounded-circle cart_num">{iconCart()}</span>
            </div>
        )}
      </Link>
    </>
  );
};

export default CartWidget;
