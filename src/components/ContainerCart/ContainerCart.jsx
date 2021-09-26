import React, { useState } from "react";
import Button from "../Button/Button";
import "./ContainerCart.css";
import { CartContextUse } from "../../Context/CartContext";
import CartEmpty from "../../images/carritoVacio.png";
import { Link } from "react-router-dom";
const ContainerCart = () => {
  const { clear, removeItem, cart } = CartContextUse();

  console.log("largo del carrito: ", cart.length);

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
                <img
                    className="card-img-top"
                    src={CartEmpty}
                    alt=""/>
                <h3 className="text-center my-3">Puedes ver mas <Link className="products" to="/productos">productos</Link></h3>
            </div>
          </>
        ) : (
          <>
            {cart.map((element) => (
              <>
                <div key={element.id} className="row pb-4">
                  <div className="row my-3">
                    <div className="col">
                      <img
                        className="card-img-top"
                        src={`/assets/img/Productos/${element.item.pictureUrl}`}
                        alt=""
                      />
                    </div>
                    <div className="col">
                      <div className="d-flex flex-column text-left">
                        <h5>{element.item.title}</h5>
                        <a href="/">detalles</a>
                      </div>
                    </div>
                    <div className="col text-center">
                      <h5>precio</h5>
                      <span>${element.item.price},00</span>
                    </div>
                    <div className="col text-center">
                      <h5>Cantidad</h5>
                      <input type="number" value={element.quantity} />
                    </div>
                    <div className="col text-center">
                      <h5>TOTAL</h5>
                      <span>$</span>
                      <br />
                      <i class="far fa-trash-alt"></i>
                    </div>
                  </div>
                  <hr />
                </div>
              </>
            ))}
            <div className="row">
              <div className="col">
                <h4 className="sub-amount">Subtotal: $123123</h4>
              </div>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-end mx-5 mb-5">
                <Button className="btn btn-danger mx-2" text="Cancelar todo" />
                <Button
                  className="btn btn-success mx-2"
                  text="Confirmar compra"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ContainerCart;
