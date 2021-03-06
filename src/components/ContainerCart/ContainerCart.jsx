import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "./ContainerCart.css";
import { CartContextUse } from "../../Context/CartContext";
import CartEmpty from "../../images/carritoVacio.png";
import { Link } from "react-router-dom";
import FormPurchase from "../FormPurchase/FormPurchase";

const ContainerCart = ({ activeBtnCart }) => {
  const [show, setShow] = useState(false);
  const { clear, removeItem, cart } = CartContextUse();
  const [priceTotal, setPriceTotal] = useState(0);
  const ViewForm = () => {
    setShow(true);
  };
  useEffect(() => {
    let sumTotal = 0;
    cart.map((element) => (sumTotal += element.item.price * element.quantity));
    setPriceTotal(sumTotal);
  }, [cart]);
  
  return (
    <>
      <div className="col shadow my-5">
        <div className="col">
          <h4 className="text-center ">Contenido del carrito</h4>
          <hr />
        </div>
        {cart.length === 0 ? (
          <>
            <div className="py-4">
              <h1 className="text-center my-3">No hay nada por aquí...</h1>
              <img className="card-img-top" src={CartEmpty} alt="Carrito vacío" />
              <h3 className="text-center my-3">
                Puedes ver mas{" "}
                <Link className="products" to="/productos">
                  productos
                </Link>
              </h3>
            </div>
          </>
        ) : (
          <>
            {cart.map((element) => (
              <div key={element.id} className="row pb-4">
                <div className="row my-3">
                  <div className="col">
                    <img
                      className="card-img-top"
                      src={element.item.picture}
                      alt="Producto"
                    />
                  </div>
                  <div className="col">
                    <div className="d-flex flex-column text-left">
                      <h5>{element.item.nameProduct}</h5>
                      <Link to={`/detalle/${element.item.id}`}>Detalle</Link>
                    </div>
                  </div>
                  <div className="col text-center">
                    <h5>precio</h5>
                    <span>{element.item.price},00</span>
                  </div>
                  <div className="col text-center">
                    <h5>Cantidad</h5>
                    <input
                      className="input-cart"
                      defaultValue={element.quantity}
                      type="number"
                      min="1"
                      max="10"
                    />
                  </div>
                  <div className="col text-center">
                    <h5>TOTAL</h5>
                    <span>{element.item.price * element.quantity},00</span>
                    <br />
                    <i
                      className="far fa-trash-alt"
                      onClick={() => removeItem(element.item.id)}
                    ></i>
                  </div>
                </div>
                <hr />
              </div>
            ))}
            <div className="row">
              <div className="col">
                <h4 className="sub-amount">Subtotal: {priceTotal}</h4>
              </div>
            </div>
            {activeBtnCart ? (null) : (
              <div className="row">
                <div className="col d-flex justify-content-center mx-5 mb-5">
                  <Button
                    to="/productos"
                    className="btn btn-primary mx-2"
                    text="Seguir Comprando"
                  />
                </div>
                <div className="col d-flex justify-content-end mx-5 mb-5">
                  <Button
                    className="btn btn-danger mx-2"
                    text="Cancelar todo"
                    onClick={() => clear()}
                  />
                  <Button
                    className="btn btn-success mx-2"
                    text="Confirmar compra"
                    onClick={() => ViewForm()}
                  />
                </div>
              </div>
            )}
          </>
        )}
        {show ? (
          <FormPurchase
            ViewForm={ViewForm}
            show={show}
            setShow={setShow}
            priceTotal={priceTotal}
          />
        ) : null}
      </div>
    </>
  );
};
export default ContainerCart;
