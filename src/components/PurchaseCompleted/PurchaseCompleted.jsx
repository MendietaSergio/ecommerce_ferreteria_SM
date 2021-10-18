import React, { useState, useEffect } from "react";
import { CartContextUse } from "../../Context/CartContext";

const PurchaseCompleted = () => {
  const { orderId } = CartContextUse();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [orderId]);

  return (
    <>
      <div className="container-body-pages">
        {loading ? (
          <h1 className="text-center my-5">
            Cargando... <i className="fas fa-spinner fa-pulse" />
          </h1>
        ) : orderId === undefined ? (
          <h1 className="text-center my-5">
            Usted no tiene una orden de compra
          </h1>
        ) : (
          <div>
            <h1 className="text-center my-5">Compra finalizada !!</h1>
            <h3 className="text-center my-5">Número de orden: {orderId}</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default PurchaseCompleted;
