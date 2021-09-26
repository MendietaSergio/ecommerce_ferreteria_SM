import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./ItemCount.css";
export const ItemCount = ({price}) => {
  const [amount, setAmount] = useState(price);
  const [count, setCount] = useState(1);
  const [cambiarBtn, setCambiarBtn] = useState(true);

  const SumCart = () => {
    setCount(count + 1);
    setAmount(amount + price);
  };
  const SubtrationCart = () => {
    if (count != 1) {
      setCount(count - 1);
      setAmount(amount - price);
    }
  };
  const onAdd = (count) => {
    setCambiarBtn(false);
    console.log("Cantidad del producto seleccionado: ",count);
  };
  console.log();
  return (
    <>
      <div className="detail-title">
        <div className="row">
          <div className="cart d-flex justift-content-center ">
            <span className="cart">Carrito:</span>
            <div className="btn btn-primary">
              <span onClick={() => SubtrationCart(count)}>-</span>
            </div>
            <div className="btn">
              <span>{count}</span>
            </div>
            <div className="btn btn-primary">
              <span onClick={() => SumCart(count)}>+</span>
            </div>
          </div>
          {count > 1 ? (
            <span className="mt-3">
              Precio ${amount},00 por {count} unid.
            </span>
          ) : null}
        </div>
        <div className="my-5 mx-4">
          {cambiarBtn ? (
            <Button text="Agregar al carrito" onClick={() => onAdd(count)}/>
          ) : (
            <Link to="/carrito">
              <Button text="Terminar compra" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
