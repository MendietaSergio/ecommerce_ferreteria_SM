import { useEffect, useState } from "react";
import Button from "../..src/components/Container/ItemCount.jsx /Button/Button";
import "./ItemCount.css";
import { CartContextUse } from "../../../Context/CartContext";
export const ItemCount = ({detail}) => {
  const [amount, setAmount] = useState(detail.price);
  const [count, setCount] = useState(1);
  const [cambiarBtn, setCambiarBtn] = useState(true);
  const {addItem } = CartContextUse()

  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    if(loading){
      setInterval(() => {
        setLoading(false)
      }, 2200);
    }
  },)
  const SumCart = () => {
    setCount(count + 1);
    setAmount(amount + detail.price);
  };
  const SubtrationCart = () => {
    if (count !== 1) {
      setCount(count - 1);
      setAmount(amount - detail.price);
    }
  };
  const onAdd = (count) => {
    addItem(detail, count)
    setCambiarBtn(false);
    console.log("Cantidad del producto seleccionado: ",count);
  };
  
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
              {loading ? 
              (<>
              <i className="fas fa-spinner fa-pulse" />
              </> )
              :
              (<>
              <span>{count}</span>
              </>)}
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
              <Button to="/carrito" text="Terminar compra" />
          )}
        </div>
      </div>
    </>
  );
};
