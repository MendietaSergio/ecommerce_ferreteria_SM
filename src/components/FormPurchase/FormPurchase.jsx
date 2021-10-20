import React, { useState } from "react";
import { CartContextUse } from "../../Context/CartContext";
import Button from "../Button/Button";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import validationPurchase from "../../validations/Purchase.js";

const FormPurchase = ({ setShow, show, priceTotal }) => {
  const { orders, clear } = CartContextUse();
  const [errorEmail2, setErrorEmail2] = useState("");
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const submit = (data) => {
    if (data.email !== data.email2) {
      setErrorEmail2("El mail debe ser igual al anterior.");
    } else {
      setErrorEmail2("");
      Swal.fire({
        title: "¿Está seguro con los datos de la compra?",
        showDenyButton: true,
        confirmButtonText: "Confirmar",
        position: "center",
        background: "#FFF",
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Compra realizada!", "", "success");
            setTimeout(() => {
              orders(data, priceTotal);
              clear();
              setShow(!show);
              history.push("/compra-finalizada");
              reset()
            }, 2000);
          } else if (result.isDenied) {
            Swal.fire("Compra cancelada", "", "info");
          }
        });
    }
  };
  const CancelarCompra = () => {
    setShow(!show);
    clear();
  };
  return (
    <>
      {show ? (
        <>
          <div>
            <h6 className="text-center">Formulario</h6>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="form-col">
              <form onSubmit={handleSubmit(submit)}>
                <div className="form-group">
                  <label>Nombre completo: </label>
                  <input
                    className={
                      errors.name ? "form-control is-invalid" : "form-control"
                    }
                    name="name"
                    type="text"
                    {...register("name", validationPurchase.name)}
                  />
                  <span className="text-danger">
                    {errors.name ? (
                      <p className="text-danger">{errors.name.message}</p>
                    ) : null}
                  </span>
                </div>
                <div className="form-group">
                  <label>Teléfono: </label>
                  <input
                    className={
                      errors.phone ? "form-control is-invalid" : "form-control"
                    }
                    name="phone"
                    type="number"
                    {...register("phone", validationPurchase.phone)}
                  />
                  <span className="text-danger">
                    {errors.phone ? (
                      <p className="text-danger">{errors.phone.message}</p>
                    ) : null}
                  </span>
                </div>
                <div className="form-group">
                  <label>Correo: </label>
                  <input
                    className={
                      errors.email ? "form-control is-invalid" : "form-control"
                    }
                    name="email"
                    type="email"
                    {...register("email", validationPurchase.email)}
                  />
                  <span className="text-danger">
                    {errors.email ? (
                      <p className="text-danger">{errors.email.message}</p>
                    ) : null}
                  </span>
                </div>
                <div className="form-group">
                  <label>Repita su correo: </label>
                  <input
                    className={
                      errors.email ? "form-control is-invalid" : "form-control"
                    }
                    name="email2"
                    type="email"
                    {...register("email2", validationPurchase.email2)}
                  />
                  <span className="text-danger">
                    {errors.email2 ? (
                      <p className="text-danger">{errors.email2.message}</p>
                    ) : null}
                    {errorEmail2.length > 0 ? (
                      <p className="text-danger">{errorEmail2}</p>
                    ) : null}
                  </span>
                </div>
                <div className="col d-flex justify-content-end mx-5 my-4">
                  <Button
                    className="btn btn-danger mx-2"
                    text="Cancelar todo"
                    onClick={() => CancelarCompra()}
                  />
                  <Button
                    className="btn btn-success mx-2"
                    text="Confirmar compra"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default FormPurchase;
