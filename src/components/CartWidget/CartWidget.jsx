import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CartContextUse } from "../../Context/CartContext";
import ContainerCart from "../ContainerCart/ContainerCart";
import "./CartWidget.css";
import Button from "../Button/Button"

const CartWidget = ({ 
  className = "carrito-lg",
  activeBtnCart
}) => {
  const { iconCart } = CartContextUse();
  const [showCartList, setShowCartList] = useState(false);

  return (
    <>
      {/* <Link to="/carrito" className={className}> */}
      {iconCart() === 0 ? null : (
        <div className={className}>
          <i className="fas fa-shopping-cart" onClick={() => setShowCartList(!showCartList)}></i>
          <span
            data-action="cart-can"
            className="badge rounded-circle cart_num"
          >
            {iconCart()}
          </span>
        </div>
      )}
      {showCartList ? (
        <>
          <div className="container-cart-list">
            <div className="container-closeCartList">
              <span
                className="badge rounded-circle closeCartList"
                onClick={() => setShowCartList(false)}
              >
                X
              </span>
            </div>
            <div className="productCartList">
              <ContainerCart activeBtnCart={activeBtnCart} />
              <div className="row">
                <div className="col d-flex justify-content-center mx-5 my-5">
                  <Link 
                    to="/carrito"
                    onClick={() => setShowCartList(false)}
                    >
                    <Button
                      className="btn btn-primary mx-2"
                      text="Ir al carrito"
                      
                      />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
      {/* </Link> */}
    </>
  );
};

export default CartWidget;
