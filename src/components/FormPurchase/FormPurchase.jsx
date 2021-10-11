import React, { useState } from "react";
import { CartContextUse } from "../../Context/CartContext";
import Button from "../Button/Button";
import Swal from 'sweetalert2'
import { useHistory } from "react-router";

const initialData = {
  name: "",
  tel: "",
  email: "",
};
const FormPurchase = ({
  setShow,
  show,
  priceTotal
 }) => {
  const { orders, clear } = CartContextUse();
  const [formData, setFormData] = useState(initialData);
  const history = useHistory()

  const handleOnChange = (e) => {
    setFormData({
      ...formData, //primero seteo lo que ya tiene
      [e.target.name]: e.target.value, //se guarda el valor del nombre de cada input
    });
    console.log(e.target.value);
  };

  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // alert("alerta ")
    
    Swal.fire({
      title: '¿Está seguro con los datos de la compra?',
      showDenyButton: true,
      // showCancelButton: true,
      confirmButtonText: 'Confirmar',
      position: 'center',
      background:"#FFF"
    }).then((result) => {
      if (result.isConfirmed) {
          Swal.fire('Compra realizada!', '', 'success')
          setTimeout(() =>{
          orders(formData, priceTotal)
          setFormData(initialData)
          clear()
          setShow(!show)
          history.push("/")
        }, 6000);
      } else if (result.isDenied) {
        Swal.fire('Compra cancelada', '', 'info')
      }
    })
    
  };
  const CancelarCompra = () =>{
    setShow(!show)
    clear()
  }
  return (
    <>
      {show ? (
        <>
          <div>
            <h6 className="text-center">Formulario</h6>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="form-col">
              <form
                onChange={handleOnChange}
                >
                <div className="form-group">
                  <label>Nombre completo: </label>
                  <input
                    className="form-control"
                    name="name"
                    type="text"
                    value={formData.name}
                  />
                </div>
                <div className="form-group">
                  <label>Teléfono: </label>
                  <input
                    className="form-control"
                    name="tel"
                    type="text"
                    value={formData.tel}
                  />
                </div>
                <div className="form-group">
                  <label>Correo: </label>
                  <input
                    className="form-control"
                    name="email"
                    type="email"
                    value={formData.email}
                    />
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
                    onClick={handleOnSubmit}
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
